/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: 'hsl(216 73% 14%)',
        foreground: 'hsl(0 0% 100%)',
        primary: {
          DEFAULT: 'hsl(216 73% 14%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(216 73% 14%)',
        },
        accent: {
          DEFAULT: 'hsl(15 50% 30%)',
          foreground: 'hsl(0 0% 100%)',
        },
        card: {
          DEFAULT: 'hsl(216 73% 12%)',
          foreground: 'hsl(0 0% 100%)',
        },
        muted: {
          DEFAULT: 'hsl(216 73% 20%)',
          foreground: 'hsl(216 10% 80%)',
        },
        border: 'hsl(216 20% 30%)',
      },
      fontFamily: {
        data: ['Copperplate', 'Courier Prime', 'monospace'],
        heading: ['Didot', 'Playfair Display', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(3rem, 4vw + 1rem, 3.5rem)',
        section: 'clamp(2.5rem, 3vw + 1rem, 3rem)',
        sub: 'clamp(1.5rem, 2vw + 1rem, 2rem)',
        body: 'clamp(1rem, 1.5vw, 1.125rem)',
        data: 'clamp(0.75rem, 0.8vw, 0.875rem)',
      },
      borderRadius: {
        DEFAULT: '0',
      },
    },
  },
  plugins: [],
}
