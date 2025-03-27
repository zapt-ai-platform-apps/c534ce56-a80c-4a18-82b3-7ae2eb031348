export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#7C3AED', // Updated to a richer purple
                    50: '#F5F3FF',
                    100: '#EDE9FE',
                    200: '#DDD6FE',
                    300: '#C4B5FD',
                    400: '#A78BFA',
                    500: '#7C3AED',
                    600: '#6D28D9',
                    700: '#5B21B6',
                    800: '#4C1D95',
                    900: '#2E1065',
                },
                secondary: {
                    DEFAULT: '#1D4ED8', // Updated to a deep blue
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#60A5FA',
                    500: '#1D4ED8',
                    600: '#2563EB',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A',
                },
                accent: {
                    DEFAULT: '#10B981', // Emerald
                    50: '#ECFDF5',
                    100: '#D1FAE5',
                    200: '#A7F3D0',
                    300: '#6EE7B7',
                    400: '#34D399',
                    500: '#10B981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065F46',
                    900: '#064E3B',
                },
                dark: '#0a0a0a',
                light: '#F9FAFB',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.15)',
                'premium': '0 10px 25px -5px rgba(124, 58, 237, 0.3)',
                'premium-hover': '0 20px 35px -5px rgba(124, 58, 237, 0.4)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -30px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))',
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        color: 'inherit',
                        a: {
                            color: '#7C3AED',
                            '&:hover': {
                                color: '#6D28D9',
                            },
                        },
                        strong: {
                            color: 'inherit',
                        },
                    },
                },
            },
        },
    },
    plugins: [],
};