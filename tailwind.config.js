/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        artisan: {
          bg: '#FDFBF7',
          card: '#FFFFFF',
          cream: '#FAF6F0',
          sand: '#F3ECE4',
          border: '#E8DFD5',
          terracotta: '#C87A5B',
          'terracotta-dark': '#AF6446',
          'terracotta-light': '#F6ECE7',
          sage: '#708A81',
          'sage-light': '#EDF2F0',
          gold: '#D4AF37',
          'gold-light': '#FBF6E9',
          'gold-dark': '#B89222',
          charcoal: '#262626',
          muted: '#6E675F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(200, 122, 91, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 40px -10px rgba(200, 122, 91, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float 7s ease-in-out infinite reverse',
      }
    },
  },
  plugins: [],
}
