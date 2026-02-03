'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('[OFFLINE PAGE] 📄 Página offline carregada');
    console.log('[OFFLINE PAGE] 🌐 Navigator.onLine:', navigator.onLine);
    console.log('[OFFLINE PAGE] 📍 URL atual:', window.location.href);
    console.log('[OFFLINE PAGE] 📍 Referrer:', document.referrer);
    
    // Verificar status da conexão
    const checkOnlineStatus = () => {
      const online = navigator.onLine;
      console.log('[OFFLINE PAGE] 🔍 Check online status:', online);
      setIsOnline(online);
    };

    checkOnlineStatus();

    // Listeners para mudanças de conexão
    const handleOnline = () => {
      console.log('[OFFLINE PAGE] ✅ Evento ONLINE disparado');
      checkOnlineStatus();
    };
    
    const handleOffline = () => {
      console.log('[OFFLINE PAGE] ❌ Evento OFFLINE disparado');
      checkOnlineStatus();
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      console.log('[OFFLINE PAGE] 🧹 Limpando listeners');
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Se voltar online, redireciona para home após 1 segundo
  useEffect(() => {
    if (isOnline) {
      console.log('[OFFLINE PAGE] ⏰ Online detectado, redirecionando em 1 segundo...');
      const timer = setTimeout(() => {
        console.log('[OFFLINE PAGE] 🏠 Redirecionando para home...');
        router.push('/');
      }, 1000);
      
      return () => {
        console.log('[OFFLINE PAGE] ⏰ Timer cancelado');
        clearTimeout(timer);
      };
    }
  }, [isOnline, router]);

  const handleGoHome = () => {
    console.log('[OFFLINE PAGE] 🏠 Botão home clicado');
    console.log('[OFFLINE PAGE] 🌐 Estado online:', navigator.onLine);
    router.push('/');
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 24,
        textAlign: "center",
        backgroundColor: "#f3f7ff",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <Image
          src="/icone-menu-azul/Icon=cards_stack.svg"
          alt="App Icon"
          width={80}
          height={80}
        />
      </div>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8, color: "#0f172a" }}>
        Você está offline
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          maxWidth: 400,
          marginBottom: 16,
        }}
      >
        Esta página não está disponível no cache offline. 
        Para acessar o conteúdo completo, conecte-se à internet.
      </p>
      {isOnline && (
        <p style={{ fontSize: 14, color: "#10b981", fontWeight: "bold" }}>
          ✓ Conectado! Redirecionando...
        </p>
      )}
      {!isOnline && (
        <>
          <button
            onClick={handleGoHome}
            style={{
              padding: "12px 24px",
              backgroundColor: "#0f172a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "16px",
              marginBottom: "12px",
            }}
          >
            Voltar para a página inicial
          </button>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "12px 24px",
              backgroundColor: "transparent",
              color: "#0f172a",
              border: "2px solid #0f172a",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Tentar novamente
          </button>
        </>
      )}
    </main>
  );
}
