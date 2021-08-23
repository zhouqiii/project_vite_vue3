
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins:[vue()],
    resolve: {
        alias: {
          "/@/": pathResolve("src"),
        }
    },
    build: {
      outDir: 'dist',

    },
    base: './',
    // css: {
    //   preprocessorOptions: {
    //    less: {
    //        modifyVars: {
    //         hack: `true;@import (reference) "${pathResolve('src/assets/style/variable.less')}";`
    //        },
    //        javascriptEnabled: true
    //      }
    //    }
    //  },

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
});