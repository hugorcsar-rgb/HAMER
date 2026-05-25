// src/pages/Camps.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { campsPackages, programs } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';

const CAMPS_HERO = 'https://images.unsplash.com/photo-1535132011086-b8818f016104?auto=format&fit=crop&w=2400&q=80';

export default function Camps() {
  const p = programs.camps;
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col justify-center px-[24px] md:px-[89px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={CAMPS_HERO} alt="" className="w-full h-full object-cover hero-image-desaturated" />
          <div className="absolute inset-0 armani-glow mix-blend-multiply" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 max-w-[1000px] mt-20"
        >
          <p className="font-data text-data tracking-[0.3em] text-foreground/60 uppercase mb-6">
            03 · {p.label}
          </p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
            Camps.
          </h1>
          <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px]" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>
            {p.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/join-now/camps" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300">
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
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">The work</p>
            <h2 className="font-heading text-section leading-tight">PROGRAM ARCHITECTURE</h2>
          </div>
          <div className="md:col-span-7 font-body text-body text-foreground/85 leading-relaxed space-y-5">
            <p>{p.description}</p>
            <p>
              From diagnostic to deployment to ongoing operation. We audit
              existing programs, design new ones, and stay engaged season after
              season. Built for clubs, academies, and camps that want HAMER as
              part of the team.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-foreground/10 pb-8 mb-12 md:mb-16">
            <div>
              <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Packages</p>
              <h2 className="font-heading text-section leading-tight">Audit. Build. Retain.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {campsPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} programId="camps" delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
