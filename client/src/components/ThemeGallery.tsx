import { useState, useEffect } from "react";
import { X, Loader2, Users, Calendar, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeInfo {
  id: string;
  titulo: string;
  autor: string;
  palavrasCount: number;
  accessCode: string;
  createdAt?: string;
}

interface ThemeGalleryProps {
  onClose: () => void;
  onSelectTheme: (theme: ThemeInfo) => void;
}

const ThemeGallery = ({ onClose, onSelectTheme }: ThemeGalleryProps) => {
  const [themes, setThemes] = useState<ThemeInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/themes/public");
      if (!response.ok) {
        throw new Error("Erro ao carregar temas");
      }
      const data = await response.json();
      setThemes(data);
    } catch (err) {
      setError("Não foi possível carregar os temas da comunidade");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredThemes = themes.filter(
    (theme) =>
      theme.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theme.autor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#242642] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden border-4 border-[#2f3252] shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#242642] border-b-4 border-[#2f3252] p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-white">
              Galeria de Temas da Comunidade
            </h2>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar por nome ou autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border-2 border-slate-700 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-12 h-12 text-purple-400 animate-spin mb-4" />
              <p className="text-slate-400 font-medium">Carregando temas...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-400 font-bold mb-4">{error}</p>
              <button
                onClick={fetchThemes}
                className="px-6 py-3 bg-purple-600 rounded-xl text-white font-bold hover:bg-purple-500 transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          ) : filteredThemes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 font-medium">
                {searchTerm
                  ? "Nenhum tema encontrado com essa busca"
                  : "Nenhum tema disponível ainda"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => onSelectTheme(theme)}
                  className="p-5 bg-slate-800 rounded-2xl border-2 border-slate-700 hover:border-purple-500 hover:bg-slate-750 transition-all text-left group"
                >
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {theme.titulo}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <Users className="w-4 h-4" />
                    <span>por {theme.autor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {theme.palavrasCount} palavras
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {theme.accessCode}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#242642] border-t-4 border-[#2f3252] p-4">
          <p className="text-center text-slate-500 text-sm">
            Selecione um tema para jogar com as palavras da comunidade
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeGallery;
