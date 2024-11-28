// tailwind.config.js
module.exports = {
  content: [
    './index.html',         // Ensures Tailwind looks through your HTML files
    './script.js',          // Include JS files if they have tailwind classes
    './src/input.css',      // Include the input CSS file if necessary
  ],
  safelist: [
    "row-start-1",
    "row-start-2",
    "row-start-3",
    "row-start-4",
    "row-start-5",
    "row-start-6",
    "row-start-7",
    "row-start-8",
    "row-start-9",
    "row-start-10",
    "row-start-11",
    "row-start-12"
],
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
}
