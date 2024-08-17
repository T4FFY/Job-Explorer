const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow': '#FBE8A6',
      'light-orange': '#FAB86E',
      'tangerine': '#F4976C',
      'light-blue': '#D1FDFE',
      'slate-blue': '#B4DFE5',
      'dark-blue': '#303C6C',
    },
  },
  plugins: [flowbite.plugin(),],
}
