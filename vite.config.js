import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://zprototyp.github.io/PrototypeForGitHubPages/",
  server: {proxy: {'/api': 'https://zokubackend-atd8fhadcvaaf0he.swedencentral-01.azurewebsites.net'}}
});
