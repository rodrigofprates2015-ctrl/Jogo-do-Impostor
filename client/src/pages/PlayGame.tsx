import { useLocation } from "wouter";
import { ArrowLeft, Maximize2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import gameFeed from "@/assets/feed_1768102619275.json";

export default function PlayGame() {
  const [location] = useLocation();
  const gameId = location.split("/").pop();
  const game = gameFeed.find((g) => g.id === gameId);
  const [key, setKey] = useState(0);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#121a31] text-white">
        <h1 className="text-2xl font-bold mb-4">Jogo não encontrado</h1>
        <Button onClick={() => window.history.back()}>Voltar</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#121a31]">
      <header className="flex items-center justify-between p-4 border-b border-[#3a3a3c] bg-[#1a1a1b]">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.history.back()}
            className="text-white hover:bg-[#3a3a3c]"
            data-testid="button-back-play"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold text-white truncate max-w-[200px] md:max-w-md">
            {game.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setKey((prev) => prev + 1)}
            className="text-white hover:bg-[#3a3a3c]"
            title="Reiniciar"
          >
            <RotateCcw className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden bg-black">
        <iframe
          key={key}
          src={game.url}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen; keyboard"
          title={game.title}
        />
      </main>

      <footer className="p-4 bg-[#1a1a1b] border-t border-[#3a3a3c] hidden md:block">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <img src={game.thumb} alt={game.title} className="w-16 h-16 rounded-lg object-cover" />
          <div>
            <h2 className="text-white font-bold">{game.title}</h2>
            <p className="text-gray-400 text-sm line-clamp-2">{game.description}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
