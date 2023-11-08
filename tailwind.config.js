/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      white : '#FFFFFF',
      customBlue : '#22D3EE',
      customBlack : '#2B2B2B',
      darkGray : '#767676',
      lightGray : 'F0F0F6',
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [require('flowbite/plugin')],
}
