import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1c1917',
        'off-white': '#fafaf9',
        bronze: '#b45309',
        'light-amber': '#fef3c7',
        'muted-gray': '#78716c',
        'border-gray': '#e7e5e4',
        'subtle-gray': '#f5f5f4',
        'focus-ring': '#a8a29e',
        'error-red': '#dc2626',
        'warm-stone': '#292524',
        'amber-dark': '#92400e',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['3.815rem', { lineHeight: '1.1' }],
        h1: ['3.052rem', { lineHeight: '1.1' }],
        h2: ['2.441rem', { lineHeight: '1.2' }],
        h3: ['1.953rem', { lineHeight: '1.3' }],
        large: ['1.563rem', { lineHeight: '1.4' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.8rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'section-mobile': '56px',
        'section-tablet': '80px',
        'section-desktop': '104px',
      },
      borderRadius: {
        button: '8px',
        card: '12px',
        'card-lg': '16px',
        input: '8px',
      },
      transitionDuration: {
        default: '300ms',
        fast: '200ms',
      },
      animation: {
        'fade-in': 'fadeIn 500ms ease-out',
        'slide-up': 'slideUp 500ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
