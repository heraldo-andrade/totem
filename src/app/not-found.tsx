import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
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
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>
        Página não encontrada
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          maxWidth: 300,
          marginBottom: 32,
        }}
      >
        Desculpe, a página que você está procurando não existe. Você pode estar offline ou a página foi movida.
      </p>
      <Link
        href="/"
        style={{
          padding: "12px 24px",
          backgroundColor: "#0f172a",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Voltar para home
      </Link>
    </main>
  );
}
