import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // Allows using test() and expect() globally
    environment: 'jsdom', // Use jsdom for React testing
    setupFiles: './src/setupTests.js', // optional, if you have jest-dom
  },
});