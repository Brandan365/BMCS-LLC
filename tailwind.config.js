/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["rounded"],
      fontFamily: {
        lora: "Lora",
        nunito: "Nunito",
        robot: "Roboto",
        inter: "Inter Tight",
        figtree: "Figtree",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at center, hsla(0, 0%, 50%, 0.2) 20%, transparent 200%)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(80%)" },
          to: { transform: "translateX(-80%)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
