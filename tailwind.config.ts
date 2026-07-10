import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./app/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", "system-ui", "sans-serif"],
      },
      boxShadow: {
        header: '0px 2px 2px 0px #00000014'
      },
      colors: {
        gray: {
          25: "#F5F7FA",
        },
        brand: {
          DEFAULT: "#D6336C",
          dark: "#B32657",
          light: "#FCE7EF",
        },
        surface: {
          DEFAULT: "#F1F3F8",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#1F2937",
          muted: "#6B7280",
        },
      },
    },
  },
};
