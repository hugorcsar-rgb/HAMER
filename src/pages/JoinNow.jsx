// src/pages/JoinNow.jsx
// Step 1 of 3 — choose program (Recruit / Consult / Camps)
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programs } from '../data/packages.js';

export default function JoinNow() {
  return (
    <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-24">
      <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">
        Join Now · Step 1 of 3
      </p>
      <h1 className="font-heading text-foreground leading-none max-w-4xl" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
        Three programs.<br />
        <span className="italic text-accent">Choose your starting point.</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-[1400px]">
        {Object.values(programs).map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <Link
              to={`/join-now/${p.id}`}
              className="flex flex-col h-full p-8 md:p-10 border border-foreground/15 hover:border-accent transition-colors group"
            >
              <p className="font-data text-[11px] tracking-[0.25em] text-accent uppercase mb-4">
                0{i + 1}
              </p>
              <h2 className="font-heading text-4xl md:text-5xl mb-4">{p.name}</h2>
              <p className="font-heading italic text-foreground/85 leading-snug mb-6">
                {p.tagline}
              </p>
              <p className="font-body text-foreground/70 leading-relaxed flex-1">
                {p.description}
              </p>
              <p className="font-data text-[12px] tracking-[0.2em] uppercase text-accent mt-8 group-hover:text-foreground transition-colors">
                See packages →
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
