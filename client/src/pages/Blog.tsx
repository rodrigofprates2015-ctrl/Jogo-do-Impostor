import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Post } from "@shared/schema";
import { useEffect } from "react";
import { ArrowLeft, Calendar, User, Search, Ghost } from "lucide-react";
import backgroundImg from "@assets/background_natal_1765071997985.png";
import logoTikjogos from "@assets/logo tikjogos_1764616571363.png";
import { AdBlockTop, AdBlockInContent, AdBlockBottom } from "@/components/AdBlocks";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  useEffect(() => {
    document.title = "Blog - TikJogos Impostor | Estratégias e Dicas";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Leia artigos, estratégias e dicas sobre o TikJogos Impostor. Aprenda técnicas avançadas para melhorar seu desempenho no jogo de dedução social!");
    }
  }, []);

  return (
    <div 
      className="min-h-screen w-full relative flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AdBlockTop />

      {/* Navbar similar to existing layout */}
      <nav className="bg-[#0a1628]/90 backdrop-blur-sm border-b border-[#3d4a5c] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <img src={logoTikjogos} alt="TikJogos" className="h-8" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Início</Link>
            <Link href="/comojogar" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Como Jogar</Link>
            <Link href="/" className="btn-orange px-4 py-2 text-sm">Jogar Agora</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            TikJogos<span className="text-[#4a90a4]">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Domine a arte da dedução social com nossas estratégias e dicas exclusivas.
          </p>
        </section>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#16213e]/80 border border-[#3d4a5c] rounded-lg overflow-hidden h-full">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <article 
                key={post.id} 
                className="bg-[#16213e]/80 border border-[#3d4a5c] rounded-lg overflow-hidden h-full flex flex-col"
                data-testid={`card-post-${post.id}`}
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center p-6 text-center">
                  <Ghost className="absolute top-4 right-4 text-white/5 w-24 h-24 -rotate-12" />
                  <h3 className="text-white text-xl font-bold leading-tight z-10" data-testid={`text-title-${post.id}`}>
                    {post.title}
                  </h3>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4a90a4] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        <AdBlockInContent />
      </main>

      <AdBlockBottom />

      <footer className="bg-[#0a1628]/90 border-t border-[#3d4a5c] py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">© 2024 TikJogos. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <Link href="/privacidade" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacidade</Link>
              <Link href="/termos" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Termos</Link>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-[#4a90a4] transition-colors"><Search className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
