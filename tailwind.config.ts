import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "text-color": "hsl(var(--text-color))",
        "primary-green": "hsl(var(--primary-green))",
        "accent-red": "hsl(var(--accent-red))",
        "accent-brown": "hsl(var(--accent-brown))",
        "beige-light": "hsl(var(--beige-light))",
        "green-light": "hsl(var(--green-light))",
      },
      fontFamily: {
        canopee: ["Playfair Display", "Georgia", "serif"],
        palatino: ["Palatino Linotype", "Palatino", "Georgia", "serif"],
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
