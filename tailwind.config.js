tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        rotateIn: {
          '0%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },

      },
      animation: {
        fadeInUp: 'fadeInUp duration-300 ease-out',
        'rotate-in-45': 'rotateIn 0.8s ease-in-out infinite',
      },
    },
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
      Ovo: ['Ovo', 'serif'],
    },
    colors: {
      white: '#ffffff',
      lightHover: '#fcf4ff',
      fromHover: '#4a00e0',
      toHover: '#8e2de2',
      buttonBase: '#128C7E',
      buttonHover: '#25D366',
      rose: '#FFF1F2',
    },
    boxShadow: {
      black: '2px 2px 0 #000',
      white: '2px 2px 0 #fff',
    },
  },
  variants: {},
  plugins: [],
};
