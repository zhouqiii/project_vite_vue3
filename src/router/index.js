
import { createRouter, createWebHashHistory} from 'vue-router';//createWenHistory是router的history模式
import Home from '../view/Home.vue'

const routes=[
    {
        name:'Home',
        path:'/',
        component: Home
    }
]
const router = createRouter({
    history:createWebHashHistory(), // hash模式
    routes,
  });
  
  export default router;