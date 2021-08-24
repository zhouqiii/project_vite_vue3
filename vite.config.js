
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

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
    //不知道为啥没起作用
    // resolve: {
    //     alias: {
    //       '/@/': pathResolve('./src')
    //     }
    // },
    // server: {
    //     cors: true,
    //     open: true,
    //     proxy: {
    //       '/api': {
    //           target: 'http://192.168.99.223:3000',   //代理接口
    //           changeOrigin: true,
    //           rewrite: (path) => path.replace(/^\/api/, '')
    //       }
    //     }
    // }
};