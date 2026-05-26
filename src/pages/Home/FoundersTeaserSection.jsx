// =============================================================================
// HOME — Standard section (introduces the 3 programs)
// =============================================================================
// To change the text, edit the strings below between the quotes.
// To change the tiles (label, link, or order), edit the TILES array.
// =============================================================================

import { Link } from 'react-router-dom'

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const NUMBER     = "01"
const HEADING    = "THREE PROGRAMS"
const SUBHEADING = "Recruit. Consult. Camps."
const BODY       = "Junior golfers and the camps that develop them face the same three problems at different stages. We address each as a discrete practice — Recruit for collegiate placement, Consult for year-round development, Camps for program architecture. Most families hire one. Sometimes the path forward requires two."

// ─── TILES — the 3 program links on the right side ─────────────────────────
const TILES = [
  { eyebrow: "01 — Placement",    label: "Recruit →", href: "/recruit" },
  { eyebrow: "02 — Development",  label: "Consult →", href: "/consult" },
  { eyebrow: "03 — Architecture", label: "Camps →",   href: "/camps"   },
]

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function StandardSection() {
  return (
    <section className="w-full premium-spacing">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">
            {NUMBER}
          </p>
          <h2 className="font-heading text-section text-foreground leading-tight">
            {HEADING}
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <p className="font-heading text-sub text-foreground/90 leading-[1.4] mb-8">
              {SUBHEADING}
            </p>
            <p className="font-body text-body text-foreground/80 leading-relaxed">
              {BODY}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            {TILES.map((t) => (
              <Link
                key={t.href}
                to={t.href}
                className="block p-6 border border-foreground/15 hover:border-accent transition-colors"
              >
                <p className="font-data text-[10px] tracking-[0.25em] text-foreground/40 uppercase mb-2">
                  {t.eyebrow}
                </p>
                <p className="font-heading text-2xl">
                  {t.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
