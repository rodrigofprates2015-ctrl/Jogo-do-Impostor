import { useState, useEffect, useRef } from 'react';
import { X, Volume2, VolumeX, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MiniPlayer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('miniPlayerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('miniPlayerDismissed', 'true');
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (isDismissed || !isVisible) return null;

  const videoSrc = `https://www.youtube.com/embed/JoU9TKojDl8?list=RDJoU9TKojDl8&autoplay=1&mute=${isMuted ? 1 : 0}&enablejsapi=1`;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-out",
        isMinimized ? "w-[280px]" : "w-[320px] md:w-[380px]"
      )}
      style={{
        animation: isVisible ? 'slideInUp 0.4s ease-out' : undefined
      }}
    >
      <div className="bg-[#242642] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2f3252]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-b-2 border-[#2f3252]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm font-black text-white uppercase tracking-wide">RAP MUGEN</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button
              onClick={toggleMute}
              className={cn(
                "p-2 rounded-xl transition-all border-b-2 active:border-b-0 active:translate-y-0.5",
                isMuted 
                  ? "bg-slate-700 border-slate-800 text-slate-400 hover:bg-slate-600" 
                  : "bg-green-500/20 border-green-700/50 text-green-400 hover:bg-green-500/30"
              )}
              title={isMuted ? "Ativar som" : "Mutar"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            
            <button
              onClick={toggleMinimize}
              className="p-2 rounded-xl bg-slate-700 border-b-2 border-slate-800 text-slate-400 hover:bg-slate-600 transition-all active:border-b-0 active:translate-y-0.5"
              title={isMinimized ? "Expandir" : "Minimizar"}
            >
              {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-slate-700 border-b-2 border-slate-800 text-slate-400 hover:bg-rose-500 hover:text-white hover:border-rose-700 transition-all active:border-b-0 active:translate-y-0.5"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Content */}
        {!isMinimized && (
          <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
            <iframe
              ref={iframeRef}
              key={isMuted ? 'muted' : 'unmuted'}
              className="absolute top-0 left-0 w-full h-full"
              src={videoSrc}
              title="RAP MUGEN - YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}

        {/* Channel Link */}
        <a
          href="https://www.youtube.com/@RAPMUGEN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-red-600/10 to-orange-600/10 hover:from-red-600/20 hover:to-orange-600/20 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center border-2 border-red-700/50">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-black text-white">@RAPMUGEN</p>
              <p className="text-xs text-slate-400 font-medium">Inscreva-se no canal!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-400 rounded-xl text-white text-xs font-black transition-all border-b-3 border-red-700 active:border-b-0 active:translate-y-1 group-hover:scale-105">
            <span>INSCREVER</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </a>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
