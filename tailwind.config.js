module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    screens: {
      'mobile': { 'min': '100px', 'max': '500px' },
      'tablet': { 'min': '500px', 'max': '750px' },
      'mini-laptop': { 'min': '750px', 'max': '874px' },
      'laptop': { 'min': '874px', 'max': '1900px' },
      'c-laptop': { 'min': '880px', 'max': '1080px' },
      'desktop': { 'min': '1500px' },
    },
  },

  plugins: [],
}