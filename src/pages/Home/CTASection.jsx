// =============================================================================
// HOME — Closing CTA section
// =============================================================================
// The final call-to-action at the bottom of the home page.
// =============================================================================

import { Link } from 'react-router-dom'

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const EYEBROW = "FIRST CONVERSATION"
const HEADING = "Tell us where you are."
const BODY    = "Send a short note about your level, your goals and your timeline. We'll respond within 48 hours with whether HAMER is the right fit and how we'd start. No forms with twenty fields."

const PRIMARY_CTA   = { label: "Inquire →", href: "/inquire"  }
const SECONDARY_CTA = { label: "Join Now",  href: "/join-now" }

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function CTASection() {
  return (
    <section className="w-full premium-spacing border-t border-foreground/10">
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">
          {EYEBROW}
        </p>

        <h2 className="font-heading text-section leading-tight mb-8">
          {HEADING}
        </h2>

        <p className="font-body text-body text-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          {BODY}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to={PRIMARY_CTA.href}
            className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {PRIMARY_CTA.label}
          </Link>
          <Link
            to={SECONDARY_CTA.href}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300"
          >
            {SECONDARY_CTA.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
