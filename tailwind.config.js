module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#36454F',
      },
      gridTemplateColumns: {
        'nav': '0.5fr 2fr 0.5fr',
        'side-nav': 'minmax(150px,25%) 1fr'
      },
      height: {
        'content-screen': 'calc(100vh - 4rem)'
      },
    },
  },
  plugins: [],
}
