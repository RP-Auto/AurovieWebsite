import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 3001,        // Choose your desired port, default is 3000
    strictPort: true,  // Optional: If true, the server will fail if the port is already in use
}})