
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { svgBuilder } from './src/icons/index'; 
const path = require('path')

// https://vitejs.dev/config/
module.exports = {
    plugins:[
      vue(),
      styleImport({//配置vant按需引入，这是和babel单独配置的作用一样的
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style`,
          },
        ],
      }),
      svgBuilder('./src/icons/svg/') // 这里已经将src/icons/svg/下的svg全部导入，无需再单独导入
    ],
    css: { // 引入less全局样式文件
      preprocessorOptions: {
       less: {
           modifyVars: {
            hack: `true;@import (reference) "${path.resolve('src/assets/style/variable.less')}";`
           },
           javascriptEnabled: true
         }
       }
     },
    build: {
      outDir: 'dist',
    },
    base: './',
    devServer: {
      proxy: {
        '/AppPrj4': {
          target: 'https://www.alex188.cn/AppPrj4',
          changeOrigin: true,
          ws: true,
        }
      },
    }
};