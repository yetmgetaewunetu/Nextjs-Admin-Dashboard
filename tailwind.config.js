/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "--bg": "#151c2c",
        "--bgSoft": "#1d2d3d",
        "--bgLight": "#2e374a",
        "--text": " white",
        "--textSoft": "#b7bac1",
      },
    },
  },
  plugins: [],
};
