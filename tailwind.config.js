/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern, bold color palette
        primary: {
          DEFAULT: '#5731F5',  // Electric Indigo
          light: '#7859F7',
          dark: '#3E1FD1',
          50: '#F5F3FE',
          100: '#EBE6FD',
          200: '#D7CDFB',
          300: '#C3B4F9',
          400: '#AF9BF7',
          500: '#9B82F5',
          600: '#7859F7',
          700: '#5731F5',
          800: '#3E1FD1',
          900: '#2E17A3',
        },
        success: {
          DEFAULT: '#75E3B3',  // Aquamarine
          light: '#9EECC9',
          dark: '#4FD69A',
          50: '#F0FDF9',
          100: '#E1FBF3',
          200: '#C3F7E7',
          300: '#A5F3DB',
          400: '#87EFCF',
          500: '#75E3B3',
          600: '#4FD69A',
          700: '#3BC085',
          800: '#2E9A6A',
          900: '#21744F',
        },
        warning: {
          DEFAULT: '#FF9B00',  // Orange Peel
          light: '#FFB133',
          dark: '#E68A00',
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE399',
          300: '#FFD566',
          400: '#FFC733',
          500: '#FFB900',
          600: '#FF9B00',
          700: '#E68A00',
          800: '#CC7A00',
          900: '#B36A00',
        },
        accent: {
          DEFAULT: '#E0FC2F',  // Chartreuse
          light: '#E9FD66',
          dark: '#C8E01A',
          50: '#FCFEF0',
          100: '#F9FDE1',
          200: '#F3FBC3',
          300: '#EDF9A5',
          400: '#E7F787',
          500: '#E0FC2F',
          600: '#C8E01A',
          700: '#A8BC15',
          800: '#889810',
          900: '#68740C',
        },
        danger: {
          DEFAULT: '#FF4D00',  // Red-Orange
          light: '#FF7033',
          dark: '#CC3D00',
          50: '#FFF3ED',
          100: '#FFE7DB',
          200: '#FFCFB7',
          300: '#FFB793',
          400: '#FF9F6F',
          500: '#FF874B',
          600: '#FF4D00',
          700: '#CC3D00',
          800: '#992E00',
          900: '#661F00',
        },
        // Neutrals
        black: '#0F0D03',
        white: '#FFFCFF',
        gray: {
          100: '#E4E2F5',
          300: '#BDBBB5',
          500: '#757369',
          700: '#424038',
          900: '#1A1814',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Oversized, expressive typography
        'display': ['72px', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'data-lg': ['64px', { lineHeight: '1.0', fontWeight: '700' }],
        'data': ['32px', { lineHeight: '1.2', fontWeight: '600' }],
        'data-sm': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'label': ['12px', { lineHeight: '1.4', fontWeight: '600' }],
        'label-sm': ['10px', { lineHeight: '1.3', fontWeight: '700' }],
      },
      spacing: {
        // 8px base unit
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '896px',
        'container-lg': '1280px',
        'container-xl': '1536px',
      },
      borderWidth: {
        DEFAULT: '2px',
        '0': '0px',
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
      borderRadius: {
        // Sharp corners - no rounding
        'none': '0px',
        DEFAULT: '0px',
      },
      boxShadow: {
        // No shadows - German functionalism
        'none': 'none',
        DEFAULT: 'none',
      },
      transitionDuration: {
        'fast': '150ms',
        DEFAULT: '200ms',
        'slow': '300ms',
      },
    },
  },
  plugins: [],
}

