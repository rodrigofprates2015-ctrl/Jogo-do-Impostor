import { Crown, Plus } from "lucide-react";
import { Link } from "wouter";

export const PremiumBanner = () => {
  return (
    <Link href="/criar-tema">
      <div className="relative group overflow-hidden rounded-3xl border-4 border-purple-900 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.5)] cursor-pointer hover:border-purple-700 transition-all duration-300 mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-[#1a1b2e] z-0"></div>
        
        {/* Decorative crown element */}
        <div className="absolute top-0 right-0 p-10 opacity-20">
          <Crown size={120} className="text-white rotate-12" />
        </div>

        <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/50 text-yellow-300 text-xs font-black uppercase tracking-wider mb-2">
              <Crown size={12} /> Premium
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-none">
              Crie seu Próprio Tema
            </h2>
            <p className="text-indigo-200 font-medium text-sm md:text-base">
              Jogue com suas piadas internas! Crie um baralho exclusivo com 25 palavras personalizadas.
            </p>
          </div>

          <div 
            className="group relative flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl text-black font-black text-lg md:text-xl shadow-xl border-b-[6px] border-orange-700 active:border-b-0 active:translate-y-2 transition-all w-full md:w-auto justify-center hover:brightness-110"
          >
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs font-bold opacity-80">APENAS</span>
              <span>R$ 3,00</span>
            </div>
            <Plus className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform" strokeWidth={3} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PremiumBanner;
