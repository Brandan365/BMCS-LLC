/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      scrollbar: ['rounded'],
      fontFamily: {
        lora: "Lora",
        nunito: "Nunito"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(80%)' },
          to: { transform: 'translateX(-80%)' },
        }
      },
    },
  },
  plugins: [require('tailwind-scrollbar')]
}

