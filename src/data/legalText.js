// src/data/legalText.js
// =============================================================================
// Single source of truth for all legal text on the HAMER site.
// Edit copy directly in this file — components below pull from these constants.
// Governing law: State of New York, USA. Last reviewed: May 25, 2025.
// =============================================================================

export const LEGAL_EFFECTIVE_DATE = 'May 25, 2025';

// ─── Shared clauses used across all packages ────────────────────────────────

export const CLAUSE_PARTIES_INDIVIDUAL = {
  heading: 'Parties and Capacity to Contract',
  body: [
    'The Parent or Legal Guardian (the "Client") enters into this agreement on behalf of the minor golf athlete (the "Beneficiary"). All references to the Client in these Terms refer to the Parent or Legal Guardian.',
    'By accepting these Terms, the Client represents and warrants that (a) they are at least 18 years of age; (b) they are the parent or legal guardian of the Beneficiary, or are otherwise legally authorized to contract on the Beneficiary\'s behalf; and (c) they have full authority to bind the Beneficiary to the obligations set forth herein.',
    'All notices, communications, deliverables, and billing correspondence from HAMER Golf Consulting ("HAMER") will be directed to the Client. The Client is responsible for sharing relevant information with the Beneficiary in an age-appropriate manner.',
    'Where the Beneficiary is 18 years of age or older at the time of enrollment, the Beneficiary may sign as Client directly, in which case all references to "Client" and "Beneficiary" refer to the same individual.',
  ],
};

export const CLAUSE_PARTIES_BUSINESS = {
  heading: 'Parties and Authority',
  body: [
    'This agreement is entered into between HAMER Golf Consulting ("HAMER") and the entity identified at the point of purchase (the "Client"), which may be a summer camp, club, academy, golf school, or other golf program operator.',
    'The individual accepting these Terms on behalf of the Client represents and warrants that (a) they are duly authorized to bind the Client to this agreement; (b) the Client is a duly organized and legally operating entity in good standing; and (c) all information provided at enrollment is accurate and complete.',
  ],
};

export const CLAUSE_PRIVACY = {
  heading: 'Privacy and Data Protection',
  body: [
    'HAMER processes personal data in accordance with its Privacy Notice, available at hamergolfconsulting.com/privacy. The Privacy Notice describes the categories of personal data collected, the purposes and legal basis for processing, retention periods, and the rights of data subjects.',
    'For Clients resident in the European Economic Area, the Privacy Notice sets out the rights available under the EU General Data Protection Regulation (GDPR). For Clients resident in Mexico, it sets out the rights available under the Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP). For Clients resident in California, it sets out rights available under the California Consumer Privacy Act (CCPA), as amended.',
    'By accepting these Terms, the Client acknowledges that they have received and reviewed the Privacy Notice.',
  ],
};

export const CLAUSE_CONFIDENTIALITY = {
  heading: 'Confidentiality',
  body: [
    'All information shared by the Client with HAMER — including personal data, athletic records, academic information, medical or physical condition information, and family details — is treated as strictly confidential. HAMER will not disclose Client information to third parties without prior written consent, except where (a) required by law, court order, or governmental authority; (b) necessary to defend or assert HAMER\'s legal rights in a dispute; (c) disclosed to NCAA programs, coaches, or admissions officers at the express direction of the Client for the express purpose of college placement; or (d) shared with HAMER\'s professional advisors (counsel, accountants, technology vendors) who are themselves under a duty of confidentiality.',
  ],
};

export const CLAUSE_IP = {
  heading: 'Intellectual Property',
  body: [
    'All materials, plans, documents, curricula, templates, drills, course breakdowns, recommendations, and other deliverables produced by HAMER are the intellectual property of HAMER. The Client is granted a personal, non-transferable, non-sublicensable license to use these materials solely for the Beneficiary\'s own development (in the case of Recruit and Consult) or for the Client\'s internal program operation (in the case of Camps).',
    'Resale, redistribution, public posting, reproduction for use with non-Beneficiary athletes, or commercial use of any deliverable is strictly prohibited. The license granted terminates immediately upon any breach of this clause.',
  ],
};

export const CLAUSE_NCAA = {
  heading: 'NCAA Amateurism and Eligibility',
  body: [
    'HAMER\'s recommendations regarding NCAA eligibility, amateurism, recruitment, and college placement are based on NCAA rules, bylaws, and interpretations in effect at the time of service delivery.',
    'The Client acknowledges that (a) NCAA rules and interpretations change periodically; (b) compliance with current NCAA rules is the Client\'s and Beneficiary\'s responsibility; (c) the NCAA, member institutions, athletic conferences, and college admissions offices make eligibility and admissions determinations independently; and (d) HAMER does not act as an agent of the NCAA or of any member institution.',
    'HAMER assumes no liability for changes in NCAA policy after services have been rendered, for decisions made by NCAA bodies or admissions officers, or for outcomes affected by the Client\'s or Beneficiary\'s noncompliance with NCAA rules.',
  ],
};

export const CLAUSE_LIABILITY = {
  heading: 'Limitation of Liability',
  body: [
    'HAMER provides consulting and advisory services based on professional experience and judgment. HAMER does not guarantee (a) acceptance to any specific college or university; (b) athletic scholarship offers or scholarship amounts; (c) tournament results, ranking changes, or improvement in handicap; (d) the suitability or performance of any third-party coach, academy, or vendor recommended; or (e) the financial viability or operational success of any camp or program advised.',
    'HAMER\'s total aggregate liability under this agreement, whether in contract, tort, statute, or otherwise, shall not exceed the amount paid by the Client for the specific service giving rise to the claim.',
    'To the maximum extent permitted by law, HAMER shall not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages, including without limitation lost opportunities, lost income, lost scholarships, emotional distress, or reputational harm.',
  ],
};

export const CLAUSE_FORCE_MAJEURE = {
  heading: 'Force Majeure',
  body: [
    'Neither party shall be liable for any failure or delay in performance to the extent caused by events beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemic or epidemic, war, civil unrest, government action or restriction, labor disputes, internet or payment processor outages, NCAA or college calendar disruptions, or third-party service provider failures.',
    'The affected party shall notify the other party promptly upon learning of the event and shall use commercially reasonable efforts to mitigate its impact. If the event continues for more than 60 days, either party may terminate the agreement on written notice, with refunds (if any) calculated pro-rata for work not yet performed.',
  ],
};

export const CLAUSE_MODIFICATIONS = {
  heading: 'Modifications',
  body: [
    'HAMER may modify these Terms from time to time. Non-material modifications (typographical corrections, contact updates, clarifications that do not materially affect Client rights) take effect upon publication of the updated Terms on hamergolfconsulting.com.',
    'Material modifications — changes to fees, refund policy, dispute resolution, governing law, or the scope of services — require (a) written notice to the Client via email at least 30 days before the effective date; and (b) the Client\'s continued payment or use of the service after the effective date, which constitutes acceptance.',
    'If the Client does not accept a material modification, the Client may cancel the service before the modification\'s effective date in accordance with the Cancellation Policy of these Terms, without penalty beyond charges already incurred.',
  ],
};

export const CLAUSE_SEVERABILITY = {
  heading: 'Severability and Entire Agreement',
  body: [
    'If any provision of these Terms is held invalid or unenforceable by a court or arbitrator of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall, to the extent possible, be replaced with a valid provision that most closely matches the original intent of the parties.',
    'These Terms, together with the Privacy Notice referenced herein, constitute the entire agreement between the Client and HAMER with respect to the services described, and supersede all prior or contemporaneous oral or written communications, proposals, or agreements.',
  ],
};

export const CLAUSE_DISPUTE_RESOLUTION = {
  heading: 'Dispute Resolution and Governing Law',
  body: [
    'The parties agree to attempt resolution of any dispute through good-faith negotiation. Either party may initiate negotiation by written notice describing the dispute.',
    'If the dispute is not resolved within 30 days of such notice, the dispute shall be submitted to binding arbitration administered by the American Arbitration Association ("AAA") under its Commercial Arbitration Rules in effect at the time of filing. The arbitration shall be conducted by a single arbitrator in New York County, New York; proceedings may be held remotely by agreement of the parties.',
    'The arbitrator\'s decision shall be final and binding. Judgment on the award may be entered in any court of competent jurisdiction.',
    'These Terms shall be governed by and construed in accordance with the laws of the State of New York, USA, without regard to its conflict-of-laws principles.',
    'To the extent that any dispute is not subject to arbitration (for example, small claims under the applicable threshold or claims for injunctive relief in support of arbitration), exclusive venue shall lie in the state or federal courts located in New York County, New York.',
  ],
};

export const CLAUSE_CONTACT = {
  heading: 'Contact',
  body: [
    'For any questions regarding these Terms & Conditions, please contact us:',
    'Email: info@hamergolfconsulting.com · Website: hamergolfconsulting.com',
    'By completing your purchase, you confirm that you have read, understood, and agreed to these Terms & Conditions and have received the Privacy Notice.',
  ],
};

// ─── Subscription-specific shared clauses (Consult tier) ───────────────────

export const CLAUSE_CONSULT_BILLING = {
  heading: 'Subscription Terms — Billing Periods',
  body: [
    'The HAMER Consult Plans are recurring subscriptions offered in three billing periods: (a) Monthly — billed every month; (b) Quarterly — billed every three months, at a discount of approximately 10% compared to monthly billing; (c) Annual — billed every twelve months, at a discount of approximately 20% compared to monthly billing.',
    'The Client selects the billing period at enrollment. The selected billing period continues until canceled by the Client. By enrolling, the Client authorizes HAMER, through its payment processor (Stripe), to charge the subscription fee on the corresponding billing date for the selected billing period.',
    'Subscriptions renew automatically at the end of each billing period unless canceled at least 5 business days before the renewal date. By selecting Quarterly or Annual billing, the Client commits to that full billing period; no partial refund is available for cancellation within an active quarter or year. Cancellation prevents the next renewal.',
  ],
};

export const CLAUSE_CONSULT_CANCELLATION = {
  heading: 'Cancellation Policy',
  body: [
    'The Client may cancel at any time by submitting a written request to info@hamergolfconsulting.com at least 5 business days before the next billing date.',
    'Cancellation prevents the next automatic renewal. The Client retains access to services through the end of the current paid billing period (until the end of the current month, quarter, or annual cycle, as applicable).',
    'No partial refunds are issued for unused time within a current billing period. See the Refund Policy for the only available exception.',
  ],
};

// ─── PACKAGE-SPECIFIC CONTENT ───────────────────────────────────────────────

export const recruitPackagesLegal = [
  {
    id: 'starter',
    name: 'HAMER Recruit — Starter',
    price: '$1,000',
    billingNote: 'One-Time Payment',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Recruit Starter Package is a one-time consulting service designed to provide foundational college recruitment infrastructure for junior golf athletes. Upon payment, the Client will receive:',
      ],
      bullets: [
        'A professionally structured athlete profile document',
        'A curated list of target college programs matched to the Beneficiary\'s profile (handicap, ranking, academics, geography, and goals)',
        'Personalized coach email templates the Client may adapt for outreach',
        'NCAA eligibility guidance specific to the Beneficiary\'s circumstances',
        'Three (3) months of email-based support from the HAMER team, commencing on the date of first delivery',
      ],
    },
    deliveryTimeline: {
      heading: 'Delivery and Timeline',
      body: [
        'Initial deliverables will be provided within 10–14 business days of the later of (a) receipt of full payment and (b) the Client\'s completion of the HAMER onboarding questionnaire.',
        'The three-month support period begins on the date of first delivery.',
        'Delays caused by the Client\'s failure to provide required information in a timely manner will not be attributed to HAMER.',
      ],
    },
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Complete the onboarding questionnaire accurately and promptly.',
        'Provide accurate academic, athletic, and personal information.',
        'Use delivered materials in accordance with NCAA amateurism rules and these Terms.',
        'Not share, resell, or distribute any HAMER-produced materials to third parties.',
      ],
    },
    refundPolicy: {
      heading: 'Refund and Cancellation Policy',
      tiers: [
        { label: 'Full refund', text: 'Available within 48 hours of purchase, provided no work has begun (no profile drafted, no list curated).' },
        { label: '50% refund', text: 'Available if cancellation is requested after work has commenced but before any deliverable has been transmitted to the Client.' },
        { label: 'No refund', text: 'Once any deliverable has been transmitted to the Client, no refund will be issued.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },

  {
    id: 'pro',
    name: 'HAMER Recruit — Pro',
    price: '$2,000',
    billingNote: 'One-Time Payment',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Recruit Pro Package is a comprehensive, done-for-you college recruitment service. It includes everything in the Starter Package, plus:',
      ],
      bullets: [
        'HAMER will write and send personalized outreach emails to target coaches on behalf of the Beneficiary, subject to Client approval of each campaign',
        'Highlight video guidance and review (script, structure, content recommendations)',
        'A structured follow-up strategy and messaging sequence to maintain coach engagement',
        'Six (6) months of email-based support, commencing on the date of first delivery',
      ],
    },
    deliveryTimeline: {
      heading: 'Delivery and Timeline',
      body: [
        'Initial deliverables (profile, target list, templates, eligibility guidance) will be provided within 10–14 business days of (a) full payment and (b) questionnaire completion.',
        'Coach outreach will begin within 5 business days of Client approval of the initial outreach campaign.',
        'The six-month support period begins on the date of first delivery.',
      ],
    },
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Complete onboarding promptly and accurately.',
        'Review and approve all outreach content before it is sent on the Beneficiary\'s behalf.',
        'Provide accurate academic, athletic, and contact information.',
        'Respond to coach inquiries in a timely and professional manner.',
        'Inform HAMER of any verbal or written offers received from coaches.',
        'Not share, resell, or distribute any HAMER-produced materials.',
      ],
    },
    refundPolicy: {
      heading: 'Refund and Cancellation Policy',
      tiers: [
        { label: 'Full refund', text: 'Available within 48 hours of purchase, provided no work has begun.' },
        { label: '50% refund', text: 'Available if cancellation is requested after onboarding has begun but before any outreach emails have been sent.' },
        { label: 'No refund', text: 'Once coach outreach has begun or any deliverable has been transmitted, no refund will be issued.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },

  {
    id: 'elite',
    name: 'HAMER Recruit — Elite',
    price: '$3,000',
    billingNote: 'One-Time Payment',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Recruit Elite Package is the full-concierge college recruitment service — HAMER\'s most comprehensive offering. It includes everything in the Pro Package, plus:',
      ],
      bullets: [
        'Full-concierge coach outreach with no limit on the number of coach contacts pursued',
        'Campus visit preparation coaching (what to say, what to ask, what to look for)',
        'Twelve (12) months of ongoing support spanning the full recruitment cycle',
      ],
    },
    deliveryTimeline: {
      heading: 'Delivery and Timeline',
      body: [
        'Initial deliverables within 10–14 business days of (a) full payment and (b) questionnaire completion.',
        'Coach outreach begins within 5 business days of Client approval.',
        'The twelve-month support period covers the full recruitment cycle from initial deliverables.',
      ],
    },
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Complete onboarding promptly and accurately.',
        'Maintain open and timely communication with the HAMER team throughout the engagement.',
        'Attend scheduled preparation sessions for campus visits.',
        'Inform HAMER of any verbal or written offers received.',
        'Not share, resell, or distribute any HAMER-produced materials.',
      ],
    },
    refundPolicy: {
      heading: 'Refund and Cancellation Policy',
      tiers: [
        { label: 'Full refund', text: 'Available within 48 hours of purchase only, provided no work has begun.' },
        { label: '25% refund', text: 'Available if cancellation is requested within 30 calendar days of purchase AND before any outreach has been sent. Both conditions must be met.' },
        { label: 'No refund', text: 'After 30 calendar days from purchase, or once outreach has begun (whichever occurs first), no refund will be issued.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },
];

export const consultPackagesLegal = [
  {
    id: 'par',
    name: 'HAMER Consult — PAR Plan',
    price: '$99 / month · $269 / quarter · $948 / year',
    billingNote: 'Recurring Subscription · Monthly, Quarterly, or Annual',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Consult PAR Plan is a recurring subscription providing ongoing junior golf development support. Each billing period, the Client receives, for the Beneficiary:',
      ],
      bullets: [
        'Tournament recommendations tailored to the Beneficiary\'s level, handicap, and goals',
        'A biweekly structured practice plan',
        'Gear and fitting advice (equipment matched to swing speed, height, age, and budget)',
        'Email consultation with the HAMER team',
      ],
    },
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Provide accurate and up-to-date information about the Beneficiary\'s performance, goals, and schedule.',
        'Respond to HAMER communications in a reasonable timeframe.',
        'Not share, resell, or distribute any HAMER-produced materials.',
      ],
    },
    refundPolicy: {
      heading: 'Refund Policy',
      tiers: [
        { label: 'No refund for current billing period', text: 'Once a charge has been processed (monthly, quarterly, or annual), no refund will be issued for that period.' },
        { label: 'First charge exception', text: 'If requested within 48 hours of the very first charge AND no services have been delivered, a full refund will be issued.' },
        { label: 'Quarterly and annual commitments', text: 'By selecting these billing periods, the Client commits to the full period. No partial refund is available for cancellation within an active quarter or year. Cancellation prevents the next renewal.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },

  {
    id: 'birdie',
    name: 'HAMER Consult — BIRDIE Plan',
    price: '$121 / month · $329 / quarter · $1,199 / year',
    billingNote: 'Recurring Subscription · Monthly, Quarterly, or Annual',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Consult BIRDIE Plan builds on the PAR Plan with additional touchpoints and direct access. Each billing period, the Client receives everything in PAR, plus:',
      ],
      bullets: [
        'One (1) scheduled video call per month with a HAMER advisor (Monthly), or the equivalent (3 per quarter / 12 per year) for Quarterly and Annual billing',
        'Academy and coach recommendations',
        'WhatsApp and email support',
      ],
    },
    extras: [
      {
        heading: 'Video Call Policy',
        body: [
          'Each monthly billing cycle includes one (1) scheduled video call. For Quarterly subscribers, three (3) calls per quarter. For Annual subscribers, twelve (12) calls per year.',
          'Unused calls do not roll over beyond the current billing period.',
          'The Client is responsible for scheduling calls via the HAMER booking system.',
          'Calls canceled with less than 24 hours\' notice are considered used for that period.',
        ],
      },
    ],
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Schedule video calls within each billing period.',
        'Provide accurate and up-to-date information about the Beneficiary\'s development.',
        'Maintain respectful and professional communication at all times.',
        'Not share, resell, or distribute any HAMER-produced materials.',
      ],
    },
    refundPolicy: {
      heading: 'Refund Policy',
      tiers: [
        { label: 'No refund for current billing period', text: 'Once a charge has been processed (monthly, quarterly, or annual), no refund will be issued for that period.' },
        { label: 'First charge exception', text: 'If requested within 48 hours of the very first charge AND no services have been delivered, a full refund will be issued.' },
        { label: 'Quarterly and annual commitments', text: 'By selecting these billing periods, the Client commits to the full period. No partial refund is available for cancellation within an active quarter or year.' },
        { label: 'Unused video calls are non-refundable', text: 'Unused calls within a billing period are forfeited and cannot be refunded or carried forward.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },

  {
    id: 'eagle',
    name: 'HAMER Consult — EAGLE Plan',
    price: '$145 / month · $389 / quarter · $1,399 / year',
    billingNote: 'Recurring Subscription · Monthly, Quarterly, or Annual',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Consult EAGLE Plan is the flagship junior golf development subscription. It includes everything in the BIRDIE Plan, plus:',
      ],
      bullets: [
        'Two (2) video calls per month (biweekly), or the equivalent (6 per quarter / 24 per year) for Quarterly and Annual billing',
        'Pre-tournament course management sessions for designated key events',
        'A rolling 3-month tournament schedule, updated quarterly',
        'Priority WhatsApp and email support (front-of-the-line response)',
      ],
    },
    extras: [
      {
        heading: 'Video Call Policy',
        body: [
          'Each monthly billing cycle includes two (2) scheduled video calls. For Quarterly subscribers, six (6) calls per quarter. For Annual subscribers, twenty-four (24) calls per year.',
          'Unused calls do not roll over.',
          'Calls canceled with less than 24 hours\' notice are considered used for that period.',
        ],
      },
      {
        heading: 'Tournament Schedule',
        body: [
          'The rolling 3-month tournament schedule is produced upon enrollment and updated each calendar quarter.',
          'Schedule changes requested outside of the quarterly review cycle may require additional planning time at HAMER\'s discretion and are subject to availability.',
        ],
      },
    ],
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Schedule video calls and course management sessions in advance.',
        'Provide tournament results and performance updates for accurate planning.',
        'Maintain professional communication at all times.',
        'Not share, resell, or distribute any HAMER-produced materials.',
      ],
    },
    refundPolicy: {
      heading: 'Refund Policy',
      tiers: [
        { label: 'No refund for current billing period', text: 'Once a charge has been processed, no refund will be issued for that period.' },
        { label: 'First charge exception', text: 'If requested within 48 hours of the very first charge AND no services have been delivered, a full refund will be issued.' },
        { label: 'Quarterly and annual commitments', text: 'By selecting these billing periods, the Client commits to the full period. No partial refund is available for cancellation within an active quarter or year.' },
        { label: 'Unused calls and sessions are non-refundable', text: 'All unused video calls, course management sessions, or support within a billing period are forfeited.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },
];

export const campsPackagesLegal = [
  {
    id: 'audit',
    name: 'HAMER Camps — Camp Audit',
    price: '$750',
    billingNote: 'One-Time Payment',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Camps Audit is a one-time consulting service that provides camps, clubs, and academies with a professional written diagnostic of their existing junior golf program. Upon payment, the Client will receive:',
      ],
      bullets: [
        'An on-site or remote review of the current golf program',
        'A written audit report with findings and recommendations',
        'Benchmarking against best-in-class junior golf programs',
        'A prioritized action list for immediate improvement',
      ],
    },
    deliveryTimeline: {
      heading: 'Delivery and Timeline',
      body: [
        'The written audit report will be delivered within 15 business days of (a) full payment AND (b) completion of the HAMER program intake form.',
        'Remote audits require the Client to provide all requested materials within 5 business days of purchase.',
        'On-site audits require the Client to coordinate a suitable date and provide facility access; this date must fall within 60 days of purchase.',
      ],
    },
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Provide access to all program materials, schedules, and staff information requested by HAMER.',
        'For on-site audits: coordinate a suitable date and provide access to the facility.',
        'Use the audit report solely for internal program improvement purposes.',
        'Not share, resell, or distribute the audit report to third parties or competing programs.',
      ],
    },
    refundPolicy: {
      heading: 'Refund and Cancellation Policy',
      tiers: [
        { label: 'Full refund', text: 'Available within 48 hours of purchase, provided intake materials have not yet been requested or reviewed.' },
        { label: '50% refund', text: 'Available if cancellation is requested after intake but before the audit has been conducted.' },
        { label: 'No refund', text: 'Once the audit has been conducted or the report has been delivered, no refund will be issued.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },

  {
    id: 'build',
    name: 'HAMER Camps — Camp Build',
    price: '$4,500',
    billingNote: 'One-Time Payment',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Camps Build is HAMER\'s most comprehensive one-time service — a complete junior golf program designed from blank page. Upon payment, the Client will receive:',
      ],
      bullets: [
        'Everything included in the Camps Audit',
        'A complete golf program designed from scratch (curriculum architecture, daily structure, skill progression by age and level)',
        'A full daily curriculum with drill library',
        'An equipment shopping list with vendor recommendations and price ranges',
        'A staff onboarding and training guide',
        'A pre-season setup support call (60 minutes)',
      ],
    },
    deliveryTimeline: {
      heading: 'Delivery and Timeline',
      body: [
        'All deliverables will be provided within 20–25 business days of (a) full payment AND (b) completion of the intake process.',
        'The pre-season support call will be scheduled within 30 days of delivery, at a time mutually agreed between HAMER and the Client.',
      ],
    },
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Complete the intake process accurately and promptly (camp size, age groups, staff, facilities).',
        'Use all deliverables solely for internal program implementation.',
        'Not share, resell, or distribute any HAMER-produced materials to third parties or competing programs.',
        'Attend the pre-season support call within the scheduled window.',
      ],
    },
    refundPolicy: {
      heading: 'Refund and Cancellation Policy',
      tiers: [
        { label: 'Full refund', text: 'Available within 48 hours of purchase only, provided no work has begun.' },
        { label: '25% refund', text: 'Available if cancellation is requested within 10 business days of purchase AND before program design has commenced. Both conditions required.' },
        { label: 'No refund', text: 'Once program design has commenced or any deliverable has been transmitted, no refund will be issued under any circumstances.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },

  {
    id: 'retainer',
    name: 'HAMER Camps — Camp Retainer',
    price: '$500 / month',
    billingNote: 'Recurring Subscription · 3-Month Minimum Commitment',
    serviceDescription: {
      heading: 'Service Description',
      body: [
        'The HAMER Camps Retainer is a recurring monthly subscription providing ongoing junior golf program management and support for camps, clubs, and academies. Each month, the Client receives:',
      ],
      bullets: [
        'Ongoing program management and advisory support',
        'Seasonal curriculum refreshes (new drills, adjusted progressions)',
        'A professionally written monthly parent newsletter',
        'A dedicated point of contact at HAMER (named individual, fast response, no ticket queue)',
        'A quarterly program review call (60 minutes)',
      ],
    },
    extras: [
      {
        heading: 'Subscription Terms',
        body: [
          'The Camps Retainer is a recurring monthly subscription with a minimum initial commitment of three (3) months from the date of enrollment.',
          'The Client authorizes HAMER, through its payment processor (Stripe), to charge the subscription fee on the corresponding date each month.',
          'The subscription renews automatically until canceled in accordance with the Cancellation Policy.',
        ],
      },
      {
        heading: 'Quarterly Review Calls',
        body: [
          'One (1) program review call is included per calendar quarter.',
          'The Client is responsible for scheduling within the relevant quarter via the HAMER booking system.',
          'Unused calls do not roll over and are non-refundable.',
        ],
      },
      {
        heading: 'Cancellation Policy',
        body: [
          'After the three-month minimum commitment, the Client may cancel by submitting a written request to info@hamergolfconsulting.com at least 10 business days before the next billing date.',
          'Early cancellation within the minimum commitment period will result in the remaining balance of the three-month commitment being charged in full.',
        ],
      },
    ],
    clientResponsibilities: {
      heading: 'Client Responsibilities',
      bullets: [
        'Provide relevant program updates and seasonal information for curriculum refreshes.',
        'Share necessary camper and parent information for the monthly newsletter.',
        'Schedule quarterly review calls within the applicable quarter.',
        'Maintain professional communication at all times.',
        'Not share, resell, or distribute any HAMER-produced materials.',
      ],
    },
    refundPolicy: {
      heading: 'Refund Policy',
      tiers: [
        { label: 'No refund for current billing period', text: 'Once a monthly charge has been processed, no refund will be issued for that period.' },
        { label: 'Early cancellation penalty applies', text: 'Canceling before completing the three-month minimum commitment will result in the remaining balance being charged in full.' },
        { label: 'First charge exception', text: 'If requested within 48 hours of the very first charge AND no services have been delivered, a full refund will be issued.' },
      ],
      note: 'All refund requests must be submitted in writing to info@hamergolfconsulting.com. Verbal requests will not be honored.',
    },
  },
];

// ─── PRIVACY NOTICE ─────────────────────────────────────────────────────────

export const privacyNotice = {
  effectiveDate: LEGAL_EFFECTIVE_DATE,
  intro: 'This Privacy Notice describes how HAMER Golf Consulting ("HAMER", "we", "our", "us") collects, uses, shares, and protects personal data of our clients and website visitors. It applies to all services offered by HAMER, including Recruit, Consult, and Camps, and to the website hamergolfconsulting.com.',
  sections: [
    {
      heading: '1. Who We Are',
      body: [
        'HAMER Golf Consulting is a golf consulting firm operating internationally. We provide collegiate placement services, year-round player development, and camp program architecture.',
        'For data protection matters, you may contact us at: info@hamergolfconsulting.com.',
      ],
    },
    {
      heading: '2. What Personal Data We Collect',
      body: [
        'Depending on the services you request, we may collect:',
      ],
      bullets: [
        'Identification and contact data: name, email, phone number, postal address, country of residence',
        'Beneficiary data (for Recruit and Consult): the junior athlete\'s name, age, school, grade level, academic records, athletic profile, handicap, ranking, tournament history',
        'Family data: parent or guardian identification, contact details, relationship to the Beneficiary',
        'Payment data: processed by Stripe; HAMER does not store credit card numbers. We receive only the transaction confirmation and the email associated with the purchase',
        'Communications: emails, messages, call recordings (only with prior consent), and meeting notes',
        'Website data: IP address, browser type, pages visited, referral source — collected via standard server logs and (where applicable) analytics tools',
      ],
    },
    {
      heading: '3. Why We Collect Personal Data (Legal Basis)',
      body: [
        'We process personal data on the following legal grounds:',
      ],
      bullets: [
        'Contract performance: to deliver the services you have purchased',
        'Legitimate interests: to run and improve our business, prevent fraud, ensure security, and communicate with clients',
        'Consent: where you have given us specific consent (for example, to record a video call or to send marketing communications)',
        'Legal obligation: where required by law, including tax record-keeping and responding to lawful requests from authorities',
      ],
    },
    {
      heading: '4. How Long We Keep Personal Data',
      body: [
        'We retain personal data for as long as needed to provide services and to meet legitimate business and legal requirements. Specifically:',
      ],
      bullets: [
        'Active client records: for the duration of the engagement, plus 7 years after termination (to address potential disputes and meet tax-record-keeping obligations)',
        'Beneficiary athletic profiles and recruitment materials: for 5 years after engagement end, then deleted or anonymized',
        'Payment records: 10 years, as required by applicable tax and accounting law',
        'Website analytics: aggregated and anonymized data may be retained indefinitely; individual visitor data is retained for 26 months',
      ],
    },
    {
      heading: '5. With Whom We Share Personal Data',
      body: [
        'We share personal data only with the parties below, and only to the extent necessary:',
      ],
      bullets: [
        'Service providers: payment processor (Stripe), email and website infrastructure (Google, Hostinger), scheduling and video tools — each bound by their own data protection obligations',
        'NCAA programs, coaches, and admissions officers: only with the Client\'s express direction, for the purpose of college placement',
        'Professional advisors: legal counsel, accountants — bound by professional confidentiality',
        'Authorities: when required by law, court order, or to defend our legal rights',
        'We do not sell personal data. We do not share personal data with advertisers.',
      ],
    },
    {
      heading: '6. International Data Transfers',
      body: [
        'HAMER operates internationally. Client data may be transferred to and processed in countries other than the country of residence, including the United States, Mexico, and the European Union.',
        'For transfers from the European Economic Area or the United Kingdom to countries that have not been recognized as providing an adequate level of protection, we rely on the European Commission\'s Standard Contractual Clauses and on the data protection contractual commitments of our service providers (notably Stripe and Google).',
        'Where you are resident in Mexico, transfers are made in accordance with Article 36 of the LFPDPPP, on the basis of the contract for services.',
      ],
    },
    {
      heading: '7. Your Rights',
      body: [
        'Depending on your country of residence, you have the following rights regarding your personal data:',
      ],
      bullets: [
        'Access: to know what personal data we hold about you and to receive a copy',
        'Rectification: to correct inaccurate or incomplete data',
        'Deletion: to request the deletion of your data, subject to our legal retention obligations',
        'Restriction: to ask us to limit how we process your data',
        'Portability: to receive your data in a structured, commonly used, machine-readable format',
        'Objection: to object to processing based on legitimate interests',
        'Withdrawal of consent: where processing is based on consent, you may withdraw it at any time',
        'Complaint: to lodge a complaint with the data protection authority in your country (in Spain: AEPD; in Mexico: INAI; in the EU: the supervisory authority of your member state)',
      ],
    },
    {
      heading: '8. How to Exercise Your Rights',
      body: [
        'To exercise any of the rights above, please email info@hamergolfconsulting.com from the email address associated with your account, indicating the right you wish to exercise. We will respond within 30 calendar days (or sooner where required by applicable law).',
        'We may ask for proof of identity before responding, to protect your data from unauthorized access.',
      ],
    },
    {
      heading: '9. Cookies and Tracking',
      body: [
        'Our website uses essential cookies required for functionality and (subject to your consent) analytics cookies that help us understand how the site is used. Where required by law, we will request your consent before placing non-essential cookies.',
        'You can manage cookie preferences through your browser settings.',
        'When you proceed to checkout, payment processing is handled by Stripe, which sets its own cookies in accordance with the Stripe Privacy Policy (stripe.com/privacy).',
      ],
    },
    {
      heading: '10. Children and Minors',
      body: [
        'Our services frequently involve minors (junior golf athletes). We collect data about minors only with the consent of, and through, the parent or legal guardian, who is the contracting party for these Terms.',
        'We do not direct marketing communications to minors. The parent or legal guardian is responsible for sharing relevant information with the minor in an age-appropriate manner.',
      ],
    },
    {
      heading: '11. Security',
      body: [
        'We implement commercially reasonable technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. These include access controls, encryption in transit (TLS), and reliance on reputable service providers (Stripe, Google Workspace) with their own robust security programs.',
        'No system is perfectly secure. We will notify affected individuals and the competent authorities, as required by applicable law, in the event of a personal data breach likely to result in a high risk to the rights and freedoms of data subjects.',
      ],
    },
    {
      heading: '12. Changes to This Privacy Notice',
      body: [
        'We may update this Privacy Notice from time to time. Material changes will be communicated by email to active clients at least 30 days before they take effect. The "Effective" date at the top of this notice reflects the most recent update.',
      ],
    },
    {
      heading: '13. Contact',
      body: [
        'For any privacy-related question or to exercise your rights, contact us at info@hamergolfconsulting.com.',
      ],
    },
  ],
};
