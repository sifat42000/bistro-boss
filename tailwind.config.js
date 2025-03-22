/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // ES Module import ব্যবহার করুন

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // সরাসরি import করা প্লাগিন ব্যবহার করুন
  ],
}