// src/pages/Recruit.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { recruitPackages, programs } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';

// TODO: Replace with a 16–17 year old recruit photo or college golfer scene
const RECRUIT_HERO = 'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=2400&q=80';

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
            01 · {p.label}
          </p>
          <h1 className="font-heading text-foreground leading-none mb-8" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}>
            Recruit.
          </h1>
          <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px]" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>
            We were international students. We lived the world of junior golf
            and elite amateur tournaments before any of it was a service we
            could offer. That's the foundation of Recruit — a program designed
            by people who needed it first.
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
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">The work</p>
            <h2 className="font-heading text-section leading-tight">PLACEMENT ARCHITECTURE</h2>
          </div>
          <div className="md:col-span-7 font-body text-body text-foreground/85 leading-relaxed space-y-5">
            <p>{p.description}</p>
            <p>
              We start with where you are — handicap, ranking, academics,
              geography, and goals — and shortlist programs that fit on every
              axis. Profile, highlight video, and personalized outreach — every
              touchpoint built to make coaches respond. Visit prep, follow-up
              cadence, and offer-stage guidance. We're with you until the
              commitment is signed.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="w-full premium-spacing border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-foreground/10 pb-8 mb-12 md:mb-16">
            <div>
              <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Packages</p>
              <h2 className="font-heading text-section leading-tight">Three tiers, three levels of involvement.</h2>
            </div>
            <p className="font-body text-foreground/70 max-w-md">
              Every tier is a complete program — not a feature list. Choose the
              level of involvement you want from our team.
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
