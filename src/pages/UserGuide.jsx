export default function UserGuide() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui, sans-serif" }}>
      <h1>User Guide</h1>
      <p>
        To demonstrate the functionality and usecase of the MusicBox, we have
        made a video explaining the the different functionality, the UI as well
        as showcasing how it works. It features a stand alone example as well as
        an example of its intended use as an integration into Hindenburg PRO.
        <p style={{ marginTop: 16 }}>
          <em>Timestamps:</em>
        </p>
        <em>
          <ul style={{ marginTop: 0, paddingLeft: 24 }}>
            <li>
              <strong>0:00</strong> — Explanation of the user interface
            </li>
            <li>
              <strong>1:35</strong> — Starting to play and manipulate music in
              the MusicBox
            </li>
            <li>
              <strong>6:47</strong> — Using the MusicBox in a Hindenburg PRO
              session (example 1)
            </li>
            <li>
              <strong>10:50</strong> — Using the MusicBox in a Hindenburg PRO
              session (example 2)
            </li>
          </ul>
        </em>
        Both examples of Hindenburg PRO sessions, are the briefs from our study,
        the once used by our participants.
      </p>

      <section style={{ margin: "48px 0" }}>
        <p style={{ opacity: 0.85 }}>
          <strong>Type:</strong> MP4 &nbsp;|&nbsp;
          <strong>Size:</strong> 54.5 MB &nbsp;|&nbsp;
          <strong>Length:</strong> 14:26
        </p>

        <video
          controls
          preload="metadata"
          style={{ width: "100%", maxWidth: 900, display: "block" }}
        >
          <source src="/Attachments/userguide-comp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p style={{ marginTop: 8 }}>
          <a
            href="/Attachments/userguide-comp.mp4"
            target="_blank"
            rel="noreferrer"
          >
            Open video in new tab
          </a>
        </p>
      </section>
    </main>
  );
}
