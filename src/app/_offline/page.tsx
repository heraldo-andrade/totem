import Image from "next/image";

export default function OfflinePage() {
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
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
        Você está offline
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "#666",
          maxWidth: 300,
        }}
      >
        Conecte-se à internet na primeira vez para baixar a aplicação.
      </p>
    </main>
  );
}
