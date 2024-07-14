import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        '@': path.resolve(__dirname, 'src')
      }
    },
    base: env.VITE_BASE
  })
}
