import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import MainPage  from './components/MainPage'
import ListOfTasks from "./components/ListOfTasks"



const routes = [
    { path: '/', component: MainPage },
    { path: '/tasks', component: ListOfTasks },
  ]

const router = createRouter({

    history: createWebHashHistory(),
    routes, 
  })


createApp(App).use(router).mount('#app')

