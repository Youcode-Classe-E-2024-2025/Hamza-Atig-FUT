// tailwind.config.js
module.exports = {
  content: [
    './index.html',         // Ensures Tailwind looks through your HTML files
    './script.js',          // Include JS files if they have tailwind classes
    './src/input.css',      // Include the input CSS file if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
