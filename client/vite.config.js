import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    // Inject API URL at build time — no env file needed
    'import.meta.env.VITE_API_URL': JSON.stringify(
      mode === 'production'
        ? 'https://jarvis-backend-e31w.onrender.com/api'
        : 'http://localhost:5001/api'
    ),
  },
}))
