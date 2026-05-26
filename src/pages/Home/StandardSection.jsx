// =============================================================================
// HOME — Founders teaser section
// =============================================================================
// To change the text, edit the strings below between the quotes.
// =============================================================================

import { Link } from 'react-router-dom'

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const NUMBER     = "02"
const HEADING    = "THE FOUNDERS"
const PULL_QUOTE = "Three Division I golfers. Three operators. One firm."
const BODY       = "Javier, Hugo and Diego played NCAA Division I golf. After college they moved into consulting, operations and sports industry roles — and saw the same gap from every angle: ambitious junior golfers navigating recruiting and development with templates from the internet, and camps building programs without a real framework. HAMER is the firm they wish their families had hired when they were sixteen."

const CTA = { label: "Meet the founders", href: "/founders" }

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function FoundersTeaserSection() {
  return (
    <section className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div>
          <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">
            {NUMBER}
          </p>
          <h2 className="font-heading text-section text-foreground leading-tight">
            {HEADING}
          </h2>
        </div>

        <p className="font-heading text-sub text-foreground/90 leading-[1.4] max-w-3xl">
          {PULL_QUOTE}
        </p>

        <p className="font-body text-body text-foreground/80 leading-relaxed max-w-3xl">
          {BODY}
        </p>

        <div>
          <Link
            to={CTA.href}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300"
          >
            {CTA.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
