import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
const kebabCase = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'pinia',
        {
          from: 'uni-mini-router',
          imports: ['createRouter', 'useRouter', 'useRoute'],
        },
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: ['src/store'],
    }),
    Components({
      resolvers: [
        (name) => {
          if (name.match(/^Wd[A-Z]/)) {
            const compName = kebabCase(name)
            return {
              from: `wot-design-uni/components/${compName}/${compName}.vue`,
            }
          }
        },
      ],
      deep: true,
      dirs: ['src/components'],
      dts: 'types/components.ts',
    }),
  ],
})
