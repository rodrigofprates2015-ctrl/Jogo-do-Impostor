import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft,
  Loader2,
  Heart,
  Copy,
  Check,
  Coffee
} from "lucide-react";
import logoImpostor from "@assets/logo_site_impostor_1765071990526.png";

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
      className="min-h-screen w-full flex flex-col items-center relative py-6 px-4"
      style={{
        backgroundColor: '#1C202C'
      }}
    >
      <div className="w-full max-w-lg z-10">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[#4a90a4] border-2 border-[#3d7a8a] rounded-xl text-white hover:bg-[#5aa0b4] transition-all font-semibold shadow-md">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar para Home</span>
        </Link>

        <div className="card-retro p-5 md:p-6 animate-fade-in">
          <div className="flex justify-center mb-4">
            <img src={logoImpostor} alt="Impostor" className="h-20 md:h-24 object-contain" />
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#e9c46a] flex items-center justify-center gap-2 mb-2">
              <Heart className="w-6 h-6 text-red-400 fill-red-400" />
              Apoie o TikJogos
            </h1>
            <p className="text-sm text-gray-300">
              Ajude a manter o TikJogos online e gratuito para todos!
            </p>
            <p className="text-xs text-[#e9c46a] mt-1">
              Doação: R$ 5,00 via PIX
            </p>
          </div>

          {payment.status === 'idle' || payment.status === 'loading' || payment.status === 'error' ? (
            <div className="space-y-4">
              <div className="bg-[#16213e]/50 rounded-xl p-4 border border-[#3d4a5c] mb-4">
                <div className="flex items-center gap-2 text-[#e9c46a] mb-2">
                  <Coffee className="w-5 h-5" />
                  <span className="font-semibold">Por que doar?</span>
                </div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Servidores e hospedagem</li>
                  <li>• Novos modos de jogo</li>
                  <li>• Melhorias contínuas</li>
                  <li>• Manter o jogo 100% gratuito</li>
                </ul>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  maxLength={50}
                  className="input-dark w-full"
                />
                
                <textarea
                  placeholder="Deixe uma mensagem (opcional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={200}
                  rows={3}
                  className="input-dark w-full resize-none"
                />
              </div>
              
              <button
                onClick={handleDonate}
                disabled={payment.status === 'loading'}
                className="btn-orange w-full"
              >
                {payment.status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Heart size={20} className="fill-current" />
                    DOAR R$ 5,00 VIA PIX
                  </>
                )}
              </button>
              
              {payment.status === 'error' && (
                <p className="text-sm text-red-400 text-center">{payment.error}</p>
              )}
            </div>
          ) : payment.status === 'awaiting_payment' ? (
            <div className="space-y-4 text-center">
              <div className="bg-[#16213e]/50 rounded-xl p-4 border border-[#3d4a5c]">
                <p className="text-sm text-gray-300 mb-3">
                  Escaneie o QR Code ou copie o código PIX
                </p>
                
                {payment.qrCodeBase64 && (
                  <div className="bg-white rounded-xl p-3 mx-auto w-fit mb-3">
                    <img 
                      src={`data:image/png;base64,${payment.qrCodeBase64}`}
                      alt="QR Code PIX" 
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                )}
                
                <button
                  onClick={copyPixCode}
                  className="btn-green w-full"
                >
                  <Copy className="w-4 h-4" />
                  Copiar Código PIX
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-[#e9c46a]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <p className="text-xs">
                  Aguardando confirmação do pagamento...
                </p>
              </div>
              
              <button
                onClick={resetForm}
                className="text-sm text-gray-400 hover:text-white transition-colors underline"
              >
                Cancelar e voltar
              </button>
            </div>
          ) : payment.status === 'success' ? (
            <div className="space-y-4 text-center">
              <div className="bg-[#16213e]/50 rounded-xl p-4 border border-green-500/50">
                <div className="flex items-center justify-center gap-2 text-green-400 mb-3">
                  <Check className="w-6 h-6" />
                  <p className="text-lg font-bold">Obrigado pela doação!</p>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">
                  Sua contribuição ajuda a manter o TikJogos online e gratuito para todos.
                </p>
                
                <div className="flex items-center justify-center gap-2 text-[#e9c46a]">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="font-semibold">{donorName}</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={resetForm}
                  className="btn-orange flex-1"
                >
                  Doar novamente
                </button>
                <Link href="/" className="btn-green flex-1 inline-flex items-center justify-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ir jogar
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
