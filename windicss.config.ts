import { defineConfig } from 'vite-plugin-windicss'


function range(size, startAt = 1) {
    return Array.from(Array(size).keys()).map(i => i + startAt)
  }

export default defineConfig({
    
  safelist: [
    range(100).map(i => `bg-gradient-${i}`),
    range(100).map(i => `w-[${i}%]`)
  ],
  extract: {
    include: ['src/**/*.{svelte,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
 
})