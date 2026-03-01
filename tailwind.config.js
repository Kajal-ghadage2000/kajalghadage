import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                navy: {
                    900: '#0f172a', // Dark navy background
                    800: '#1e293b',
                    400: '#94a3b8', // Muted text
                    100: '#e2e8f0', // Bright text
                },
                teal: {
                    300: '#5eead4', // Accent color
                }
            }
        }
    },
    plugins: [
        forms,
        containerQueries,
    ],
}
