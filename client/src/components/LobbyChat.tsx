import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, ChevronDown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGameStore, LobbyChatMessage } from '@/lib/gameStore';
import { cn } from '@/lib/utils';

export function LobbyChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { lobbyChatMessages, sendLobbyChat, user, room } = useGameStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-scroll when new messages arrive
  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      setHasNewMessages(false);
    } else if (lobbyChatMessages.length > 0) {
      setHasNewMessages(true);
    }
  }, [lobbyChatMessages, isOpen, isMinimized]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSend = () => {
    if (message.trim()) {
      sendLobbyChat(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (timestamp: number) => {
    if (!timestamp || isNaN(timestamp)) return '';
    try {
      return new Date(timestamp).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '';
    }
  };

  // Group consecutive messages from same sender
  const groupedMessages = lobbyChatMessages.reduce((groups: { senderId: string; senderName: string; messages: LobbyChatMessage[] }[], msg) => {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.senderId === msg.senderId) {
      lastGroup.messages.push(msg);
    } else {
      groups.push({
        senderId: msg.senderId,
        senderName: msg.senderName,
        messages: [msg]
      });
    }
    return groups;
  }, []);

  const onlineCount = room?.players?.length || 0;

  // Don't render if not in a room
  if (!room) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div 
          className={cn(
            "w-80 sm:w-96 bg-[#1e1f22] rounded-lg shadow-2xl border border-[#2b2d31] flex flex-col transition-all duration-200",
            isMinimized ? "h-12" : "h-[420px]"
          )}
          data-testid="container-lobby-chat"
        >
          {/* Header - Discord style */}
          <div 
            className="flex items-center justify-between gap-2 px-4 py-3 bg-[#2b2d31] rounded-t-lg cursor-pointer select-none"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <MessageCircle className="w-5 h-5 text-[#5865f2]" />
                {hasNewMessages && isMinimized && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                )}
              </div>
              <div>
                <span className="text-sm font-semibold text-white">Chat da Sala</span>
                <div className="flex items-center gap-1 text-xs text-[#949ba4]">
                  <Users className="w-3 h-3" />
                  <span>{onlineCount} online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                className="h-7 w-7 hover:bg-[#3b3d44] text-[#949ba4] hover:text-white"
              >
                <ChevronDown className={cn("w-4 h-4 transition-transform", isMinimized && "rotate-180")} />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="h-7 w-7 hover:bg-[#3b3d44] text-[#949ba4] hover:text-white"
                data-testid="button-close-chat"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Messages area - Discord style */}
              <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-[#2b2d31] scrollbar-track-transparent"
              >
                {groupedMessages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <MessageCircle className="w-12 h-12 text-[#3b3d44] mb-3" />
                    <p className="text-[#949ba4] text-sm font-medium">
                      Nenhuma mensagem ainda
                    </p>
                    <p className="text-[#6d6f78] text-xs mt-1">
                      Seja o primeiro a enviar uma mensagem!
                    </p>
                  </div>
                ) : (
                  groupedMessages.map((group, groupIndex) => {
                    const isMe = group.senderId === user?.uid;
                    const firstMsg = group.messages[0];
                    
                    return (
                      <div 
                        key={`group-${groupIndex}`}
                        className="group hover:bg-[#2b2d31]/50 -mx-4 px-4 py-1 rounded"
                      >
                        {/* Sender info */}
                        <div className="flex items-center gap-2 mb-1">
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                            isMe ? "bg-[#5865f2]" : "bg-[#3b3d44]"
                          )}>
                            {group.senderName.charAt(0).toUpperCase()}
                          </div>
                          <span className={cn(
                            "text-sm font-semibold",
                            isMe ? "text-[#5865f2]" : "text-white"
                          )}>
                            {isMe ? 'Você' : group.senderName}
                          </span>
                          <span className="text-[10px] text-[#6d6f78]">
                            {formatTime(firstMsg.timestamp)}
                          </span>
                        </div>
                        
                        {/* Messages from this sender */}
                        <div className="pl-10 space-y-0.5">
                          {group.messages.map((msg) => (
                            <p 
                              key={msg.id}
                              className="text-sm text-[#dbdee1] break-words leading-relaxed"
                              data-testid={`message-${msg.id}`}
                            >
                              {msg.message}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input area - Discord style */}
              <div className="p-4 bg-[#1e1f22]">
                <div className="flex items-center gap-2 bg-[#383a40] rounded-lg px-4 py-2">
                  <Input
                    ref={inputRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enviar mensagem..."
                    className="flex-1 h-8 text-sm bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#6d6f78] text-[#dbdee1]"
                    maxLength={200}
                    data-testid="input-chat-message"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSend}
                    disabled={!message.trim()}
                    className="h-8 w-8 bg-[#5865f2] hover:bg-[#4752c4] text-white rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="relative h-14 w-14 rounded-full bg-[#5865f2] hover:bg-[#4752c4] text-white shadow-lg transition-transform hover:scale-105"
          data-testid="button-open-chat"
        >
          <MessageCircle className="w-6 h-6" />
          {hasNewMessages && (
            <span className="absolute -top-1 -right-1 min-w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full px-1 animate-bounce">
              {lobbyChatMessages.length > 9 ? '9+' : lobbyChatMessages.length}
            </span>
          )}
        </Button>
      )}
    </div>
  );
}
