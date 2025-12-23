export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: 8 }}>
        Designing a Dynamic Music System for Narrative Audio Storytellers
      </h1>

      <h2 style={{ marginTop: 0, marginBottom: 16 }}>
        An HCI design approach to Creative Audio Software
      </h2>

      <ul
        style={{
          marginTop: 0,
          paddingLeft: 0,
          listStyle: "none",
          textAlign: "left",
        }}
      >
        <li>Frederik Bjørn Blauenfeldt</li>
        <li>fbbl@itu.dk</li>
        <li>Software Design Thesis</li>
        <li>KISPECI1SE</li>
        <li>Supervisor – Louise Barkhuus</li>
        <li>A Collaboratory Study with Hindenburg Systems</li>
      </ul>

      <a
        href="/Designing-a-Dynamic-Music-System-for-Narrative-Audio-Storytellers-Blauenfeldt.pdf"
        download
        style={{
          marginTop: 24,
          padding: "12px 20px",
          borderRadius: 6,
          backgroundColor: "#213547",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Download Thesis (PDF)
      </a>
    </main>
  );
}
