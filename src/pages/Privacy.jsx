// src/pages/Privacy.jsx
// HAMER Privacy Notice. Pulled from src/data/legalText.js.
import { Link } from 'react-router-dom';
import { privacyNotice } from '../data/legalText.js';

export default function Privacy() {
  return (
    <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-24 max-w-[1000px] mx-auto">
      <Link to="/" className="font-data text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-accent">
        ← Back to home
      </Link>

      <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mt-6 mb-4">
        Privacy Notice
      </p>
      <h1 className="font-heading text-foreground leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
        How we handle your data.
      </h1>
      <p className="font-data text-[12px] tracking-[0.15em] text-foreground/60 uppercase mt-6">
        Effective: {privacyNotice.effectiveDate}
      </p>

      <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px] mt-10" style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)' }}>
        {privacyNotice.intro}
      </p>

      <div className="mt-16 space-y-12">
        {privacyNotice.sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-5">{s.heading}</h2>
            {s.body && s.body.map((p, j) => (
              <p key={j} className="font-body text-foreground/85 leading-relaxed mb-4">{p}</p>
            ))}
            {s.bullets && (
              <ul className="font-body text-foreground/85 leading-relaxed space-y-2 ml-5 list-disc mt-2">
                {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>

      <p className="font-data text-[11px] tracking-[0.25em] text-foreground/50 uppercase mt-16 pt-8 border-t border-foreground/10">
        © {new Date().getFullYear()} HAMER Golf Consulting. All rights reserved.
      </p>
    </section>
  );
}
