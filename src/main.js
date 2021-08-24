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
import SHeader from './components/Header.vue'
app.component('s-header', SHeader)

app.use(Button)
  .use(NavBar)

app.use(router)
  .use(store)
  .mount('#app')
