/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../apps/*/src/**/*.{js,ts,jsx,tsx}",
    "../../apps/storybook/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
};
