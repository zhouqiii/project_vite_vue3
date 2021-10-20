
import { createApp } from 'vue';
import App from '../../App.vue';
import SvgIcon from '../../components/SvgIcon.vue';

// 自动化加载svg目录下所有svg文件，不需要用户手工导入
const svgModules = import.meta.globEager("./svg/*.svg")//import.meta.globEager是vite引入的构建
console.log(svgModules,'svg模块');
// for (const path in svgModules) {
//     console.log(path)
//   }
// 注册svg-icon组件
createApp(App).component("svg-icon",SvgIcon);