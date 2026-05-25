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
  const hasButton = !!buyButtonId;

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

          {/* T&C acceptance */}
          <div className="p-8 border border-foreground/15">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Before you pay</p>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1.5 w-4 h-4 accent-accent"
              />
              <span className="font-body text-foreground/85 leading-relaxed">
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
          </div>
        </div>

        {/* Payment aside */}
        <aside className="lg:col-span-5">
          <div className="p-8 border border-foreground/15">
            <p className="font-data text-data tracking-[0.3em] text-foreground/40 uppercase mb-4">Payment</p>

            {!hasButton && (
              <div>
                <p className="font-body text-foreground/85 leading-relaxed">
                  Payment is not yet wired up for this package
                  {isSubscription && ` (${billing})`}.
                </p>
                <div className="mt-5 p-4 border border-accent/40 bg-accent/5 font-body text-[14px] text-foreground/80 leading-relaxed">
                  <p className="font-data text-[11px] tracking-[0.2em] text-accent uppercase mb-2">Setup (one-time)</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Create a Buy Button in Stripe Dashboard.</li>
                    <li>Paste <code className="text-accent">buy_btn_...</code> into <code className="text-accent">packages.js</code>.</li>
                  </ol>
                </div>
                <Link
                  to="/inquire"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-transparent text-foreground font-data text-[12px] font-bold tracking-[0.2em] uppercase border border-foreground/40 hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  Contact us to arrange payment
                </Link>
              </div>
            )}

            {hasButton && !accepted && (
              <div className="p-6 border border-foreground/15 bg-foreground/5 text-center font-body text-foreground/60">
                Accept the terms above to see the payment button.
              </div>
            )}

            {hasButton && accepted && (
              <div>
                <p className="font-body text-foreground/85 leading-relaxed mb-6">
                  Secure payment processed by Stripe. HAMER never sees or stores
                  your card details.
                </p>
                <StripeBuyButton buyButtonId={buyButtonId} />
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
