import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { Button, NavBar } from 'vant';
import './lib/rem'
import './index.css'
import './assets/style/index.css'
import './assets/style/normal.css'
import './assets/style/theme.less'
const app = createApp(App)
// 引入自动化引入icons/svg文件夹下所有svg的js文件
import "./assets/icons"
//全局注册header组件
import SHeader from './components/Header.vue'
app.component('s-header', SHeader)
//全局注册svg组件
import SvgIcon from './components/SvgIcon.vue';
app.component('svg-icon', SvgIcon)
app.use(Button)
  .use(NavBar)

app.use(router)
  .use(store)
  .mount('#app')
