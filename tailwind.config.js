/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Note que agora ele busca por .tsx e .ts também
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          body: '#0d1117',
          component: '#161b22',
          card: '#21262d',
        },
        brand: {
          green: '#22c55e',
          orange: '#ea580c',
          orangeHover: '#c2410c',
          highlight: '#f59e0b',
        },
        text: {
          main: '#f0f6fc',
          muted: '#8b949e',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at center top, #1c2128 0%, #0d1117 100%)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}