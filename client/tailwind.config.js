import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Poppins", ...defaultTheme.fontFamily.sans]
  		},
  		keyframes: {
  			overlayShow: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			contentShow: {
  				from: {
  					opacity: '0',
  					transform: 'translate(-50%, -48%) scale(0.96)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translate(-50%, -50%) scale(1)'
  				}
  			}
  		},
  		animation: {
  			overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
  			contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
