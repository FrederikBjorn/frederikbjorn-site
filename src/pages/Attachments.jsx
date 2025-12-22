import AttachmentItem from "../components/AttachmentItem";

const attachment4 = [
  {
    section: "Mental Effort",
    figures: [
      {
        src: "/Attachments/attachment-4/fig18.png",
        caption:
          "Figure 18. Paired Mental Effort Scores / Individual Trajectories.",
      },
      {
        src: "/Attachments/attachment-4/fig19.png",
        caption: "Figure 19. Mean Mental Effort (Baseline vs. Condition).",
      },
    ],
  },
  {
    section: "Enjoyment – Q1 and Q2 summed",
    figures: [
      {
        src: "/Attachments/attachment-4/fig20.png",
        caption:
          "Figure 20. Paired Enjoyment Scores / Individual Trajectories.",
      },
      {
        src: "/Attachments/attachment-4/fig21.png",
        caption: "Figure 21. Mean Enjoyment (Baseline vs. Condition).",
      },
    ],
  },
  {
    section: "Exploration – Q1 and Q2 summed",
    figures: [
      {
        src: "/Attachments/attachment-4/fig22.png",
        caption:
          "Figure 22. Paired Exploration Scores / Individual Trajectories.",
      },
      {
        src: "/Attachments/attachment-4/fig23.png",
        caption: "Figure 23. Mean Exploration (Baseline vs. Condition).",
      },
    ],
  },
  {
    section: "Expressiveness – Q1 and Q2 summed",
    figures: [
      {
        src: "/Attachments/attachment-4/fig24.png",
        caption:
          "Figure 24. Paired Expressiveness Scores / Individual Trajectories.",
      },
      {
        src: "/Attachments/attachment-4/fig25.png",
        caption: "Figure 25. Mean Expressiveness (Baseline vs. Condition).",
      },
    ],
  },
  {
    section: "Immersion – Q1 and Q2 summed",
    figures: [
      {
        src: "/Attachments/attachment-4/fig26.png",
        caption:
          "Figure 26. Paired Immersion Scores / Individual Trajectories.",
      },
      {
        src: "/Attachments/attachment-4/fig27.png",
        caption: "Figure 27. Mean Immersion (Baseline vs. Condition).",
      },
    ],
  },
  {
    section: "Results Worth Effort – Q1 and Q2 summed",
    figures: [
      {
        src: "/Attachments/attachment-4/fig28.png",
        caption: "Figure 28.",
      },
      {
        src: "/Attachments/attachment-4/fig29.png",
        caption:
          "Figure 29. Mean Results Worth Effort (Baseline vs. Condition).",
      },
    ],
  },
  {
    section: "Collaboration – Q1 and Q2 summed",
    figures: [
      {
        src: "/Attachments/attachment-4/fig30.png",
        caption:
          "Figure 30. Paired Results Worth Effort Scores / Individual Trajectories.",
      },
      {
        src: "/Attachments/attachment-4/fig31.png",
        caption:
          "Figure 31. Mean Results Worth Effort (Baseline vs. Condition).",
      },
      {
        src: "/Attachments/attachment-4/fig32.png",
        caption: "Figure 32. Serendipity – Yes or No measurement.",
      },
    ],
  },
];

export default function Attachments() {
  return (
    <main style={{ padding: 40, fontFamily: "system-ui, sans-serif" }}>
      <h1>Attachments</h1>
      <section style={{ margin: "32px 0" }}>
        <h3 style={{ marginBottom: 8 }}>
          Attachment 1 – Study Questionnaire, the Creativity Support Index
        </h3>

        <p style={{ maxWidth: 800, lineHeight: 1.6 }}>
          The Creativity Support Index (CSI) is a quantitative framework made by
          E. Cherry and C. Latulipe (2014), which is a proposed standard way of
          measuring the effectiveness of Creative Software on seven different
          points: Mental Effort, Enjoyment, Exploration, Expressiveness,
          Immersion, Results Worth Effort, and Collaborative Enablement. In
          addition to this, we have added an entry regarding Serendipity.
        </p>

        <p>
          <a
            href="/Attachments/Study Questionnaire MusicBox v. 0.1 CSI.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF
          </a>
        </p>
      </section>
      <section style={{ margin: "32px 0" }}>
        <h3 style={{ marginBottom: 8 }}>
          Attachment 2 – Our pre-development MoSCoW
        </h3>

        <p style={{ marginTop: 0, opacity: 0.8 }}>
          Moscow for the Musicbox categorised into Functional Requirements (FR)
          and Non-Functional Requirements (NFR).
        </p>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            background: "#fafafa",
            border: "1px solid #eee",
            borderRadius: 10,
            padding: 16,
            lineHeight: 1.5,
          }}
        >
          {`Must have
The ability for the user to ‘play’ and or engage with the musicbox in a playful manner, NFR - Implemented
Basic mixer interface on master track (gain slider and a filter), FR - Implemented
Perfect looping system, FR - Implemented
States, to manage emotions, FR - Implemented
Give the user freedom to always change the feeling of the music instantly at any point in time, NFR - Implemented
A volume slider/knob for each instrument, FR - Implemented
Three instruments or modes? - chords, rhythm and pad?, FR -Implemented
Separate Theme player, FR - Implemented.
Playback speed, FR - Implemented.
Randomisation of loops, FR - Implemented.
Randomised loops categorised into segments, FR - Implemented.
A design for the filters, FR - Implemented.

Should have
The ability to easily interact with the post-processing capabilities, NFR.
Post-procession functionality like
Reverb, FR - Implemented
Delay FR - Implemented.
Harmonic overtones? - Not implemented.

A way to interact with the post-processing together in an intuitive and functional way, NFR - Not implemented.
A way to modulate the freeze of the reverb, FR - Implemented.

Could have
A beautiful UI, NFR - Not implemented.
A smooth feel for the modes faders to help user with volume editing, NFR - Not implemented.
Eight different modes?, FR - Not implemented.
Individual processing for each instrument, FR - Not implemented.
Templates that would work for all modes, like a way to engage serendipitous discovery. Like setting the filter in a certain place, speed a certain place, reverb etc, FR - Not implemented.
Each mode has a value of energy, 1 through 3. Something like aa filter taking out top or maybe increasing the gain, FR - Not implemented.

Won't have
An overall thorough design, NFR - Not implemented.
Midi editing/theme functionality, FR - Not implemented.
Save state system, FR - Not implemented.
One shots system, FR - Not implemented.
Automations, FR - Not implemented.`}
        </pre>
      </section>
      <section style={{ margin: "32px 0" }}>
        <h3 style={{ marginBottom: 8 }}>
          Attachment 3 – The ‘Kiki’ and ‘Bouba’ framework
        </h3>

        <p style={{ maxWidth: 800, lineHeight: 1.6 }}>
          According to Gómez Milán et al. (2013), Bouba-like phonemes are
          associated with adjectives such as <em>round, soft, calm,</em> and{" "}
          <em>pleasant</em>.
        </p>

        <h4>Bouba-oriented phonetic set</h4>
        <ul>
          <li>
            <strong>Voiced plosives:</strong> /b/, /d/, /ɡ/
          </li>
          <li>
            <strong>Nasals:</strong> /m/, /n/
          </li>
          <li>
            <strong>Approximants:</strong> /l/, /ɹ/ (r)
          </li>
          <li>
            <strong>Rounded vowels:</strong> /u/, /o/, /a/
          </li>
          <li>
            <strong>Example pseudowords:</strong> moba, lumo, banu, gola
          </li>
        </ul>

        <p style={{ maxWidth: 800, lineHeight: 1.6 }}>
          In contrast, Kiki-like phonemes are associated with adjectives such as
          <em> sharp, energetic, tense,</em> and <em>edgy</em>.
        </p>

        <h4>Kiki-oriented phonetic set</h4>
        <ul>
          <li>
            <strong>Voiceless plosives:</strong> /p/, /t/, /k/
          </li>
          <li>
            <strong>Voiceless fricatives:</strong> /s/, /ʃ/ (sh), /f/
          </li>
          <li>
            <strong>High/front vowels:</strong> /i/, /e/
          </li>
          <li>
            <strong>Example pseudowords:</strong> kiti, shapa, feki, tisu
          </li>
        </ul>

        <p style={{ maxWidth: 800, lineHeight: 1.6 }}>
          Using this schema, the composer is first asked to categorise their
          composition as either Bouba-oriented or Kiki-oriented. From this
          categorisation, they can then construct a pseudoword mode name of two
          to three vocal or continuant clusters, aligned with the corresponding
          phonetic set.
        </p>
      </section>

      <section style={{ margin: "48px 0" }}>
        <h3>11.4 Attachment 4 – Charts for Creative Support Index (CSI)</h3>

        {attachment4.map((group, groupIndex) => (
          <section key={groupIndex} style={{ marginTop: 32 }}>
            <h4>{group.section}</h4>

            {group.figures.map((fig, figIndex) => (
              <figure key={figIndex} style={{ margin: "24px 0" }}>
                <img
                  src={fig.src}
                  alt={fig.caption}
                  style={{
                    maxWidth: "35%",
                    display: "block",
                    border: "1px solid #eee",
                  }}
                />
                <figcaption
                  style={{ marginTop: 8, fontSize: 14, opacity: 0.75 }}
                >
                  {fig.caption}
                </figcaption>
              </figure>
            ))}
          </section>
        ))}
      </section>

      <section style={{ margin: "48px 0" }}>
        <h3>
          11.6 Attachment 5 – Video of Subject 1’s Brief 2 Hindenburg Project
        </h3>

        <p style={{ opacity: 0.85 }}>
          <strong>Type:</strong> MP4 &nbsp;|&nbsp;
          <strong>Size:</strong> 58 MB &nbsp;|&nbsp;
          <strong>Length:</strong> 6:20
        </p>

        <video
          controls
          preload="metadata"
          style={{ width: "100%", maxWidth: 900, display: "block" }}
        >
          <source src="/Attachments/Attachment05.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p style={{ marginTop: 8 }}>
          <a
            href="/Attachments/Attachment05-comp.mp4"
            target="_blank"
            rel="noreferrer"
          >
            Open video in new tab
          </a>
        </p>
      </section>

      <section style={{ margin: "48px 0" }}>
        <h3>
          11.7 Attachment 6 – Video of Subject 2’s Brief 1 Hindenburg Project
        </h3>

        <p style={{ opacity: 0.85 }}>
          <strong>Type:</strong> MP4 &nbsp;|&nbsp;
          <strong>Size:</strong> 13.2 MB &nbsp;|&nbsp;
          <strong>Length:</strong> 1:24
        </p>

        <video
          controls
          preload="metadata"
          style={{ width: "100%", maxWidth: 900, display: "block" }}
        >
          <source src="/Attachments/Attachment06-comp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p style={{ marginTop: 8 }}>
          <a
            href="/Attachments/Attachment06-comp.mp4"
            target="_blank"
            rel="noreferrer"
          >
            Open video in new tab
          </a>
        </p>
      </section>

      <section style={{ margin: "48px 0" }}>
        <h3>11.8 Attachment 7 – Heartbeat_Full Music Track</h3>

        <p style={{ opacity: 0.85 }}>
          <strong>Type:</strong> MP3 &nbsp;|&nbsp;
          <strong>Size:</strong> 3.2 MB &nbsp;|&nbsp;
          <strong>Length:</strong> 2:17
        </p>

        <audio
          controls
          preload="metadata"
          style={{ width: "100%", maxWidth: 900 }}
        >
          <source src="/Attachments/Attachment07-comp.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <p style={{ marginTop: 8 }}>
          <a
            href="/Attachments/Attachment07-comp.mp3"
            target="_blank"
            rel="noreferrer"
          >
            Download / open audio
          </a>
        </p>
      </section>

      <section style={{ margin: "48px 0" }}>
        <h3>11.9 Attachment 8 – Subject 5 – Brief 1 Excerpt</h3>

        <p style={{ opacity: 0.85 }}>
          <strong>Type:</strong> MP3 &nbsp;|&nbsp;
          <strong>Size:</strong> 2.7 MB &nbsp;|&nbsp;
          <strong>Length:</strong> 1:41
        </p>

        <audio
          controls
          preload="metadata"
          style={{ width: "100%", maxWidth: 900 }}
        >
          <source src="/Attachments/Attachment08-comp.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <p style={{ marginTop: 8 }}>
          <a
            href="/Attachments/Attachment08-comp.mp3"
            target="_blank"
            rel="noreferrer"
          >
            Download / open audio
          </a>
        </p>
      </section>

      <section style={{ margin: "32px 0" }}>
        <h3 style={{ marginBottom: 8 }}>
          Attachment 9 - Observer Log of Each of the Subjects
        </h3>

        <p style={{ marginTop: 0, opacity: 0.8 }}>
          Moscow for the Musicbox categorised into Functional Requirements (FR)
          and Non-Functional Requirements (NFR).
        </p>

        <pre
          style={{
            whiteSpace: "pre-wrap",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            background: "#fafafa",
            border: "1px solid #eee",
            borderRadius: 10,
            padding: 16,
            lineHeight: 1.5,
          }}
        >
          {`
Subject 1
Baseline - Brief 1
Starts by listening to speak.
Royalty-free music has different gain levels, which confuses
Uses multiple instances of the same musical track
Applies fades to all the musical tracks. 
A lead in one of the musical tracks ruined an otherwise great composition. 

MusicBox Condition - Brief 2
No prior knowledge of dynamic or algorithmic music.
Understood the theme of the podcast right away. This has been edited in newer versions of Brief 2.
Uses the musicbox directly under the speaker af only 3 minutes of editing, 
Using one mood quite extensively might be due to the background as a musician and producer. 
Master vol fader used to create live fades
Does not listen to all themes, mostly uses theme 1. 
Does not understand that themes are unique for each mood 🙁
Uses multiple instances of the musicbox on top of one another, 
Only engages the musical segment B button after 25 minutes. 
Thinks the fades are too slow, even at the fade bar set to 2. 
Subject 2
Baseline - Brief 2
Starts by listening and taking very extensive notes. Sonically oriented.
Ran a bit out of time, too focused on the ambience and SFX sounds … 
Drags and drops most music untouched
Thinks it is easy to know the music based on the name
Tries to use the heartbeat_full music track, but is thrown off by the ending.
However annoyed to learn that each music track is not a ‘simple loop’, but a more fully arranged piece which changes during the arrangement. 

Condition 1 - Brief 1
No knowledge of dynamic or algorithmic music, except listening to Brian Eno…
Starts by listening and taking very extensive notes. Sonically oriented.
Opens the MusicBox after 15 minutes. 
Tried to directly fade between moods, sets in the fade bar at 1.
Thinks that the moods change from happy at the top to more mysterious at the bottom, with some more general category in the middle (e.g. Baupa).
Surprised that the music suddenly stops, no wash automatically, just a complete cut. 
Spends more time on the music compared to the baseline - this observation might be biased, as I was sitting in the room. 
Uses a technique where the music boxes start at -30 for all modes, and then fade in the modes gradually, jumping between them.
Serendipitous moment around 4:10 - 5:10 in the Brief 2 session. Uses the playback speed with only Melin Chords playing, creating a drunken-disoriented feeling (sort of acting like a manual LFO interaction with the knob).
Thinks that the moods should have some sort of preview, or maybe the possibility to jump between them at 0 fade time, to more easily get an overview of what they contain. 
Did not really interact with the themes that much. 

Subject 3
Baseline - Brief 1
Starts by listening to speak 
Set makers for scenes like “st. Johns er en lille by.”
Listens to musical pieces, but only the first 10-30 seconds. 
Starts the episode-specific speech with a cinematic woosh and music. 
Get surprised at the lead synth that appears in the ‘Heatbeat_full’ music piece. This pulls the subject out of high-level editing into low-level task mode, as this now needs “fixing”. 
Cuts both speak and music to match the emphasis points. 
Creates a new instance of music and tries to match the timing of it to the prior instancealow-levell task, tasks too long. 
Sections of the music tracks which actually fit are not long enough. 
Uses a woosh from soundly to create a wash-out effect.
Creates a music RVB track to feed small sections of music into, helping with the wash-out effect of the woosh. 

Condition 1 - Brief 2
Does not know what is meant by dynamic music, but has played quite a few video games …
Listen to the music box during the interview/speak
Misses a solo and mute button for each of the modes.
Explores the music box a bit in solo, might take longer to understand than the subject first anticipated.
Has a hard time ending the musical section, due to the different fundamental way of working with the music box as compared to the subject's “normal” workflow. 
Uses a theme as a jingle, tries to match it to a pre-recorded section from the musicbox.
Stuck with having a single instance of segment A, and now wish to create a segment B piece afterwards. The subject was not thinking of re-recording and doing it “live”.
Creates a soundscape using only the pad mode from Melin Mood. 
The subject thinks the names are irrelevant. 
The subject thinks it is hard to replicate objectives after the exploratory phase. 
The subject suggests a feature to export musical loops out of the musicbox.
Subject 4
Baseline -Brief 2
Not a Windows user
Starts by listening to the speaker
Uses multiple ambient recordings, layered.
Listens quite thoroughly to all the different music tracks and the SFXs in the source pack. 
Matches speak and ambience to the music. 
Duck the music for ambience. 
Normally uses self-recorded foley/ambience. 
Does not use background music, due to the inability to play music and dissatisfaction with royalty-free music libraries. 
Only uses music if they get it from a trusted source, i.e. a friend or colleague who has made it. 
Can identify the same type of woosh used in other productions, hinting at the overuse of some sounds in the industry 

Condition 1 - Brief1
Starts by just trying and exploring the music box
Comments on the inability to recreate a ‘deafult’-state for the application.
Tries to create a ‘romantic’-underlay
Listens with the speaker in the background, but stops this to focus more intensely on the exploration - might have underrated the ease-of-use of the musicbox.
Seems to be searching for something specific. 
Comments that it would be nice to have the music in a separate view. 
Uses the same theme in different playback speeds to create a (very) unique theme. 
A lot of starting a stopping the musicbox, I can’t really seem to understand why ..
Creates some wooshes with the musicbox, using the fader and pad mode. 
Has many music-bites of audio in the session - maybe a bit overwhelming, but the subject is not cleaning the session in any way.
Thinks this style of bedding and working with music is fun!
Thinks that five moods are too few.
Asks if it can work with existing music. 
Subject thinks that it is a bit much with the themes, but enjoys the drag-and-drop functionality. 
Subject could imagine the themes would be nice for a skiller/bumper.
Likes that the themes have no names, 
Would like to mark a theme, i.e. to have a list of usable themes when coming out of the exploratory phase.
The subject could, sort of, remember the moods and how they sounded. 
Subject thinks that the music might be a bit much for bedding a podcast - but also hits at versatility and states that a learning period of the application might assist in creating more tailored background music. 
Can recognise the two phases, convergent and divergent thinking. 
Need to get used to composing in this workflow.
Thinks it is quite hard to reenact a certain soundscape - i.e. from memory

Subject 5
Baseline - Brief 1
Starts listening to thespeakerk.
Listens thoroughly to almost all of the music tracks. 
Settles quite early on the “Heartbeat_full_2” music track, too early as the terrible lead synth comes in, the subject realises that this music track is not very good. 
The music track also ends sort of midway, with inconvenience the flow of the subject.
These two tthingskeeps dragging the subject out of high-level task flow and into low-level editing mode. 
Cope pastes the music track into a different section of the session (another place with dialogue between two actors), so in a way, working entirely visually - see brief for reference. 
Wants a longer fade for the music track, a wish which cannot be met. 
Shows me his normal workflow - which is to listen to the music and make the loop in real-time, feeling the rhythm, and then using the theHindenburgg shortcut ‘B’ to cut the music track at the exact point in time.
Notes that not all music can do this, perfect looping. 
Can’t identify these types of tracks in the exploratory phase, i.e. when searching in an epidemic sounds or in another music library. Has the speaker been running in the background, or is this process?

Condition 1 - Brief 2
No knowledge of dynamic music.
Starts exploring the moods with the speech running underneath, 
“Learns” the musicbox, tries all the knobs, etc., quite quickly.
Composes using the faders. 
Gets a feel for what the different compositions do
Plays the same mood + segment for quite some time, while the session is running, 
Needs a reminder that segment B exists. 
After the exploratory phase, listens to the output and makes edits in Hidenburg. 
Uses the themes to fit “holes” in the interview - working a bit visually again. 
Enjoys the “wash-out” effect.
Want to plan a narrative sequence of operations for the musicbox.
Deletes all the recorded audio to try again - composing style.
Makes more space for the music.
Starts the recording in medias res.
“Plays” with the rhythm fader.
Playing the MusicBox, like an instrument ..
Tries to recreate the whole thing again... 
Thoroughly composes a small piece, adjusting rhythm, volume, filter knobs and reverb live.
Thinks that the themes are too long.
Enjoys working with the musicbox - thinks it is fun. 
Thinks that he can get a lot of different music out of it.
Good for “finding a path to walk on”.
Wants a way to time the segment switching a bit better. Maybe also hinting at the same for the moods. 
Want to automate the music box.
Wants to make a plan, on paper or in the musicbox.
Suggests that the workflow is similar to having a set of guitar pedals that then have oan n/off.
Would love to work in a preset structure - with fade times between the presets. 

Subject 6
Baseline - Brief 2
Has made this tool - i.e. Hindenburg PRO 
Is NOT a Windows user
Listen to different passages in the musicPre-selectss the target music to use. 
Listens and utilises fade functionality.
Struggling with ending the selected musical section.
Only uses two musical tracks. 
Wants to attach music to a person or a sequence in the story.
Kiera has a good starter.
Listens specifically to the start and end of each track to ensure usability. 
Thinks that too many of the available tracks are “too much”.
Wants to be able to automate distance and/or top frequency.
Make the voice profiler opposite the music. 
Stretch/freeze effect would be grand for bedding.

Condition 1 - Brief 1
Listens to the speaker with the musicbox underneath.
Selects a single mood after approximately 7 minutes. 
Uses faders, especially rhythm and chords, along with the filters, to “play” with the musicbox.
Does not record the first iteration.
Chooses a mood based on prior knowledge of the moods. 
Feels trapped by the knowledge of recording. 
Feels that the convergent thought process needs a tweak. 
The exploration of the moods should be done faster.
Suggests different stages of a bedding track. How to categorise these?
`}
        </pre>
      </section>
    </main>
  );
}
