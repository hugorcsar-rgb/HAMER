// =============================================================================
// RECRUIT page
// =============================================================================
// Hero copy and "The work" copy are right at the top — easy to edit.
// Packages come from src/data/packages.js (recruitPackages).
// =============================================================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { recruitPackages, programs } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const HERO_NUMBER   = "01";
const HERO_TITLE    = "Recruit.";
const HERO_SUBTITLE = "NCAA placement, structured around the player. We map handicap, academics, geography and goals against the right division, the right roster, the right fit — then go to work with coaches directly. No templates, no mass mailers, no guessing.";

const WORK_EYEBROW  = "The work";
const WORK_HEADING  = "PLACEMENT ARCHITECTURE";
const WORK_BODY_1   = "Every placement is a discrete project with three phases. The diagnostic comes first: where the player actually sits on handicap, ranking, academics, geography and goals — measured honestly against where they want to play.";
const WORK_BODY_2   = "Then the outreach: a profile, a highlight video and a personalized coach campaign engineered to get replies. Then the close: visit preparation, follow-up cadence and offer-stage guidance until the commitment is signed. We were international students navigating this from inside — Recruit is the program we wished our families had hired.";

const PACKAGES_EYEBROW  = "Packages";
const PACKAGES_HEADING  = "Three tiers, three levels of involvement.";
const PACKAGES_CAPTION  = "Each tier is a complete program — not a feature list. Choose how involved you want the HAMER team to be.";

// TODO: Replace with a real photo. Drop a file into /public and use e.g. "/recruit-hero.jpg"
const RECRUIT_HERO = 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=2400&q=80';

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function Recruit() {
  const p = programs.recruit;
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={RECRUIT_HERO} alt="" className="w-full h-full object-cover hero-image-desaturated" />
          <div className="absolute inset-0 armani-glow mix-blend-multiply" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 max-w-[1000px] mt-20"
        >
          <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase mb-6">
            {HERO_NUMBER} · {p.label}
          </p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
            {HERO_TITLE}
          </h1>
          <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px]" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>
            {HERO_SUBTITLE}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/join-now/recruit" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">
              See packages
            </Link>
            <Link to="/inquire" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">
              Inquire →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* THE WORK */}
      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">{WORK_EYEBROW}</p>
            <h2 className="font-heading text-section leading-tight">{WORK_HEADING}</h2>
          </div>
          <div className="md:col-span-7 font-body text-body text-foreground/85 leading-relaxed space-y-5">
            <p>{WORK_BODY_1}</p>
            <p>{WORK_BODY_2}</p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-foreground/10 pb-8 mb-12 md:mb-16">
            <div>
              <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">{PACKAGES_EYEBROW}</p>
              <h2 className="font-heading text-section leading-tight">{PACKAGES_HEADING}</h2>
            </div>
            <p className="font-body text-foreground/70 max-w-md">
              {PACKAGES_CAPTION}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {recruitPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} programId="recruit" delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
