import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Dashboard from './components/products/products.vue'
import App from './App.vue'

const router = createRouter({
 history: createWebHistory(),
 routes: [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard },
 ],
})

createApp(App).use(router).mount('#app')
