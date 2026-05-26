// src/pages/terms/TermsRecruit.jsx
// Terms & Conditions page for HAMER Recruit (Starter, Pro, Elite).
import { Link } from 'react-router-dom';
import {
  recruitPackagesLegal,
  CLAUSE_PARTIES_INDIVIDUAL,
  CLAUSE_PRIVACY,
  CLAUSE_CONFIDENTIALITY,
  CLAUSE_IP,
  CLAUSE_NCAA,
  CLAUSE_LIABILITY,
  CLAUSE_FORCE_MAJEURE,
  CLAUSE_MODIFICATIONS,
  CLAUSE_SEVERABILITY,
  CLAUSE_DISPUTE_RESOLUTION,
  CLAUSE_CONTACT,
  LEGAL_EFFECTIVE_DATE,
} from '../../data/legalText.js';

function Clause({ heading, body, bullets, tiers, note }) {
  return (
    <div className="mb-10">
      <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-5">{heading}</h3>
      {body && body.map((p, i) => (
        <p key={i} className="font-body text-foreground/85 leading-relaxed mb-4">{p}</p>
      ))}
      {bullets && (
        <ul className="font-body text-foreground/85 leading-relaxed space-y-2 ml-5 list-disc mt-2">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      {tiers && (
        <div className="space-y-4 mt-3">
          {tiers.map((t, i) => (
            <div key={i} className="border-l border-accent/40 pl-5">
              <p className="font-data text-[11px] tracking-[0.25em] text-accent uppercase mb-1">{t.label}</p>
              <p className="font-body text-foreground/85 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      )}
      {note && (
        <p className="font-body text-foreground/65 italic leading-relaxed mt-5 text-[14px]">{note}</p>
      )}
    </div>
  );
}

function PackageBlock({ pkg }) {
  return (
    <article id={pkg.id} className="mb-24 pb-20 border-b border-foreground/10 last:border-b-0">
      <div className="mb-10">
        <p className="font-data text-[11px] tracking-[0.3em] text-foreground/40 uppercase mb-3">Package</p>
        <h2 className="font-heading text-foreground leading-tight mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          {pkg.name}
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 font-data text-[12px] tracking-[0.15em] text-foreground/60 uppercase">
          <span>{pkg.price}</span>
          <span>·</span>
          <span>{pkg.billingNote}</span>
          <span>·</span>
          <span>Effective: {LEGAL_EFFECTIVE_DATE}</span>
        </div>
      </div>

      <Clause {...pkg.serviceDescription} />
      <Clause {...pkg.deliveryTimeline} />
      <Clause {...pkg.clientResponsibilities} />
      <Clause {...pkg.refundPolicy} />
    </article>
  );
}

export default function TermsRecruit() {
  return (
    <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-24 max-w-[1100px] mx-auto">
      {/* Header */}
      <Link to="/recruit" className="font-data text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-accent">
        ← Back to Recruit
      </Link>

      <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mt-6 mb-4">
        HAMER Recruit
      </p>
      <h1 className="font-heading text-foreground leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
        Terms & Conditions
      </h1>
      <p className="font-heading text-foreground/85 leading-[1.55] max-w-[760px] mt-8" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.35rem)' }}>
        These Terms and Conditions govern your purchase and use of HAMER Recruit packages (Starter, Pro, and Elite). They are entered into between you (the Parent or Legal Guardian, contracting on behalf of the minor golf athlete) and HAMER Golf Consulting.
      </p>

      {/* Anchor nav */}
      <nav className="mt-12 mb-16 flex flex-wrap gap-3">
        {recruitPackagesLegal.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="px-5 py-2.5 font-data text-[11px] font-bold tracking-[0.2em] uppercase border border-foreground/30 text-foreground/80 hover:border-accent hover:text-accent transition-colors"
          >
            {p.name.replace('HAMER Recruit — ', '')}
          </a>
        ))}
        <a
          href="#common-terms"
          className="px-5 py-2.5 font-data text-[11px] font-bold tracking-[0.2em] uppercase border border-foreground/30 text-foreground/80 hover:border-accent hover:text-accent transition-colors"
        >
          Common Terms
        </a>
      </nav>

      {/* Package-specific sections */}
      {recruitPackagesLegal.map((pkg) => <PackageBlock key={pkg.id} pkg={pkg} />)}

      {/* Common clauses — apply to all 3 packages */}
      <div id="common-terms" className="pt-12 mt-12 border-t border-foreground/15">
        <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">
          Common Terms
        </p>
        <h2 className="font-heading text-foreground leading-tight mb-12" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          Applicable to all HAMER Recruit packages
        </h2>

        <Clause {...CLAUSE_PARTIES_INDIVIDUAL} />
        <Clause {...CLAUSE_PRIVACY} />
        <Clause {...CLAUSE_CONFIDENTIALITY} />
        <Clause {...CLAUSE_IP} />
        <Clause {...CLAUSE_NCAA} />
        <Clause {...CLAUSE_LIABILITY} />
        <Clause {...CLAUSE_FORCE_MAJEURE} />
        <Clause {...CLAUSE_MODIFICATIONS} />
        <Clause {...CLAUSE_SEVERABILITY} />
        <Clause {...CLAUSE_DISPUTE_RESOLUTION} />
        <Clause {...CLAUSE_CONTACT} />
      </div>

      <p className="font-data text-[11px] tracking-[0.25em] text-foreground/50 uppercase mt-16 pt-8 border-t border-foreground/10">
        © {new Date().getFullYear()} HAMER Golf Consulting. All rights reserved.
      </p>
    </section>
  );
}
