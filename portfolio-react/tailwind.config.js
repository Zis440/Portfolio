/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00f0c0', // Cyan accent from current portfolio
          glow: 'rgba(0, 240, 192, 0.45)',
        },
        accent: {
          DEFAULT: '#d946ef', // Magenta accent
          glow: 'rgba(217, 70, 239, 0.35)',
        },
        background: {
          DEFAULT: '#05050a',
          glass: 'rgba(8, 8, 18, 0.78)',
          card: 'rgba(255, 255, 255, 0.02)',
        },
        text: {
          DEFAULT: '#f0f2f8',
          secondary: '#989aa8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        }
      }
    },
  },
  plugins: [],
}
