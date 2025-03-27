export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0070F3',
                    50: '#E6F0FF',
                    100: '#CCE0FF',
                    200: '#99C1FF',
                    300: '#66A3FF',
                    400: '#3384FF',
                    500: '#0070F3',
                    600: '#0058C1',
                    700: '#00408F',
                    800: '#00285D',
                    900: '#00102B',
                },
                secondary: {
                    DEFAULT: '#7928CA',
                    50: '#F3E8FF',
                    100: '#E9D5FF',
                    200: '#D8B4FE',
                    300: '#C084FC',
                    400: '#A855F7',
                    500: '#7928CA',
                    600: '#6312A6',
                    700: '#4A0D7A',
                    800: '#310752',
                    900: '#190429',
                },
                dark: '#111827',
                light: '#F9FAFB',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.15)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
};