/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                beige: {
                    50: '#FAF8F5',
                    100: '#F5E6D3',
                    200: '#EDD9C0',
                    300: '#E5CCAD',
                    400: '#DDBF9A',
                    500: '#D5B287',
                    600: '#B8956F',
                    700: '#9B7857',
                    800: '#7E5B3F',
                    900: '#613E27',
                },
                brown: {
                    50: '#F7F3F0',
                    100: '#E8DDD6',
                    200: '#D9C7BC',
                    300: '#CAB1A2',
                    400: '#BB9B88',
                    500: '#8B4513',
                    600: '#7A3D10',
                    700: '#69350E',
                    800: '#582D0B',
                    900: '#472509',
                },
                gold: {
                    50: '#FDF9E6',
                    100: '#F9F0CC',
                    200: '#F5E6B3',
                    300: '#F1DD99',
                    400: '#EDD380',
                    500: '#D4AF37',
                    600: '#B89530',
                    700: '#9C7B29',
                    800: '#806122',
                    900: '#64471B',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Playfair Display', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
}
