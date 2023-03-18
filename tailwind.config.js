/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                normal: '#475973',
                'gray': {
                    '300': '#E6EBF2',
                    '400': '#F4F5F7',
                    '500': '#E1E4EB',
                    '600': '#B2BDCD'
                },
                'red': {
                    '300' : '#FFC2C9',
                    '400' : '#F56C6C',
                    '500' : '#D32036',
                    '700' : '#7F1320'
                },
                'cornflowerblue': {
                    '400' : '#409EFF',
                    '500' : '#1F2251'
                },
                'yellow': {
                    '500' : '#E6A23C',
                },
                'green': {
                    '500' : '#67C23A',
                },
            },
            backgroundColor: {
                'gray': {
                    '300': '#E6EBF2',
                    '400': '#F4F5F7',
                    '500': '#E1E4EB',
                    '600': '#B2BDCD'
                },
                'red': {
                    '300' : '#FFC2C9',
                    '400' : '#F56C6C',
                    '500' : '#D32036',
                    '700' : '#7F1320'
                },
                'cornflowerblue': {
                    '400' : '#409EFF',
                    '500' : '#1F2251'
                },
                'yellow': {
                    '500' : '#E6A23C',
                },
                'green': {
                    '500' : '#67C23A',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}