/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9CA3AF',
        secondary: '#E5E7EB',
        accent: '#83DBFF',
        base_col: '#111827',
        base_col_darker: '#151E31',
      },
      // fontFamily: {
      //   sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      //   sans: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.monno],
      // },
    },
  },
  plugins: [],
}
