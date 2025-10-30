import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
          light: '#A5B4FC',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        lg: '0.75rem',
      },
      boxShadow: {
        card: '0 6px 18px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [typography],
}
export default config
