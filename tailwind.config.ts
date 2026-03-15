import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0D3F2D',
        turf: '#2B8A3E',
        moss: '#6FBF73',
        earth: '#F3EFE4',
        slate: '#1F2937'
      },
      backgroundImage: {
        hero: "linear-gradient(120deg, rgba(13,63,45,0.8), rgba(43,138,62,0.55)), url('https://images.unsplash.com/photo-1524015368236-bbf6f72545b6?auto=format&fit=crop&w=1920&q=80')"
      },
      boxShadow: {
        soft: '0 10px 30px rgba(13, 63, 45, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
