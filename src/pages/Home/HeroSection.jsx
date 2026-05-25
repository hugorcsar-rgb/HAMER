// =============================================================================
// HOME — Hero section
// =============================================================================
// To change the text, edit the strings below between the quotes. Keep the
// quotes. The layout (JSX) is below the text constants — only touch it if
// you know React.
// =============================================================================

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const EYEBROW  = "[Type the small uppercase line that sits above HAMER]"
const WORDMARK = "HAMER"
const SUBTITLE = "[Type your hero paragraph — the one or two sentences that explain what HAMER is, shown below the big wordmark]"

const PRIMARY_CTA   = { label: "Join Now",   href: "/join-now" }
const SECONDARY_CTA = { label: "Inquire →",  href: "/inquire"  }

// TODO: replace with your own image. Drop a file into /public and use e.g. "/hero.jpg"
const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1633597756581-22089ec41bb4?auto=format&fit=crop&w=2400&q=80"

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={BACKGROUND_IMAGE}
          alt=""
          className="w-full h-full object-cover hero-image-desaturated mahogany-transition"
        />
        <div className="absolute inset-0 armani-glow mix-blend-multiply" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 flex flex-col gap-10 max-w-[1000px] mt-20"
      >
        <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase">
          {EYEBROW}
        </p>

        <h1
          className="font-heading font-light tracking-[0.04em] leading-none"
          style={{ fontSize: 'clamp(5rem, 14vw, 14rem)' }}
        >
          {WORDMARK}
        </h1>

        <p
          className="font-heading text-foreground/85 leading-[1.55] max-w-[760px]"
          style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}
        >
          {SUBTITLE}
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            to={PRIMARY_CTA.href}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300"
          >
            {PRIMARY_CTA.label}
          </Link>
          <Link
            to={SECONDARY_CTA.href}
            className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300"
          >
            {SECONDARY_CTA.label}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
