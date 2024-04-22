import { fontFamily } from 'tailwindcss/defaultTheme';

// const myColorsOriginal = {
//   dark: '#391F30',
//   primary: '#641A4A',
//   babyPrimary: '#BA9CB0',
//   youngPrimary: '#7B6674',
//   primaryGray: '#EFE8ED',
//   accent: '#E6FC52',
//   borderLight: 'rgba(0, 0, 0, 0.12)',
//   bgLight: '#F7F4F6',
//   bgMedium: '#F3EDF1',
//   bgDark: '#E8DDE4',
//   error: '#FF5555',
//   youtubeRed: '#FF0000',
// };

export const myColorsBW = {
  dark: '#222222',
  primary: '#444444',
  babyPrimary: '#AAAAAA',
  youngPrimary: '#777777',
  primaryGray: '#E5E5E5',
  accent: '#E6FC52',
  borderLight: 'rgba(34, 34, 34, 0.12)',
  bgLight: '#F5F5F5',
  bgMedium: '#EBEBEB',
  bgDark: '#D9D9D9',
  error: '#FF5555',
  youtubeRed: '#FF0000',
  link: '#6366f1',
};

const colors = myColorsBW;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '300px', // relly small phones like Galaxy fold
      sm: '640px', // phones in portrait mode
      md: '768px', // phones in landscape mode, tablets in portrait mode
      lg: '1024px', // tablets in landscape mode, small laptops
      xl: '1280px', // larger laptops and desktops
      '2xl': '1536px', // large desktops and high-resolution displays
    },
    borderRadius: {
      none: '0',
      DEFAULT: '5px',
      lg: '10px',
      xl: '12px',
      '2xl': '18px',
      full: '9999px',
    },
    borderColor: {
      DEFAULT: colors.borderLight,
      white: '#FFFFFF',
      transparent: 'transparent',
      ...colors,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      overlay: 'hsla(0, 0%, 0%, 0.439)',
      ...colors,
    },
    fontFamily: {
      body: ['var(--font-inter)', ...fontFamily.sans],
      heading: ['var(--font-raleway)', ...fontFamily.sans],
    },
    extend: {
      height: {
        header: '70px',
        content: 'calc(100vh - 70px)',
        bottomNav: '60px',
      },
      minHeight: {
        content: 'calc(100vh - 80px)',
      },
      transitionProperty: {
        'box-shadow': 'box-shadow',
      },
      backgroundImage: {
        'mid-pattern': `linear-gradient(to right, ${colors.bgDark}, ${colors.bgDark} 45%, #FFFFFF 45%, #FFFFFF 100%)`,
      },
    },
    keyframes: {
      hide: {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },
      show: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      contentShow: {
        from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
        to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
      },
      slideDownAndFade: {
        from: { opacity: 0, transform: 'translateY(-2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideLeftAndFade: {
        from: { opacity: 0, transform: 'translateX(2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      slideUpAndFade: {
        from: { opacity: 0, transform: 'translateY(2px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
      slideRightAndFade: {
        from: { opacity: 0, transform: 'translateX(2px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
      },
      spinnerOrbit: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
      slideIn: {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' },
      },
      slideUp: {
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0)' },
      },
      slideDown: {
        from: { transform: 'translateY(0)', opacity: 1 },
        to: { transform: 'translateY(100%)', opacity: 0 },
      },
      swipeOut: {
        from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
        to: { transform: 'translateX(100%)' },
      },
    },
    animation: {
      hide: 'hide 100ms ease-in',
      overlayShow: 'show 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideRightAndFade:
        'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      spinnerOrbit: 'spinnerOrbit 1.5s linear infinite',
      slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideUp: 'slideUp 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      slideDown: 'slideDown 100ms ease-out',
      swipeOut: 'swipeOut 100ms ease-out',
    },
  },
  plugins: [],
};
