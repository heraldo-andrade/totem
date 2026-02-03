'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verificar status da conexão
    const checkOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    checkOnlineStatus();

    // Listeners para mudanças de conexão
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);

    return () => {
      window.removeEventListener('online', checkOnlineStatus);
      window.removeEventListener('offline', checkOnlineStatus);
    };
  }, []);

  // Se voltar online, redireciona para home após 1 segundo
  useEffect(() => {
    if (isOnline) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isOnline, router]);

  const handleGoHome = () => {
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
