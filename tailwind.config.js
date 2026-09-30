module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(140, 60%, 30%)",
        secondary: "hsl(45, 70%, 45%)",
        accent: "hsl(200, 70%, 40%)",
        background: "hsl(0, 0%, 98%)",
        foreground: "hsl(210, 10%, 15%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"]
      }
    }
  },
  plugins: []
};
