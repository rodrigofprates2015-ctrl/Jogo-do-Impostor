import { useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';

export default function RoomRedirect() {
  const [, params] = useRoute('/sala/:codigo');
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (params?.codigo) {
      // Store the room code in sessionStorage so the home page can auto-fill it
      sessionStorage.setItem('autoJoinRoomCode', params.codigo.toUpperCase());
      // Redirect to home page
      setLocation('/');
    }
  }, [params, setLocation]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1C202C]">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Redirecionando para a sala...</p>
      </div>
    </div>
  );
}
