import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Aki from './components/Aki.vue'
import Aki2 from './components/Aki2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    // 当你访问根路径时，渲染 Aki 组件
    { path: '/', component: Aki },
    { path: '/xxx', component: Aki2 },
  ],
})
const app = createApp(App)
app.use(router) // 使用 router
app.mount('#app')
