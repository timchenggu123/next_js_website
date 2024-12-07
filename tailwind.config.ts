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
        'primary-black': '#080808',
        'secondary-white': '#f1f7fe',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      glowingShadow: 'drop-shadow(0 0 0.5rem #ffffff)',
    },
  },
  plugins: [require("daisyui")],
}
export default config
