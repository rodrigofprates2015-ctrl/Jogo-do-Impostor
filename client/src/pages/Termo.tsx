import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowLeft, Delete, CornerDownLeft, Share2, Trophy, Clock, Settings, BarChart2, HelpCircle } from "lucide-react";
import logoTikjogos from "@assets/logo tikjogos_1764616571363.png";
import { useToast } from "@/hooks/use-toast";

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

const WORDS = [
  "TERMO", "JOGOS", "PRAIA", "CHUVA", "NUVEM", "PEDRA", "FOLHA", "TARDE", "NOITE", "MUNDO",
  "TEMPO", "FESTA", "SONHO", "BRAVO", "CALMO", "FORTE", "FELIZ", "RAPAZ", "MORAR", "AMIGO",
  "PULAR", "NADAR", "ANDAR", "FALAR", "OUVIR", "DIZER", "FAZER", "PODER", "SABER", "VIVER",
  "ACHAR", "OLHAR", "FICAR", "LEVAR", "SUBIR", "ABRIR", "JOGAR", "COMER", "BEBER", "TERRA",
  "PLANO", "LIVRO", "CARTA", "PAPEL", "PORTA", "PONTO", "LONGO", "VERDE", "PRETO", "CORES",
  "GRUPO", "COISA", "PARTE", "LUGAR", "HOMEM", "FILHO", "GENTE", "VELHO", "JOVEM", "BAIXO",
  "LARGO", "CURSO", "FORMA", "CONTA", "FUNDO", "CAUSA", "CAMPO", "CORPO", "PASSO", "BANCO",
  "BARCO", "CANTO", "CARRO", "CERCA", "CHAVE", "CRIME", "DENTE", "DISCO", "DRAMA", "FONTE",
  "GASTO", "GOLPE", "GRADE", "GREVE", "HOTEL", "IDEIA", "LANCE", "MARCA", "METRO", "MONTE",
  "MOTOR", "NOBRE", "ORDEM", "PALCO", "PASTA", "PESCA", "PIZZA", "PLACA", "PRATO", "QUEDA",
  "RAZAO", "REGRA", "RESTO", "RITMO", "ROUPA", "RUIDO", "SABOR", "SAIDA", "SANTO", "SETOR",
  "SIGNO", "SORTE", "TEXTO", "TIGRE", "TINTA", "TOTAL", "TURMA", "UNIAO", "UNICO", "VAPOR",
  "VIDEO", "VINHO", "VISAO", "VOLTA", "ZEBRA", "BAIXA", "BOLSA", "BUSCA", "CALMA", "CARNE",
  "CIFRA", "CLIMA", "COROA", "DANCA", "DIETA", "DUPLA", "ETAPA", "FAIXA", "FALHA", "FORCA",
  "GARRA", "HONRA", "LENDA", "LINHA", "LISTA", "MEDIA", "MOEDA", "NIVEL", "PAUSA", "PERDA",
  "PISTA", "PROVA", "RENDA", "RISCO", "SAUDE", "SELVA", "SERIE", "TECLA", "TORRE", "TROCA",
  "VENDA", "AREIA", "CALOR", "CLARA", "CORTE", "CURVA", "DOBRA", "FIBRA", "FLORA", "FAUNA",
  "GALHO", "GRAMA", "GRUTA", "HORTA", "INFRA", "LARGA", "LONGE", "MEDIR", "MIGRA", "NORMA",
  "OUTRA", "PALMA", "PERNA", "PLENA", "PRETA", "PRIMA", "QUASE", "RUIVA", "SOLTA", "SULCO",
  "TRAMA", "TROPA", "TURNO", "ULTRA", "VALSA", "VULTO", "ZEROS", "APOIO", "BRISA", "CABRA",
  "DARDO", "ELEVA", "FARDO", "GAROA", "HEROI", "IDEAI", "JEITO", "KARMA", "LAPSO", "MANHA",
  "NAVAL", "OPACO", "PILHA", "QUOTA", "RAIVA", "SALTO", "TACHO", "USUAL", "VAZIO", "XEQUE",
  "ABETO", "BESTA", "CASAL", "DARDO", "EXATO", "FIRME", "GESSO", "HASTE", "IDADE", "JANTA",
  "KOALA", "LIMPO", "MAGRO", "NAIPE", "OLIVA", "PARGO", "QUILO", "RASGO", "SURDO", "TELHA",
  "USINA", "VIDRO", "XEROX", "ANCLA", "BORDO", "CEDRO", "DISCO", "ERETO", "FALSO", "GENIO",
  "HINDU", "IGUAL", "JUNTO", "LENTO", "MUITO", "NERVO", "OPTAR", "POMBO", "QUEDA", "REINO",
  "SUAVE", "TRENS", "URUBU", "VIGOR", "VULGO", "ANEXO", "BARRO", "CUSTO", "DENSO", "EMAIL",
  "FOGAO", "GRAVE", "HARPA", "ICONE", "JULHO", "LATIM", "MUNDO", "NERVO", "OBESO", "POLVO"
];

const VALID_KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
];

function getDailyWord(): string {
  const brasiliaOffset = -3 * 60;
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const brasiliaTime = new Date(utc + (brasiliaOffset * 60000));
  
  const startDate = new Date(2024, 0, 1);
  const diffTime = brasiliaTime.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return WORDS[diffDays % WORDS.length];
}

function getTimeUntilMidnight(): { hours: number; minutes: number; seconds: number } {
  const brasiliaOffset = -3 * 60;
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const brasiliaTime = new Date(utc + (brasiliaOffset * 60000));
  
  const midnight = new Date(brasiliaTime);
  midnight.setHours(24, 0, 0, 0);
  
  const diff = midnight.getTime() - brasiliaTime.getTime();
  
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000)
  };
}

type LetterState = "correct" | "present" | "absent" | "empty";

interface LetterResult {
  letter: string;
  state: LetterState;
}

function checkWord(guess: string, target: string): LetterResult[] {
  const result: LetterResult[] = [];
  const targetLetters = target.split("");
  const remaining: string[] = [...targetLetters];
  
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === target[i]) {
      result[i] = { letter: guess[i], state: "correct" };
      remaining[i] = "";
    } else {
      result[i] = { letter: guess[i], state: "absent" };
    }
  }
  
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i].state !== "correct") {
      const idx = remaining.indexOf(guess[i]);
      if (idx !== -1) {
        result[i].state = "present";
        remaining[idx] = "";
      }
    }
  }
  
  return result;
}

function getStorageKey(): string {
  const brasiliaOffset = -3 * 60;
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const brasiliaTime = new Date(utc + (brasiliaOffset * 60000));
  return `termo_${brasiliaTime.toISOString().split('T')[0]}`;
}

interface GameState {
  guesses: string[];
  currentGuess: string;
  gameStatus: "playing" | "won" | "lost";
}

function loadGameState(targetWord: string): GameState {
  const key = getStorageKey();
  const saved = localStorage.getItem(key);
  
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return { guesses: [], currentGuess: "", gameStatus: "playing" };
    }
  }
  
  return { guesses: [], currentGuess: "", gameStatus: "playing" };
}

function saveGameState(state: GameState): void {
  const key = getStorageKey();
  localStorage.setItem(key, JSON.stringify(state));
}

export default function Termo() {
  const { toast } = useToast();
  const [targetWord] = useState(() => getDailyWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [keyboardState, setKeyboardState] = useState<Record<string, LetterState>>({});
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const saved = loadGameState(targetWord);
    setGuesses(saved.guesses);
    setCurrentGuess(saved.currentGuess);
    setGameStatus(saved.gameStatus);
    
    const newKeyboardState: Record<string, LetterState> = {};
    saved.guesses.forEach((guess) => {
      const result = checkWord(guess, targetWord);
      result.forEach(({ letter, state }) => {
        const current = newKeyboardState[letter];
        if (!current || state === "correct" || (state === "present" && current === "absent")) {
          newKeyboardState[letter] = state;
        }
      });
    });
    setKeyboardState(newKeyboardState);
  }, [targetWord]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    saveGameState({ guesses, currentGuess, gameStatus });
  }, [guesses, currentGuess, gameStatus]);

  const handleKeyPress = useCallback((key: string) => {
    if (gameStatus !== "playing") return;

    if (key === "ENTER") {
      if (currentGuess.length !== WORD_LENGTH) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        toast({ title: "Palavra incompleta", description: `Digite ${WORD_LENGTH} letras`, variant: "destructive" });
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      const result = checkWord(currentGuess, targetWord);
      
      const newKeyboardState = { ...keyboardState };
      result.forEach(({ letter, state }) => {
        const current = newKeyboardState[letter];
        if (!current || state === "correct" || (state === "present" && current === "absent")) {
          newKeyboardState[letter] = state;
        }
      });
      
      setGuesses(newGuesses);
      setKeyboardState(newKeyboardState);
      setCurrentGuess("");

      if (currentGuess === targetWord) {
        setGameStatus("won");
        toast({ title: "Parabéns!", description: `Você acertou em ${newGuesses.length} tentativa${newGuesses.length > 1 ? 's' : ''}!` });
      } else if (newGuesses.length >= MAX_ATTEMPTS) {
        setGameStatus("lost");
        toast({ title: "Fim de jogo", description: `A palavra era: ${targetWord}`, variant: "destructive" });
      }
    } else if (key === "⌫" || key === "BACKSPACE") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
      setCurrentGuess((prev) => prev + key);
    }
  }, [currentGuess, gameStatus, guesses, keyboardState, targetWord, toast]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      handleKeyPress(key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyPress]);

  const shareResult = () => {
    const emojiGrid = guesses.map((guess) => {
      const result = checkWord(guess, targetWord);
      return result.map(({ state }) => {
        if (state === "correct") return "🟩";
        if (state === "present") return "🟨";
        return "⬛";
      }).join("");
    }).join("\n");

    const text = `Termo ${guesses.length}/${MAX_ATTEMPTS}\n\n${emojiGrid}\n\nJogue em tikjogos.com.br`;
    
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      toast({ title: "Copiado!", description: "Resultado copiado para a área de transferência" });
    }
  };

  const getKeyStyle = (key: string) => {
    const state = keyboardState[key];
    if (state === "correct") return "bg-emerald-600 text-white border-emerald-600";
    if (state === "present") return "bg-amber-500 text-white border-amber-500";
    if (state === "absent") return "bg-slate-700 text-slate-300 border-slate-700";
    return "bg-slate-600 text-white border-slate-600";
  };

  const renderGrid = () => {
    const rows = [];
    
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      const guess = guesses[i];
      const isCurrentRow = i === guesses.length && gameStatus === "playing";
      const cells = [];
      
      for (let j = 0; j < WORD_LENGTH; j++) {
        let letter = "";
        let state: LetterState = "empty";
        
        if (guess) {
          const result = checkWord(guess, targetWord);
          letter = result[j].letter;
          state = result[j].state;
        } else if (isCurrentRow) {
          letter = currentGuess[j] || "";
        }
        
        let cellClass = "flex items-center justify-center text-3xl font-bold uppercase transition-all duration-300 transform select-none rounded-sm border-2";
        
        if (state === "correct") {
          cellClass += " bg-emerald-600 border-emerald-600 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]";
        } else if (state === "present") {
          cellClass += " bg-amber-500 border-amber-500 text-white";
        } else if (state === "absent") {
          cellClass += " bg-slate-700 border-slate-700 text-slate-300";
        } else {
          cellClass += " border-slate-700 bg-slate-800/30 text-white";
        }
        
        if (isCurrentRow && shake) {
          cellClass += " animate-shake";
        }
        
        cells.push(
          <div key={j} className={cellClass}>
            {letter}
          </div>
        );
      }
      
      rows.push(
        <div key={i} className="grid grid-cols-5 gap-2">
          {cells}
        </div>
      );
    }
    
    return rows;
  };

  const renderKeyboard = () => {
    return VALID_KEYS.map((row, i) => (
      <div key={i} className="flex justify-center gap-1.5">
        {row.map((key) => {
          const isSpecial = key === "ENTER" || key === "⌫";
          const baseStyle = "flex items-center justify-center rounded font-bold text-sm select-none transition-all active:scale-95 shadow-sm active:translate-y-0.5";
          const sizeStyle = isSpecial ? "px-2 py-3 w-14 sm:w-16" : "w-8 h-12 flex-1 max-w-[42px] sm:h-14";
          
          let content: React.ReactNode = key;
          if (key === "ENTER") content = <CornerDownLeft size={18} />;
          if (key === "⌫") content = <Delete size={18} />;

          return (
            <button 
              key={key} 
              onClick={() => handleKeyPress(key)}
              className={`${baseStyle} ${sizeStyle} ${!isSpecial ? getKeyStyle(key) : 'bg-slate-600 text-white border-slate-600'}`}
              data-testid={`key-${key}`}
            >
              {content}
            </button>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center font-sans antialiased selection:bg-emerald-500/30">
      
      {/* Header */}
      <header className="w-full max-w-lg pt-6 pb-6 px-4 flex flex-col items-center relative border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm z-10">
        
        {/* Navigation Icons */}
        <div className="absolute top-6 left-4 flex gap-3">
          <Link href="/outros-jogos">
            <ArrowLeft className="w-6 h-6 text-slate-400 cursor-pointer hover:text-emerald-400 transition-colors" data-testid="button-back" />
          </Link>
          <HelpCircle className="w-6 h-6 text-slate-400 cursor-pointer hover:text-emerald-400 transition-colors" data-testid="button-help" />
        </div>
        <div className="absolute top-6 right-4 flex gap-3">
          <BarChart2 className="w-6 h-6 text-slate-400 cursor-pointer hover:text-emerald-400 transition-colors" data-testid="button-stats" />
        </div>

        {/* Title with Logo */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-emerald-500 rounded shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-400 flex-shrink-0"></div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Termo</h1>
          </div>
          
          <p className="text-slate-400 font-medium text-sm mb-3">Descubra a palavra do dia</p>
          
          {/* Timer */}
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700/50 shadow-inner">
            <Clock size={14} className="text-emerald-500" />
            <span>Próxima palavra em: <span className="font-mono font-bold text-emerald-300 text-sm ml-1">{String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span></span>
          </div>
        </div>
      </header>

      {/* Game Area */}
      <main className="flex-1 flex flex-col justify-center items-center w-full max-w-lg px-2 py-4 gap-6">
        
        {/* Word Grid */}
        <div className="grid grid-rows-6 gap-2 w-full max-w-[320px] aspect-[5/6]">
          {renderGrid()}
        </div>

        {/* Victory/Loss Message */}
        {gameStatus !== "playing" && (
          <div className="bg-slate-800 border border-emerald-500/30 px-6 py-3 rounded-lg shadow-xl flex flex-col items-center gap-2 w-full max-w-[320px]">
            {gameStatus === "won" ? (
              <span className="text-emerald-400 font-bold text-lg tracking-wide uppercase flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Parabéns!
              </span>
            ) : (
              <span className="text-red-400 font-bold text-lg tracking-wide uppercase">
                A palavra era: {targetWord}
              </span>
            )}
            <div className="flex gap-3 mt-1 w-full justify-center">
               <button 
                 onClick={shareResult}
                 className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-bold py-2 px-4 rounded transition-all shadow-lg"
                 data-testid="button-share"
               >
                  <Share2 size={16} /> Compartilhar
               </button>
            </div>
          </div>
        )}

      </main>

      {/* Keyboard */}
      <div className="w-full max-w-lg px-2 pb-6 pt-2">
        <div className="flex flex-col gap-2 w-full">
          {renderKeyboard()}
        </div>
      </div>

      {/* Legend */}
      <div className="pb-4 text-center text-slate-500 text-xs max-w-sm flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-emerald-600 rounded-sm"></div>
          <span>Correta</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-amber-500 rounded-sm"></div>
          <span>Posição errada</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-slate-700 rounded-sm"></div>
          <span>Não está</span>
        </div>
      </div>

      {/* Logo */}
      <div className="pb-4 text-center">
        <img src={logoTikjogos} alt="TikJogos" className="h-4 md:h-5 mx-auto" />
      </div>

      <style>{`
        .animate-shake {
          animation: shake 0.5s ease-out;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
      `}</style>
    </div>
  );
}
