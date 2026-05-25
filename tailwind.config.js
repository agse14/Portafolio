/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#533afd',
          700: '#4434d4',
          800: '#2e2b8c',
          900: '#1c1e54',
        },
        ink: {
          DEFAULT: '#0d253d',
          secondary: '#273951',
          mute: '#64748b',
          'mute-2': '#61718a',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f6f9fc',
          cream: '#f5e9d4',
        },
        hairline: {
          DEFAULT: '#e3e8ee',
          input: '#a8c3de',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontWeight: {
        thin: '300',
        normal: '400',
        medium: '500',
      },
      letterSpacing: {
        tightest: '-1.4px',
        tighter: '-0.96px',
        tight: '-0.64px',
        snug: '-0.26px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
