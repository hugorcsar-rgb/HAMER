// src/pages/ProgramPackages.jsx
// Step 2 of 3 — choose package within a program (matches /:program URL)
import { Link, useParams, Navigate } from 'react-router-dom';
import { programs } from '../data/packages.js';
import PackageCard from '../components/PackageCard.jsx';

export default function ProgramPackages() {
  const { program } = useParams();
  const p = programs[program];
  if (!p) return <Navigate to="/join-now" replace />;

  return (
    <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-24">
      <Link to="/join-now" className="font-data text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-accent">
        ← Back to programs
      </Link>
      <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mt-6 mb-4">
        Join Now · Step 2 of 3 · {p.name}
      </p>
      <h1 className="font-heading text-foreground leading-none max-w-4xl" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
        {p.name} — <span className="italic text-accent">choose your package</span>.
      </h1>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 max-w-[1400px]">
        {p.packages.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} programId={p.id} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
