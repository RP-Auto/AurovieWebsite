/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#dd8036",
        backgroundColor: "#36ae9a",
      },
      fontSize: {
        // Custom font sizes
        xxl: '1.5rem',  // Adjust the size as needed
        xxxl: '2rem',   // Adjust the size as needed
      },
    },
  },
  plugins: [],
}
