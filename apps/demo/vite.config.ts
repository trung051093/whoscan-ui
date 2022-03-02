import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default ({}) => {
  return defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
    },
    plugins: [react()]
  })
}