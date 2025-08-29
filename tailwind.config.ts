import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Enterprise Navy Palette
				navy: {
					50: 'hsl(var(--navy-50))',
					100: 'hsl(var(--navy-100))',
					200: 'hsl(var(--navy-200))',
					300: 'hsl(var(--navy-300))',
					400: 'hsl(var(--navy-400))',
					500: 'hsl(var(--navy-500))',
					600: 'hsl(var(--navy-600))',
					700: 'hsl(var(--navy-700))',
					800: 'hsl(var(--navy-800))',
					900: 'hsl(var(--navy-900))',
					950: 'hsl(var(--navy-950))',
				},
				// Enterprise Grays
				gray: {
					50: 'hsl(var(--gray-50))',
					100: 'hsl(var(--gray-100))',
					200: 'hsl(var(--gray-200))',
					300: 'hsl(var(--gray-300))',
					400: 'hsl(var(--gray-400))',
					500: 'hsl(var(--gray-500))',
					600: 'hsl(var(--gray-600))',
					700: 'hsl(var(--gray-700))',
					800: 'hsl(var(--gray-800))',
					900: 'hsl(var(--gray-900))',
				},
				// Trust Accent Colors
				teal: {
					50: 'hsl(var(--teal-50))',
					100: 'hsl(var(--teal-100))',
					200: 'hsl(var(--teal-200))',
					300: 'hsl(var(--teal-300))',
					400: 'hsl(var(--teal-400))',
					500: 'hsl(var(--teal-500))',
					600: 'hsl(var(--teal-600))',
					700: 'hsl(var(--teal-700))',
					800: 'hsl(var(--teal-800))',
					900: 'hsl(var(--teal-900))',
				},
				green: {
					50: 'hsl(var(--green-50))',
					100: 'hsl(var(--green-100))',
					200: 'hsl(var(--green-200))',
					300: 'hsl(var(--green-300))',
					400: 'hsl(var(--green-400))',
					500: 'hsl(var(--green-500))',
					600: 'hsl(var(--green-600))',
					700: 'hsl(var(--green-700))',
					800: 'hsl(var(--green-800))',
					900: 'hsl(var(--green-900))',
				},
				charcoal: 'hsl(var(--charcoal))',
				'soft-gray': 'hsl(var(--soft-gray))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Poppins', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			boxShadow: {
				'enterprise': 'var(--shadow-enterprise)',
				'enterprise-lg': 'var(--shadow-xl)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
