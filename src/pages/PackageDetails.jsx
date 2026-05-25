// src/pages/PackageDetails.jsx
// Step 3 of 3 — full detail view for one package, with sticky purchase aside.
import { Link, useParams, Navigate } from 'react-router-dom';
import { getPackage, programs } from '../data/packages.js';

export default function PackageDetails() {
  const { program, packageId } = useParams();
  const pkg = getPackage(program, packageId);
  const p = programs[program];
  if (!pkg || !p) return <Navigate to="/join-now" replace />;

  const priceDisplay =
    pkg.price || (pkg.prices ? `from $${pkg.prices.monthly}/mo` : '[Price TBD]');

  return (
    <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-24">
      <Link to={`/join-now/${program}`} className="font-data text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-accent">
        ← Back to {p.name} packages
      </Link>

      <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mt-6 mb-4">
        Join Now · Step 3 of 3 · Full Details
      </p>
      <h1 className="font-heading text-foreground leading-none max-w-4xl" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
        {p.name} · <span className="italic text-accent">{pkg.tier}</span>
      </h1>

      {pkg.details?.tagline && (
        <p className="font-heading italic text-foreground/85 leading-[1.55] max-w-[760px] mt-8" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.5rem)' }}>
          {pkg.details.tagline}
        </p>
      )}

      <div className="grid lg:grid-cols-12 gap-10 mt-16 max-w-[1400px]">
        {/* LEFT: Timeline & Scope, Includes, Terms */}
        <div className="lg:col-span-8 space-y-14">
          {/* Timeline & Scope */}
          <div>
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">
              Timeline and scope
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-data text-[11px] tracking-[0.25em] text-accent uppercase mb-2">Duration</p>
                <p className="font-heading text-2xl">{pkg.duration || pkg.period || '—'}</p>
              </div>
              <div>
                <p className="font-data text-[11px] tracking-[0.25em] text-accent uppercase mb-2">Program</p>
                <p className="font-heading text-2xl">{p.name}</p>
              </div>
            </div>
            {pkg.details?.description && (
              <p className="font-body text-body text-foreground/80 leading-relaxed mt-6 max-w-3xl">
                {pkg.details.description}
              </p>
            )}
          </div>

          {/* Includes */}
          <div>
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">
              What's included
            </p>
            <ul className="space-y-5">
              {pkg.services.map((s, i) => (
                <li key={i} className="border-l border-accent/40 pl-6">
                  <p className="font-heading text-xl mb-1">{s.name}</p>
                  {s.desc && <p className="font-body text-foreground/70 leading-relaxed">{s.desc}</p>}
                </li>
              ))}
            </ul>
          </div>

          {/* T&Cs link */}
          <div>
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">
              Terms and Conditions
            </p>
            <p className="font-body text-foreground/80 leading-relaxed max-w-3xl">
              By purchasing this package, you agree to the {p.name} Terms and
              Conditions — which govern scope, fees, refunds, and limitation of
              liability for this program.
            </p>
            <Link
              to={p.termsRoute}
              className="inline-block mt-4 font-data text-[12px] font-bold tracking-[0.2em] uppercase text-accent hover:text-foreground"
            >
              Read the {p.name} Terms & Conditions →
            </Link>
          </div>
        </div>

        {/* RIGHT: Sticky purchase aside */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-32 p-8 border border-foreground/15">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Price</p>
            <p className="font-heading text-5xl text-accent">{priceDisplay}</p>
            {pkg.period && (
              <p className="font-data text-[12px] tracking-[0.2em] text-foreground/50 uppercase mt-2">{pkg.period}</p>
            )}

            <div className="mt-8 pt-6 border-t border-foreground/10 font-body text-[14px] text-foreground/75 leading-relaxed space-y-2">
              <p>· One standard of care across every package.</p>
              <p>· Secure payment processed by Stripe.</p>
              <p>· Refund per the {p.name} Terms.</p>
            </div>

            <Link
              to={`/checkout/${program}/${pkg.id}`}
              className="block w-full text-center mt-8 px-6 py-4 bg-accent text-accent-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-accent hover:bg-transparent hover:text-accent transition-colors duration-300"
            >
              Pay Now
            </Link>
            <Link
              to="/inquire"
              className="block w-full text-center mt-3 px-6 py-4 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Talk to us first
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
