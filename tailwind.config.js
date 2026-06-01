/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // ── Semantic tokens (used across the whole site) ──────────────────
        background: 'hsl(217 60% 10%)',          // navy profundo  #0A1628
        foreground: '#FBF9F3',                    // marfil brillante #FBF9F3
        primary: {
          DEFAULT: 'hsl(217 60% 10%)',           // navy
          foreground: '#FBF9F3',                 // marfil
        },
        secondary: {
          DEFAULT: 'hsl(39 38% 93%)',            // marfil
          foreground: 'hsl(217 60% 10%)',        // navy
        },
        accent: {
          DEFAULT: '#B6AC97',                    // greige Armani — acento de la casa
          foreground: 'hsl(217 60% 10%)',        // navy (texto sobre greige)
        },
        card: {
          DEFAULT: 'hsl(217 55% 8%)',            // navy más hondo
          foreground: '#FBF9F3',
        },
        muted: {
          DEFAULT: 'hsl(228 11% 26%)',           // pizarra Escorial #3A3D4A
          foreground: 'hsl(39 25% 70%)',         // piedra Alhambra  #C8B99A
        },
        border: 'rgb(182 172 151 / 0.18)',       // hairline greige
        // ── Named brand palette ───────────────────────────────────────────
        navy:   '#0A1628',
        ivory:  '#F4F0E8',
        stone:  '#C8B99A',   // piedra Alhambra
        greige: '#B6AC97',   // greige Armani — acento de la casa
        golf:   '#1C5B43',   // verde de golf — color de la casa
        slate:  '#3A3D4A',   // pizarra Escorial
        ink:    '#0D0D0D',   // negro Senna
        sangre: '#6B1A1A',   // rojo sangre/arena — una sola vez
        nazari: '#1A2A1A',   // verde arco nazarí
      },
      fontFamily: {
        // Etiquetas / nav / números de sección — sans en versalitas
        data: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Titulares — Fraunces (serif de contraste contemporáneo)
        heading: ['"Fraunces"', 'Georgia', 'serif'],
        // Cuerpo — aire
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(3.5rem, 9vw + 1rem, 9rem)',
        section: 'clamp(2.25rem, 3.2vw + 1rem, 3.25rem)',
        sub: 'clamp(1.5rem, 2vw + 1rem, 2rem)',
        body: 'clamp(1rem, 1.4vw, 1.125rem)',
        data: 'clamp(0.72rem, 0.8vw, 0.82rem)',
      },
      letterSpacing: {
        wordmark: '0.14em',
      },
      borderRadius: {
        DEFAULT: '0',
      },
    },
  },
  plugins: [],
}
