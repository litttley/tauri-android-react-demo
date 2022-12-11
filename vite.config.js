import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { internalIpV4 } from 'internal-ip'
// https://vitejs.dev/config/
export default defineConfig(async ()=>{
  const host = await internalIpV4()

  const config = {
    plugins: [react()],
    server: {
      host: '0.0.0.0', // listen on all addresses
      port: 5173,
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host,
        port: 5183,
      },
    },
  }

  return config

})
