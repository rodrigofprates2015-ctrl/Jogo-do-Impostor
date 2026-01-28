import { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown, Youtube, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MiniPlayer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user dismissed the player in this session
    const dismissed = sessionStorage.getItem('miniPlayerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show player after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

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

  if (isDismissed || !isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 w-[300px] md:w-[360px] rounded-2xl overflow-hidden shadow-2xl z-40 transition-all duration-300",
        "bg-gradient-to-br from-[#1a1b2e]/95 to-[#2d1f3d]/95 backdrop-blur-xl border border-purple-500/30",
        isMinimized ? "h-auto" : ""
      )}
      style={{
        animation: 'slideUp 0.5s ease-out'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <Youtube className="w-4 h-4 text-red-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-white/90">
            RAP MUGEN
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMinimize}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-purple-400"
            title={isMinimized ? "Expandir" : "Minimizar"}
          >
            {isMinimized ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-red-400"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <>
          {/* YouTube Embed */}
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.youtube.com/embed/JoU9TKojDl8?list=RDJoU9TKojDl8&autoplay=0&mute=0"
              title="RAP MUGEN - YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Channel Link */}
          <a
            href="https://www.youtube.com/@RAPMUGEN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-gradient-to-r from-red-600/20 to-red-500/10 hover:from-red-600/30 hover:to-red-500/20 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">@RAPMUGEN</p>
                <p className="text-xs text-white/60">Inscreva-se no canal!</p>
              </div>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-500 rounded-full text-white text-xs font-bold transition-colors group-hover:scale-105">
              <span>Inscrever</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </>
      )}

      {/* Minimized state - show channel info */}
      {isMinimized && (
        <a
          href="https://www.youtube.com/@RAPMUGEN"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 hover:bg-white/5 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
            <Youtube className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-medium text-white/80">Ouvindo RAP MUGEN...</span>
        </a>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
