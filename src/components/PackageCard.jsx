// src/components/PackageCard.jsx
// Reusable card for a single package. Handles fixed-price and monthly-pricing tiers.

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PackageCard({ pkg, programId, delay = 0, billing = null }) {
  // Determine display price (fixed vs billing-based)
  let priceDisplay = '';
  if (pkg.price) {
    priceDisplay = pkg.price;
  } else if (pkg.prices) {
    const b = billing || 'monthly';
    const amount = pkg.prices[b];
    priceDisplay = `$${amount}`;
  }
  const periodDisplay = pkg.period || (pkg.prices ? `per ${billing || 'month'}` : '');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col h-full p-8 md:p-10 border border-foreground/15 hover:border-accent/60 transition-colors"
    >
      {/* Header */}
      <div>
        <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-2">{pkg.tier}</h3>
        <div className="flex items-baseline gap-2 mb-1">
          <p className="font-data text-2xl md:text-3xl text-accent tracking-wider">{priceDisplay}</p>
          <p className="font-data text-[12px] tracking-[0.15em] text-foreground/50 uppercase">{periodDisplay}</p>
        </div>
        {pkg.duration && (
          <p className="font-data text-[11px] tracking-[0.2em] text-foreground/50 uppercase mt-1">
            {pkg.duration}
          </p>
        )}
      </div>

      {/* Tagline */}
      {pkg.details?.tagline && (
        <p className="font-heading italic text-foreground/80 leading-snug mt-6 pb-6 border-b border-foreground/10">
          {pkg.details.tagline}
        </p>
      )}

      {/* Services */}
      <ul className="mt-6 space-y-3 flex-1">
        {pkg.services.map((s, i) => (
          <li key={i} className="font-body text-foreground/85 leading-snug">
            <p className="font-body font-medium">{s.name}</p>
            {s.desc && (
              <p className="font-body text-[14px] text-foreground/60 leading-relaxed mt-1">
                {s.desc}
              </p>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8 pt-6 border-t border-foreground/10 space-y-3">
        <Link
          to={`/join-now/${programId}/${pkg.id}`}
          className="block w-full text-center px-6 py-3.5 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300"
        >
          Full Details
        </Link>
      </div>
    </motion.div>
  );
}
