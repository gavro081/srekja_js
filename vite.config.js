import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Change the port to 3001 or any other available port
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/, // Only include files in the src directory
  },
});
