// src/pages/Checkout.jsx
// Renders Stripe Buy Button after user accepts T&Cs.
// For subscription packages (Consult), user picks billing first.
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getPackage, programs, STRIPE_PUBLISHABLE_KEY } from '../data/packages.js';

// Custom element wrapper so React doesn't complain about kebab-case attributes
function StripeBuyButton({ buyButtonId }) {
  return (
    <div className="flex justify-center my-2">
      {/* eslint-disable-next-line react/no-unknown-property */}
      <stripe-buy-button
        buy-button-id={buyButtonId}
        publishable-key={STRIPE_PUBLISHABLE_KEY}
      ></stripe-buy-button>
    </div>
  );
}

const billingOptions = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'quarterly', label: 'Quarterly' },
  { key: 'annual', label: 'Annual' },
];

export default function Checkout() {
  const { program, packageId } = useParams();
  const pkg = getPackage(program, packageId);
  const p = programs[program];
  const [accepted, setAccepted] = useState(false);
  const [billing, setBilling] = useState('monthly');

  if (!pkg || !p) return <Navigate to="/join-now" replace />;

  // Determine which buy button ID to use
  const isSubscription = !!pkg.stripeBuyButtonIds;
  const buyButtonId = isSubscription
    ? pkg.stripeBuyButtonIds[billing]
    : pkg.stripeBuyButtonId;

  // Determine total price display
  let totalDisplay;
  if (pkg.price) {
    totalDisplay = pkg.price;
  } else if (pkg.prices) {
    totalDisplay = `$${pkg.prices[billing]} (${billing})`;
  } else {
    totalDisplay = '—';
  }

  return (
    <section className="px-[24px] md:px-[89px] pt-32 md:pt-40 pb-24 max-w-[1200px] mx-auto">
      <Link to={`/join-now/${program}/${packageId}`} className="font-data text-[11px] tracking-[0.2em] uppercase text-foreground/60 hover:text-accent">
        ← Back to package details
      </Link>

      <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mt-6 mb-4">
        Checkout · {p.name}
      </p>
      <h1 className="font-heading text-foreground leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
        {p.name} · <span className="italic text-accent">{pkg.tier}</span>
      </h1>

      <div className="grid lg:grid-cols-12 gap-10 mt-16">
        {/* LEFT — Billing selector + Summary */}
        <div className="lg:col-span-7 space-y-6">
          {/* Billing selector (subscription only) */}
          {isSubscription && (
            <div className="p-8 border border-foreground/15">
              <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Billing</p>
              <div className="flex flex-wrap gap-2">
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
            </div>
          )}

          {/* Order summary */}
          <div className="p-8 border border-foreground/15">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Summary</p>
            <ul className="font-body text-foreground/90 space-y-2">
              <li className="flex justify-between"><span>Program</span><span>{p.name}</span></li>
              <li className="flex justify-between"><span>Package</span><span>{pkg.tier}</span></li>
              {pkg.duration && <li className="flex justify-between"><span>Duration</span><span>{pkg.duration}</span></li>}
              <li className="flex justify-between pt-3 border-t border-foreground/10">
                <span className="font-medium">Total</span>
                <span className="text-accent font-medium">{totalDisplay}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT — Payment aside with T&C + button together */}
        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 p-8 border border-foreground/15">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-6">Payment</p>

            {/* T&C acceptance — RIGHT next to the button so it can't be missed */}
            <label className="flex items-start gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1.5 w-4 h-4 accent-accent flex-shrink-0"
              />
              <span className="font-body text-[14px] text-foreground/85 leading-relaxed">
                I have read and agree to the{' '}
                <Link to={p.termsRoute} className="text-accent hover:text-foreground underline-offset-4 hover:underline">
                  {p.name} Terms and Conditions
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-accent hover:text-foreground underline-offset-4 hover:underline">
                  Privacy Notice
                </Link>.
                Where the beneficiary is a minor, I confirm I am the parent or
                legal guardian and am contracting on the minor's behalf.
              </span>
            </label>

            {accepted ? (
              <div>
                <p className="font-body text-[14px] text-foreground/75 leading-relaxed mb-5">
                  Secure payment processed by Stripe. HAMER never sees or stores your card details.
                </p>
                <StripeBuyButton buyButtonId={buyButtonId} />
              </div>
            ) : (
              <div className="p-5 border border-foreground/20 bg-foreground/5 text-center font-body text-[14px] text-foreground/65 leading-relaxed">
                Tick the box above to enable the payment button.
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
