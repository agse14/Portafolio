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
        design: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
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
      animation: {
        'gradient': 'gradient-shift 8s ease infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-up': 'slide-up-fade 0.6s ease-out forwards',
        'slide-up-sm': 'slide-up-fade 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'reveal-card': 'slide-up-fade 0.5s ease-out forwards',
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
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(225, 29, 72, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(225, 29, 72, 0.3)' },
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
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
