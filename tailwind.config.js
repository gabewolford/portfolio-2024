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
        blue: {
          500: "#2C63AC",
        },
        lavender: {
          500: "#AB8FAC",
        },
        offWhite: {
          500: "#ECE5D6",
        },
        green: {
          500: "#5D785C",
        },
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
