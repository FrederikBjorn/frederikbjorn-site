export default function Figure({ src, caption }) {
  return (
    <figure style={{ margin: "24px 0" }}>
      <img
        src={src}
        alt={caption}
        style={{ maxWidth: "50%", display: "block" }}
      />
      <figcaption style={{ fontSize: 14, opacity: 0.75 }}>{caption}</figcaption>
    </figure>
  );
}
