import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{html,js,tx,tsx}',
    './styles/**/*.{js,tx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'secondary-white': '#f1f7fe',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
