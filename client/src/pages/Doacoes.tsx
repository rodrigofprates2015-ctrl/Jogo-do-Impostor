import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft,
  Loader2,
  Heart,
  Copy,
  Check,
  Coffee,
  Zap
} from "lucide-react";
import logoImpostor from "@assets/logo_site_impostor_1765071990526.png";
import tripulanteImg from "@assets/tripulante_natal_1765071995242.png";
import impostorImg from "@assets/impostor_natal_1765071992843.png";

type PaymentState = {
  status: 'idle' | 'loading' | 'awaiting_payment' | 'success' | 'error';
  paymentId?: string;
  qrCode?: string;
  qrCodeBase64?: string;
  error?: string;
};

export default function Doacoes() {
  const { toast } = useToast();
  
  const [donorName, setDonorName] = useState('');
  const [message, setMessage] = useState('');
  const [payment, setPayment] = useState<PaymentState>({ status: 'idle' });

  useEffect(() => {
    if (payment.status !== 'awaiting_payment' || !payment.paymentId) return;
    
    let intervalId: NodeJS.Timeout | null = null;
    let isActive = true;
    
    const pollPaymentStatus = async () => {
      try {
        const res = await fetch(`/api/donations/status/${payment.paymentId}`);
        if (res.ok && isActive) {
          const data = await res.json();
          if (data.status === 'approved') {
            if (intervalId) clearInterval(intervalId);
            setPayment(prev => ({
              ...prev,
              status: 'success'
            }));
          }
        }
      } catch (err) {
        console.error('Error polling payment status:', err);
      }
    };
    
    intervalId = setInterval(pollPaymentStatus, 5000);
    
    return () => {
      isActive = false;
      if (intervalId) clearInterval(intervalId);
    };
  }, [payment.status, payment.paymentId]);

  const handleDonate = async () => {
    if (!donorName.trim()) {
      toast({ title: "Erro", description: "Digite seu nome", variant: "destructive" });
      return;
    }
    
    setPayment({ status: 'loading' });
    
    try {
      const res = await fetch('/api/donations/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: donorName.trim(),
          message: message.trim() || undefined
        })
      });
      
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Falha ao criar pagamento');
      }
      
      const data = await res.json();
      setPayment({
        status: 'awaiting_payment',
        paymentId: data.paymentId,
        qrCode: data.qrCode,
        qrCodeBase64: data.qrCodeBase64
      });
      
    } catch (err: any) {
      setPayment({ status: 'error', error: err.message });
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    }
  };

  const copyPixCode = () => {
    if (payment.qrCode) {
      navigator.clipboard.writeText(payment.qrCode);
      toast({ title: "Copiado!", description: "Código PIX copiado para a área de transferência." });
    }
  };

  const resetForm = () => {
    setDonorName('');
    setMessage('');
    setPayment({ status: 'idle' });
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center relative overflow-hidden"
      style={{ backgroundColor: '#1a1b2e' }}
    >
      {/* Background blur effects */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />

      {/* Tripulante character - left side (desktop only) */}
      <img 
        src={tripulanteImg} 
        alt="Tripulante" 
        className="hidden md:block absolute bottom-32 left-[18%] lg:left-[22%] xl:left-[26%] h-[42vh] max-h-[420px] object-contain z-10"
      />

      {/* Impostor character - right side (desktop only) */}
      <img 
        src={impostorImg} 
        alt="Impostor" 
        className="hidden md:block absolute bottom-32 right-[18%] lg:right-[22%] xl:right-[26%] h-[42vh] max-h-[420px] object-contain z-10"
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center pt-20 md:pt-24 px-4 relative z-20">
        {/* Back button */}
        <div className="w-full max-w-md mb-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border-2 border-slate-700 rounded-xl text-white hover:bg-slate-700 transition-all font-bold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>
        </div>

        {/* Main card - same style as lobby */}
        <div className="bg-[#242642] rounded-[3rem] p-6 md:p-10 shadow-2xl border-4 border-[#2f3252] w-[90%] max-w-md animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <img 
              src={logoImpostor} 
              alt="Logo Impostor" 
              className="h-28 md:h-36 object-contain" 
            />
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-black text-[#facc15] flex items-center justify-center gap-2 mb-2">
              <Heart className="w-7 h-7 text-rose-500 fill-rose-500" />
              APOIE O TIKJOGOS
            </h1>
            <p className="text-slate-400 text-sm">
              Ajude a manter o jogo online e gratuito!
            </p>
          </div>

          {payment.status === 'idle' || payment.status === 'loading' || payment.status === 'error' ? (
            <div className="space-y-4">
              {/* Why donate box */}
              <div className="bg-slate-800 rounded-2xl p-4 border-2 border-slate-700">
                <div className="flex items-center gap-2 text-[#facc15] mb-2">
                  <Coffee className="w-5 h-5" />
                  <span className="font-black text-sm">POR QUE DOAR?</span>
                </div>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>• Servidores e hospedagem</li>
                  <li>• Novos modos de jogo</li>
                  <li>• Melhorias contínuas</li>
                  <li>• Manter o jogo 100% gratuito</li>
                </ul>
              </div>

              {/* Form */}
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu nickname"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  maxLength={50}
                  className="w-full px-4 py-4 bg-[#1a2a3a] border-2 border-[#3a5a7a] rounded-xl text-white text-base placeholder-[#6a8aaa] focus:outline-none focus:border-[#7ec8e3] focus:shadow-[0_0_10px_rgba(126,200,227,0.3)] transition-all"
                />
                
                <textarea
                  placeholder="Deixe uma mensagem (opcional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={200}
                  rows={3}
                  className="w-full px-4 py-4 bg-[#1a2a3a] border-2 border-[#3a5a7a] rounded-xl text-white text-base placeholder-[#6a8aaa] focus:outline-none focus:border-[#7ec8e3] focus:shadow-[0_0_10px_rgba(126,200,227,0.3)] transition-all resize-none"
                />
              </div>
              
              {/* Donate button - same style as CRIAR SALA */}
              <button
                onClick={handleDonate}
                disabled={payment.status === 'loading'}
                className="w-full px-8 py-5 rounded-2xl font-black text-xl tracking-wide flex items-center justify-center gap-3 transition-all duration-300 border-b-[6px] shadow-2xl bg-gradient-to-r from-rose-500 to-pink-500 border-rose-800 text-white hover:brightness-110 active:border-b-0 active:translate-y-2 disabled:bg-slate-700 disabled:border-slate-900 disabled:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {payment.status === 'loading' ? (
                  <Loader2 size={28} className="animate-spin" />
                ) : (
                  <Heart size={28} className="fill-current animate-bounce" />
                )}
                DOAR R$ 5,00
              </button>
              
              {payment.status === 'error' && (
                <p className="text-sm text-rose-400 text-center font-bold">{payment.error}</p>
              )}
            </div>
          ) : payment.status === 'awaiting_payment' ? (
            <div className="space-y-4 text-center">
              <div className="bg-slate-800 rounded-2xl p-4 border-2 border-slate-700">
                <p className="text-sm text-slate-300 mb-3 font-bold">
                  Escaneie o QR Code ou copie o código PIX
                </p>
                
                {payment.qrCodeBase64 && (
                  <div className="bg-white rounded-2xl p-3 mx-auto w-fit mb-3">
                    <img 
                      src={`data:image/png;base64,${payment.qrCodeBase64}`}
                      alt="QR Code PIX" 
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                )}
                
                {/* Copy button - green style */}
                <button
                  onClick={copyPixCode}
                  className="w-full px-6 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all duration-300 border-b-[6px] bg-gradient-to-r from-emerald-500 to-green-500 border-emerald-800 text-white hover:brightness-110 active:border-b-0 active:translate-y-2"
                >
                  <Copy className="w-5 h-5" />
                  COPIAR CÓDIGO PIX
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-[#facc15]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <p className="text-xs font-bold">
                  Aguardando confirmação do pagamento...
                </p>
              </div>
              
              <button
                onClick={resetForm}
                className="text-sm text-slate-400 hover:text-white transition-colors underline font-bold"
              >
                Cancelar e voltar
              </button>
            </div>
          ) : payment.status === 'success' ? (
            <div className="space-y-4 text-center">
              <div className="bg-slate-800 rounded-2xl p-6 border-2 border-emerald-500/50">
                <div className="flex items-center justify-center gap-2 text-emerald-400 mb-3">
                  <Check className="w-8 h-8" />
                  <p className="text-xl font-black">OBRIGADO!</p>
                </div>
                
                <p className="text-sm text-slate-300 mb-4">
                  Sua contribuição ajuda a manter o TikJogos online e gratuito para todos.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-[#facc15]">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="font-black">{donorName}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={resetForm}
                  className="flex-1 px-4 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all duration-300 border-b-[4px] bg-gradient-to-r from-rose-500 to-pink-500 border-rose-800 text-white hover:brightness-110 active:border-b-0 active:translate-y-1"
                >
                  <Heart className="w-4 h-4" />
                  Doar novamente
                </button>
                <Link 
                  href="/" 
                  className="flex-1 px-4 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 transition-all duration-300 border-b-[4px] bg-gradient-to-r from-emerald-500 to-green-500 border-emerald-800 text-white hover:brightness-110 active:border-b-0 active:translate-y-1"
                >
                  <Zap className="w-4 h-4" />
                  Ir jogar
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Footer spacing */}
      <div className="h-20" />
    </div>
  );
}
