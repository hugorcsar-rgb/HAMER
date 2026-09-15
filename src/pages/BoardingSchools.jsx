// =============================================================================
// BOARDING SCHOOLS page
// =============================================================================
// Structural clone of src/pages/Camps.jsx. Same layout, same components,
// copy and pricing adjusted for boarding-school golf programs (+50% vs Camps).
// Packages come from src/data/packages.js (boardingSchoolsPackages).
// =============================================================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { boardingSchoolsPackages, programs } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';

// ─── TEXT — edit these freely ──────────────────────────────────────────────
const HERO_NUMBER   = "04";
const HERO_TITLE    = "Boarding Schools.";
const HERO_SUBTITLE = "Golf programs built to the standard boarding schools expect — recruiting-ready structure, faculty-proof curriculum, and a partner who stays engaged term after term, not just for a single build.";

const WORK_EYEBROW  = "The work";
const WORK_HEADING  = "PROGRAM ARCHITECTURE";
const WORK_BODY_1   = "Three modes of engagement, one operating standard. Audit: a structured diagnostic of an existing program — curriculum, coaching staff, facilities, and college-placement pipeline — delivered as a written report with concrete recommendations.";
const WORK_BODY_2   = "Build: design and rollout of a new program from blank page, including curriculum architecture, coaching-staff hiring framework, and operating documentation aligned with the school's academic calendar. Retainer: ongoing engagement as part of the athletic department — termly reviews, season planning, and on-call advisory through the academic year. Built for boarding schools that want HAMER inside the program, not just adjacent to it.";

const PACKAGES_EYEBROW = "Packages";
const PACKAGES_HEADING = "Audit. Build. Retain.";

const BOARDING_SCHOOLS_HERO = '/images/hero-boarding-schools-v1.jpg';

// ─── LAYOUT — only edit if you know React ──────────────────────────────────
export default function BoardingSchools() {
  const p = programs['boarding-schools'];
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={BOARDING_SCHOOLS_HERO} alt="" className="w-full h-full object-cover hero-image-desaturated" />
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
            <Link to="/join-now/boarding-schools" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">
              See packages
            </Link>
            <Link to="/inquire" className="inline-flex items-center px-8 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300">
              Inquire →
            </Link>
          </div>
        </motion.div>
      </section>

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

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-foreground/10 pb-8 mb-12 md:mb-16">
            <div>
              <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">{PACKAGES_EYEBROW}</p>
              <h2 className="font-heading text-section leading-tight">{PACKAGES_HEADING}</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {boardingSchoolsPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} programId="boarding-schools" delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
