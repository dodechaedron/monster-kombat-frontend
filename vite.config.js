import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import vikeReact from 'vike-react/config'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), basicSsl()],
    ssr: false,
    server: {
      /*here*/
      hmr: { overlay: false }
    },
    extends: [vikeReact],
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    }
  }
})
