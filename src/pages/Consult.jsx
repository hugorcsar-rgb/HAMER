// =============================================================================
// CONSULT page
// =============================================================================
// Hero copy and "The work" copy are right at the top — easy to edit.
// Packages come from src/data/packages.js (consultPackages).
// =============================================================================

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { consultPackages, programs } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const HERO_NUMBER   = "02";
const HERO_TITLE    = "Consult.";
const HERO_SUBTITLE = "Year-round development, structured month by month. Tournament calendar, practice plan, equipment and academy decisions — assembled into one operating plan and adjusted against real results. Built for juniors who want the year ahead to compound, not to drift.";

const WORK_EYEBROW  = "The work";
const WORK_HEADING  = "DEVELOPMENT PROTOCOLS";
const WORK_BODY_1   = "We start with where the game is — handicap, recent results, recurring weaknesses, available hours, and the competitive bar the player is playing to reach.";
const WORK_BODY_2   = "From there we build the year: which tournaments matter, how practice is structured between them, what equipment and academy decisions need making, and where the weeks of pressure fall. Then we adjust monthly against what's actually happening on the course. Direct WhatsApp and email access to the team throughout. No tournament wasted, no practice unfocused.";

const PACKAGES_EYEBROW = "Packages";
const PACKAGES_HEADING = "Three tiers, three levels of involvement.";
const PACKAGES_CAPTION = "All tiers include direct WhatsApp and email access. Pay monthly, quarterly (≈10% off), or annually (≈20% off).";

// TODO: Replace with a real photo. Drop a file into /public and use e.g. "/consult-hero.jpg"
const CONSULT_HERO = 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=2400&q=80';

const billingOptions = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'quarterly', label: 'Quarterly (≈10% off)' },
  { key: 'annual', label: 'Annual (≈20% off)' },
];

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function Consult() {
  const p = programs.consult;
  const [billing, setBilling] = useState('monthly');

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={CONSULT_HERO} alt="" className="w-full h-full object-cover hero-image-desaturated" />
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
            <Link to="/join-now/consult" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">
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

      {/* PACKAGES with billing toggle */}
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

          {/* Billing toggle */}
          <div className="flex flex-wrap gap-2 mb-12">
            {billingOptions.map((o) => (
              <button
                key={o.key}
                onClick={() => setBilling(o.key)}
                className={`px-5 py-2.5 font-data text-[11px] font-bold tracking-[0.2em] uppercase border transition-colors ${
                  billing === o.key
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'bg-transparent text-foreground/70 border-foreground/30 hover:border-accent hover:text-accent'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {consultPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} programId="consult" billing={billing} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
