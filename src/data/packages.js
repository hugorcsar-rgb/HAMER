// src/data/packages.js
// Programs, packages, and Stripe Buy Button wiring.
// To connect a package to Stripe:
//   1. Create a Buy Button in Stripe Dashboard → Payment Links → Buy Buttons
//   2. Copy the buy-button-id (starts with `buy_btn_...`)
//   3. Paste it into the matching package's `stripeBuyButtonId` (one-time)
//      or `stripeBuyButtonIds.{monthly|quarterly|annual}` (subscription)

export const STRIPE_PUBLISHABLE_KEY =
  'pk_live_51TXOZACrKKNvP7Gpw9Reb6wjFVKjDWJRfKIvyKaky5bhyWY4B31oyikCnByLkChuzs3YVkqfbPmcUt1fJgeJXDd4008Mq3t2Wx';

// ─── RECRUIT ────────────────────────────────────────────────────────────────
export const recruitPackages = [
  {
    id: 'starter',
    tier: 'Starter',
    price: '$1,000',
    priceAmount: 1000,
    period: 'one-time',
    duration: '3 months of support',
    stripeBuyButtonId: 'buy_btn_1TaxGGCrKKNvP7GpLH5R7BBs', // ✅ wired
    services: [
      { name: 'Athlete Profile Creation', desc: 'Your golf résumé — credentials, academics, stats, history, and personal story, in the format coaches expect.' },
      { name: 'Coach Email Templates', desc: 'Outreach templates you can adapt, structured to start real conversations.' },
      { name: 'Curated Coach Contact List', desc: 'A targeted list of programs that match your skill, academics, and goals — not a generic mass list.' },
      { name: 'NCAA Eligibility Guidance', desc: 'Exactly what the NCAA requires academically and on amateurism, with what to watch out for.' },
    ],
    details: {
      tagline: 'Foundational recruiting infrastructure.',
      description: 'Starter gives you the foundation: a properly built athlete profile, templates that work, a real contact list, and clear eligibility guidance. You run the outreach. Three months of support, one-time fee, no subscription.',
    },
  },
  {
    id: 'pro',
    tier: 'Pro',
    price: '$2,000',
    priceAmount: 2000,
    period: 'one-time',
    duration: '6 months of support',
    stripeBuyButtonId: 'buy_btn_1Tb19KCrKKNvP7GpY3F0REvf', // ✅ wired
    services: [
      { name: 'Everything in Starter' },
      { name: 'We write & send coach outreach', desc: 'We compose and send personalized messages on your behalf — every email tailored to the specific coach.' },
      { name: 'Highlight Video Guidance', desc: 'What to film, how to structure it, what to include and leave out. Even shot on a phone, it looks professional.' },
      { name: 'Follow-Up Strategy', desc: 'A timeline and message sequence so you stay top of mind with coaches without being intrusive.' },
    ],
    details: {
      tagline: 'We write and send the outreach. You focus on the scorecard.',
      description: 'Pro is where most families land. We run the outreach, you run the practice. Six months of active campaign management. One-time fee.',
    },
  },
  {
    id: 'elite',
    tier: 'Elite',
    price: '$3,000',
    priceAmount: 3000,
    period: 'one-time',
    duration: '12 months of support',
    stripeBuyButtonId: 'buy_btn_1Tb0huCrKKNvP7GpkbIzhP0q', // ✅ wired
    services: [
      { name: 'Everything in Pro' },
      { name: 'Full concierge outreach', desc: 'We run the entire recruiting campaign end-to-end. You focus on the scorecard.' },
      { name: 'Unlimited coach contacts', desc: 'No cap on the target list. We keep expanding and adjusting until placement.' },
      { name: 'Visit Preparation Coaching', desc: 'What to say, what to ask, how to present yourself, what to look for — so every campus visit counts.' },
    ],
    details: {
      tagline: 'Full concierge. We run the recruiting campaign from first email to signed offer.',
      description: 'Elite is the complete service: unlimited coach contacts, full concierge outreach, visit prep coaching, and twelve months of dedicated support.',
    },
  },
];

// ─── CONSULT (subscription — needs 3 button IDs per tier) ──────────────────
export const consultPackages = [
  {
    id: 'par',
    tier: 'PAR',
    prices: { monthly: 99, quarterly: 269, annual: 948 },
    stripeBuyButtonIds: {
      monthly:   'buy_btn_1Tb1BdCrKKNvP7GpMg9JlbKo', // ✅ wired — PAR monthly $99
      quarterly: 'buy_btn_1TbIvLCrKKNvP7Gpgr1aVMy6', // ✅ wired — PAR quarterly $269
      annual:    'buy_btn_1TbIuACrKKNvP7GpgPnm6t7x', // ✅ wired — PAR annual $948
    },
    services: [
      { name: 'Tournament Recommendations', desc: 'Tournaments selected against your handicap, ranking, and goals — chosen for what they add to your development, not their prestige.' },
      { name: 'Biweekly Practice Plan', desc: 'A structured practice schedule built around your weaknesses, with priorities for every session.' },
      { name: 'Gear & Fitting Advice', desc: 'Equipment matched to your swing speed, height, age, and budget — plus where to find the right fitting near you.' },
      { name: 'Email Consultation', desc: 'Direct email access to the team for the questions that come up between sessions.' },
    ],
    details: {
      tagline: 'The foundation tier — for juniors who want structure and accountability without weekly contact.',
      description: 'PAR gives you the framework: tournament selection, biweekly practice planning, equipment guidance, and email access. Monthly, quarterly (≈10% off), or annual billing. Cancel any time.',
    },
  },
  {
    id: 'birdie',
    tier: 'BIRDIE',
    prices: { monthly: 121, quarterly: 329, annual: 1199 },
    stripeBuyButtonIds: {
      monthly:   'buy_btn_1Tb1AbCrKKNvP7GpZtNYLMjg', // ✅ wired — BIRDIE monthly $121
      quarterly: 'buy_btn_1TbIybCrKKNvP7GpRassu3dV', // ✅ wired — BIRDIE quarterly $329
      annual:    'buy_btn_1TbIzfCrKKNvP7Gp33V8fNJT', // ✅ wired — BIRDIE annual $1199
    },
    services: [
      { name: 'Everything in PAR' },
      { name: '1 video call per month', desc: 'A monthly 1-on-1 session to review progress, debrief tournaments, and set the next 30 days.' },
      { name: 'Academy Recommendations', desc: 'Short-list of training academies that match your level, learning style, location, and budget.' },
      { name: 'Coach Recommendations', desc: 'Specific instructor recommendations — not all coaches are equal, and the right fit changes a trajectory.' },
      { name: 'Email & WhatsApp Support', desc: 'Direct WhatsApp + email access to the team. Real advice, fast.' },
    ],
    details: {
      tagline: 'The committed program. Monthly check-ins, academy/coach recommendations, real-time support.',
      description: 'BIRDIE adds monthly video calls, specific academy and coach recommendations, and full WhatsApp + email support. From $121 per month. Cancel any time.',
    },
  },
  {
    id: 'eagle',
    tier: 'EAGLE',
    prices: { monthly: 145, quarterly: 389, annual: 1399 },
    stripeBuyButtonIds: {
      monthly:   'buy_btn_1Tb1C9CrKKNvP7GpMs0K5DG6', // ✅ wired — EAGLE monthly $145
      quarterly: 'buy_btn_1TbJ2xCrKKNvP7GpHqlJtLC6', // ✅ wired — EAGLE quarterly $389
      annual:    'buy_btn_1TbJAACrKKNvP7GpDfqtMJnC', // ✅ wired — EAGLE annual $1399
    },
    services: [
      { name: 'Everything in BIRDIE' },
      { name: 'Biweekly video call (2x/month)', desc: 'Two video sessions per month — tight feedback loops on practice, tournaments, and decision-making.' },
      { name: 'Pre-Tournament Course Management', desc: 'Hole-by-hole course breakdown ahead of key events — danger zones, game plan, emotional management.' },
      { name: 'Full 3-Month Tournament Schedule', desc: 'A rolling 3-month competitive calendar balancing development events, ranking events, and rest.' },
      { name: 'Priority WhatsApp & Email Support', desc: 'Front-of-the-line response. Real-time answers before a round, during a trip, after a round.' },
    ],
    details: {
      tagline: 'The intensive program — for juniors with serious collegiate or competitive ambitions.',
      description: 'EAGLE is twice-monthly video calls, pre-tournament course breakdowns, a rolling 3-month tournament calendar, and priority support. From $145 per month.',
    },
  },
];

// ─── CAMPS ───────────────────────────────────────────────────────────────────
export const campsPackages = [
  {
    id: 'audit',
    tier: 'Camp Audit',
    price: '$750',
    priceAmount: 750,
    period: 'one-time',
    stripeBuyButtonId: 'buy_btn_1Tb1CxCrKKNvP7GpBkBWBR1M', // ✅ wired
    services: [
      { name: 'On-site or remote program review', desc: 'End-to-end assessment of your current program — structure, content, staff, equipment, parent communication.' },
      { name: 'Full written audit report', desc: "A detailed document with findings — what works, what doesn't, and why." },
      { name: 'Benchmarking vs best-in-class', desc: 'Your program compared against leading junior golf camps so you see exactly where you stand.' },
      { name: 'Priority action list', desc: 'A short, prioritized list of quick wins for next season — without rebuilding from scratch.' },
    ],
    details: {
      tagline: 'A diagnostic. Where your program stands and what to do next.',
      description: 'Audit gives you a clear, prioritized assessment of your current program in under three weeks of kickoff. One-time fee.',
    },
  },
  {
    id: 'build',
    tier: 'Camp Build',
    price: '$4,500',
    priceAmount: 4500,
    period: 'one-time',
   stripeBuyButtonId: 'buy_btn_1Tb1DjCrKKNvP7GpYlY2cIQJ', // ✅ wired
    services: [
      { name: 'Everything in Camp Audit' },
      { name: 'Complete program from scratch', desc: 'Golf program designed ground-up — daily structure, skill progression by age and level, activity flow.' },
      { name: 'Equipment shopping list', desc: 'What to buy, which brands deliver at the right price, where to source it, what to avoid.' },
      { name: 'Daily curriculum & drill library', desc: 'Day-by-day session plans with specific drills, games, and skill challenges — built for mixed-ability groups.' },
      { name: 'Staff onboarding & training guide', desc: 'Briefing materials, coaching cues, safety protocols. Your staff can deliver confidently within days.' },
    ],
    details: {
      tagline: 'The full architecture — a complete program built for your season.',
      description: 'Build delivers an entire program from scratch — curriculum, drills, equipment, staff training. Ready to deploy for your season. One-time fee.',
    },
  },
  {
    id: 'retainer',
    tier: 'Camp Retainer',
    price: '$500',
    priceAmount: 500,
    period: 'per month',
    stripeBuyButtonId: 'buy_btn_1Tb13hCrKKNvP7GpeYgH35Fe', // ✅ wired
    services: [
      { name: 'Ongoing program management', desc: "HAMER stays engaged season after season — your golf program isn't a one-off project." },
      { name: 'Seasonal curriculum refreshes', desc: 'New drills, adjusted progressions, and fresh content so the program never goes stale.' },
      { name: 'Monthly parent newsletter', desc: 'A professionally written monthly update for parents — highlights, learnings, and tips to support their child at home.' },
      { name: 'Dedicated point of contact', desc: 'One named person on the HAMER team — fast answers, no ticket queue.' },
      { name: 'Quarterly program review call', desc: "Every 90 days a working call to review what's working, what to evolve, what to add next." },
    ],
    details: {
      tagline: 'For camps that want HAMER as a permanent part of the team.',
      description: 'Retainer is the ongoing relationship — refreshes, parent communications, dedicated contact, quarterly reviews. $500 per month.',
    },
  },
];

// Trusted programs (used on Home + Partners)
export const trustedPrograms = [
  'Hacienda San Gaspar Golf',
  'Tres Vidas Golf Club',
  'AGVM Mexico National Team',
  'Camp Belgrade',
  'Camp Concord',
  'Utah County Golf Academies',
  'La Pradera Golf',
];

// Quick lookup
export function getPackage(programId, packageId) {
  const map = { recruit: recruitPackages, consult: consultPackages, camps: campsPackages };
  return (map[programId] || []).find((p) => p.id === packageId);
}

// Program metadata
export const programs = {
  recruit: {
    id: 'recruit',
    name: 'Recruit',
    label: 'RECRUIT — COLLEGIATE PLACEMENT',
    tagline: 'Profile, highlight video, and personalized outreach — every touchpoint built to make coaches respond.',
    description: 'The collegiate landscape is saturated. Generic outreach gets ignored. We leverage our Division I experience to build a recruiting campaign tailored to each athlete — the right schools, the right messages, the right follow-up cadence. You compete; we handle the architecture.',
    packages: recruitPackages,
    termsRoute: '/terms/recruit',
  },
  consult: {
    id: 'consult',
    name: 'Consult',
    label: 'CONSULT — PLAYER DEVELOPMENT',
    tagline: 'Tournament calendar, practice plan, equipment decisions, and academy fit — all structured to compound month over month.',
    description: "Consult is year-round player development for serious juniors. We don't run swing analysis software — we run the conversations about which tournaments matter, when to step up a level, and which decisions a 17-year-old shouldn't be making alone.",
    packages: consultPackages,
    termsRoute: '/terms/consult',
  },
  camps: {
    id: 'camps',
    name: 'Camps',
    label: 'CAMPS — PROGRAM ARCHITECTURE',
    tagline: 'Audit, build, and operate junior golf programs that match the standards of leading clubs and academies.',
    description: 'For camp operators: curriculum design, equipment strategy, staff training. For golf programs that want HAMER as a permanent part of the team.',
    packages: campsPackages,
    termsRoute: '/terms/camps',
  },
};
