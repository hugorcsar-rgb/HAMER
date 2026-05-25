// src/data/founders.js
// Real data from the original site, with your edits applied:
//   - Javier phone updated to +34 666 716 722
//   - Diego phone updated to +34 670 679 295
//   - All emails: info@hamergolfconsulting.com
//   - Hugo: FIFA & $105M capital projects removed, Portuguese → French, education expanded, McKinsey added
//   - Diego: Saint Louis University Madrid added

export const founders = [
  {
    name: "Javier Vazquez del Mercado",
    title: "Co-Founder",
    shortBio: "Co-Founder of HAMER. Leads the firm's placement strategy and methodology.",
    image: "https://horizons-cdn.hostinger.com/d18fae25-4a47-4249-92a5-b9d72cd6a39a/57c79960757d2f35343a40151d080568.jpg",
    bio: "Javier is a Co-Founder of HAMER Consulting Group and leads the firm's strategic methodology and placement architecture. Prior to founding HAMER, he served as a management consultant at PwC and is Co-Founder of Almenara. A former NCAA Division I golfer at Utah State University, where he captained the men's team, he combines collegiate athletic experience with institutional consulting discipline.",
    cv: {
      education: ["Utah State University — NCAA Division I Golf Scholarship"],
      athletics: ["Team Captain, Utah State Aggies Men's Golf", "NCAA Division I Golfer"],
      career: ["Management Consultant — PwC", "Co-Founder — Almenara", "Co-Founder — HAMER Consulting Group"],
    },
    expertise: ["NCAA Compliance", "Strategic Management", "Athlete Development", "Placement Strategy"],
    philosophy: "The recruiting landscape is notoriously noisy. To stand out, you need a precise, calculated approach — not just a good swing.",
    email: "info@hamergolfconsulting.com",
    phones: ["+34 666 716 722"],
    whatsapp: "34666716722",
  },
  {
    name: "Hugo R. Cepeda Sánchez Aedo",
    title: "Co-Founder",
    shortBio: "Co-Founder of HAMER. Leads international operations and partnerships.",
    image: "https://horizons-cdn.hostinger.com/d18fae25-4a47-4249-92a5-b9d72cd6a39a/77e64340e3a5e17b0875a649d5c5648a.jpg",
    bio: "Hugo is a Co-Founder of HAMER Consulting Group and leads international operations. He currently serves as GTM Lead at Gober AI and is Co-Founder of Almenara. A former NCAA Division I golfer at Weber State University, he was awarded the Arthur Ashe Jr. Sports Scholar Award in 2024 and was selected for the McKinsey Forward Program. He completed his undergraduate degree Magna Cum Laude on a full athletic scholarship.",
    cv: {
      education: [
        "CEI Madrid — Máster en Inteligencia Artificial (2025–2026)",
        "Universidad del Valle de México — Licenciatura en Derecho (2025, on pause)",
        "Weber State University — Bachelor, Magna Cum Laude (2020–2024)",
      ],
      athletics: ["NCAA Division I Golfer — Weber State Wildcats", "Full Athletic Scholarship (4 years)"],
      honors: ["Arthur Ashe Jr. Sports Scholar Award, 2024", "McKinsey Forward Program"],
      career: ["GTM Lead — Gober AI", "Co-Founder — Almenara", "Co-Founder — HAMER Consulting Group"],
      languages: ["English", "Spanish", "French"],
    },
    expertise: ["International Operations", "Strategic Partnerships", "GTM Strategy", "Athlete Development"],
    philosophy: "Success at the next level requires a foundation built on absolute discipline and flawless operational execution.",
    email: "info@hamergolfconsulting.com",
    phones: ["+34 690 051 832"],
    whatsapp: "34690051832",
  },
  {
    name: "Diego Vazquez del Mercado",
    title: "Co-Founder",
    shortBio: "Co-Founder of HAMER. Leads player development and on-course performance.",
    image: "https://horizons-cdn.hostinger.com/d18fae25-4a47-4249-92a5-b9d72cd6a39a/5d518278845b029f8a9fc3c9d740f525.jpg",
    bio: "Diego is a Co-Founder of HAMER Consulting Group and leads player development and on-course performance. A scratch-handicap competitor with national and international tournament experience, he has held positions in sports industry at PrimeTime Sports & Entertainment and in operational management at Riverwalk Golf Club.",
    cv: {
      education: ["Saint Louis University Madrid — International Business"],
      athletics: ["Scratch Handicap", "Multiple National & International Tournament Titles"],
      career: [
        "Sports Industry — PrimeTime Sports & Entertainment",
        "Operational Management — Riverwalk Golf Club",
        "Co-Founder — HAMER Consulting Group",
      ],
    },
    expertise: ["Equipment Fitting", "Athlete Positioning", "Tournament Preparation", "Sports Marketing"],
    philosophy: "Every practice hour must translate directly to the scorecard. We eliminate wasted motion.",
    email: "info@hamergolfconsulting.com",
    phones: ["+34 670 679 295"],
    whatsapp: "34670679295",
  },
];

// Shared contact endpoints (used by program contact buttons throughout the site)
export const CONTACT = {
  whatsapp: "34666716722",
  email: "info@hamergolfconsulting.com",
};
