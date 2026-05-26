// =============================================================================
// HOME — Trusted programs section
// =============================================================================
// To change the heading or caption, edit the strings below.
// To add or remove programs, edit the PROGRAMS array.
// =============================================================================

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const HEADING = "TRUSTED PROGRAMS"
const CAPTION = "Camps, academies and national teams across Spain, Mexico, the United States and Serbia."

// ─── PROGRAMS — add, remove, or rename freely ──────────────────────────────
// Each item becomes one line in the list. Keep the quotes and the commas.
const PROGRAMS = [
  "Hacienda San Gaspar Golf",
  "Tres Vidas Golf Club",
  "AGVM Mexico National Team",
  "Camp Belgrade",
  "Camp Concord",
  "Utah County Golf Academies",
  "La Pradera Golf",
]

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function TrustedSection() {
  return (
    <section className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center gap-16">
        <h2 className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase">
          {HEADING}
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {PROGRAMS.map((name, i) => (
            <p
              key={i}
              className="font-heading text-xl md:text-2xl text-foreground/80"
            >
              {name}
            </p>
          ))}
        </div>

        <p className="font-body text-body text-foreground/60 max-w-2xl">
          {CAPTION}
        </p>
      </div>
    </section>
  )
}
