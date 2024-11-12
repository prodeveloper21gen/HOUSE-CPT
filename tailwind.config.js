/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sc-1535': { 'max': '1535px' },
      'sc-1279': { 'max': '1279px' },
      'sc-1023': { 'max': '1023px' },
      'sc-830': { 'max': '830px' },
      'sc-690': { 'max': '690px' },
      'sc-630': { 'max': '630px' },
      'sc-500': { 'max': '500px' },
      'sc-450': { 'max': '450px' },
    }
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
