// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Cryptoplace/', // NOTE: repo ka naam yahi hai
  plugins: [react()],
});
