import vue from '@vitejs/plugin-vue'
import pluginEnv from 'vite-plugin-vue-env'
import path from 'path'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  plugins: [
    vue(),
    pluginEnv(
      {},
      {
        variablePrefix: 'VUE_',
      }
    ),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    rollupOptions: {
      external: (source) => {
        return source.startsWith('assets/')
      },
    },
  },
}

export default config
