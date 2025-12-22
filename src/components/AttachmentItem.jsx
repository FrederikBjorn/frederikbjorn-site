export default function AttachmentItem({ item }) {
  const baseStyle = {
    margin: "24px 0",
    padding: 16,
    border: "1px solid #eee",
    borderRadius: 10,
  };

  return (
    <section style={baseStyle}>
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>{item.title}</h3>

      {item.description && (
        <p style={{ marginTop: 0, opacity: 0.8 }}>{item.description}</p>
      )}

      {item.type === "image" && (
        <img
          src={item.src}
          alt={item.title}
          style={{ maxWidth: "100%", display: "block" }}
        />
      )}

      {item.type === "video" && (
        <video
          controls
          style={{ width: "100%", maxWidth: 900, display: "block" }}
          src={item.src}
        />
      )}

      {item.type === "audio" && (
        <audio controls style={{ width: "100%" }} src={item.src} />
      )}

      {item.type === "file" && (
        <p style={{ marginBottom: 0 }}>
          <a href={item.src} target="_blank" rel="noreferrer">
            Open / download: {item.filename ?? item.title}
          </a>
        </p>
      )}

      {item.type === "text" && (
        <pre
          style={{
            whiteSpace: "pre-wrap",
            marginBottom: 0,
            background: "#fafafa",
            padding: 12,
            borderRadius: 8,
          }}
        >
          {item.text}
        </pre>
      )}
    </section>
  );
}
