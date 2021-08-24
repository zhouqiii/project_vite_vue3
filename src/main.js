import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { Button } from 'vant';
import './lib/rem'
import './index.css'
import './assets/style/index.less'

const app = createApp(App)

app.use(Button)

app.use(router)
  .use(store)
  .mount('#app')
