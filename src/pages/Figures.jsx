import Figure from "../components/Figure";

const figures = [
  {
    src: "/Figures/fig01.jpg",
    caption: "Figure 1. The static music editing cognitive load pattern.",
  },
  {
    src: "/Figures/fig02.jpg",
    caption: "Figure 2. Divergent and Convergent Phases Schema",
  },
  {
    src: "/Figures/fig03.jpg",
    caption: "Figure 3. The MusicBox in its default state.",
  },
  {
    src: "/Figures/fig04.jpg",
    caption: "Figure 4. The playing state of the MusicBox.",
  },
  {
    src: "/Figures/fig05.jpg",
    caption:
      "Figure 5. Relationship between the Background and Themes audio streams and the shared Post-processing stream in the MusicBox.",
  },
  {
    src: "/Figures/fig06.jpg",
    caption: "Figure 6. Theme selector initialised",
  },
  {
    src: "/Figures/fig07.jpg",
    caption: "Figure 7. Theme UI when a Theme has been chosen.",
  },
  {
    src: "/Figures/fig08.jpg",
    caption: "Figure 8. The Post-Processing elements.",
  },
  {
    src: "/Figures/fig09.jpg",
    caption: "Figure 9. Post-processing chain of operations.",
  },
  {
    src: "/Figures/fig10.jpg",
    caption: "Figure 10. Data flow schema of the MusicBox.",
  },
  {
    src: "/Figures/fig11.jpg",
    caption:
      "Figure 11. - Showing a single instance of the mood, containing segments A and B. All arrows are determined by the randomisation algorithm, except for the switching between Segment A and B, which is upon user input.",
  },
  {
    src: "/Figures/fig12.jpg",
    caption:
      "Figure 12. Schema showing the workings of the Mood Transitions and Crossfade Engine.",
  },
  {
    src: "/Figures/fig13.jpg",
    caption: "Figure 13. First instance of the loop iterations.",
  },
  {
    src: "/Figures/fig14.jpg",
    caption: "Figure 14. All other instances of loop iterations.",
  },
  {
    src: "/Figures/fig15.jpg",
    caption:
      "Figure 15. Structure of the Compositional Elements for the MusicBox",
  },
];

export default function Figures() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui, sans-serif" }}>
      <h1>Figures</h1>
      <p>
        As supporting the thesis;{" "}
        <em>
          ‘Designing a Dynamic Music System for Narrative Audio Storytellers’
        </em>
        , here is supplied attachments and figures in higher definition.
      </p>

      {figures.map((figure, index) => (
        <Figure key={index} src={figure.src} caption={figure.caption} />
      ))}
    </main>
  );
}
