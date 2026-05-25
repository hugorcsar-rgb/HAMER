// src/data/founders.js
// Single source of truth for the three HAMER founders.
// Helper: getFounderById('javier' | 'hugo' | 'diego')

export const FOUNDERS = [
  {
    id: 'javier',
    name: 'Javier Vazquez del Mercado',
    role: '[Type Javier role here]',
    photo: 'https://horizons-cdn.hostinger.com/57c79960757d2f35343a40151d080568.jpg',
    pullQuote: '[Type Javier pull quote here]',
    bio: '[Type Javier full bio here]',
    education: [
      // { school: '[School]', degree: '[Degree]', years: '[Years]' },
    ],
    career: [
      // { role: '[Role]', org: '[Organization]', years: '[Years]' },
    ],
    expertise: [
      // '[Area of expertise]',
    ],
    languages: ['Spanish', 'English'],
    honors: [
      // '[Honor]',
    ],
    email: 'info@hamergolfconsulting.com',
    phone: '+34 666 716 722',
  },

  {
    id: 'hugo',
    name: 'Hugo R. Cepeda Sánchez Aedo',
    role: '[Type Hugo role here]',
    photo: 'https://horizons-cdn.hostinger.com/77e64340e3a5e17b0875a649d5c5648a.jpg',
    pullQuote: '[Type Hugo pull quote here]',
    bio: '[Type Hugo full bio here]',
    education: [
      { school: 'CEI Madrid', degree: 'Máster en Inteligencia Artificial', years: '2025–2026' },
      { school: 'Universidad del Valle de México', degree: 'Derecho (en pausa)', years: '2025–' },
      { school: 'Weber State University', degree: 'Bachelor — Magna Cum Laude', years: '2020–2024' },
    ],
    career: [
      // { role: '[Role]', org: '[Organization]', years: '[Years]' },
    ],
    expertise: [
      // '[Area of expertise]',
    ],
    languages: ['Spanish', 'English', 'French'],
    honors: [
      'McKinsey Forward Program',
      // '[Other honor]',
    ],
    email: 'info@hamergolfconsulting.com',
    phone: '[Type Hugo phone here]',
  },

  {
    id: 'diego',
    name: 'Diego Vazquez del Mercado',
    role: '[Type Diego role here]',
    photo: 'https://horizons-cdn.hostinger.com/5d518278845b029f8a9fc3c9d740f525.jpg',
    pullQuote: '[Type Diego pull quote here]',
    bio: '[Type Diego full bio here]',
    education: [
      { school: 'Saint Louis University Madrid', degree: 'International Business', years: '[Years]' },
    ],
    career: [
      // { role: '[Role]', org: '[Organization]', years: '[Years]' },
    ],
    expertise: [
      // '[Area of expertise]',
    ],
    languages: ['Spanish', 'English'],
    honors: [
      // '[Honor]',
    ],
    email: 'info@hamergolfconsulting.com',
    phone: '+34 670 679 295',
  },
];

// Helper: find a founder by their id
export function getFounderById(id) {
  return FOUNDERS.find((f) => f.id === id);
}
