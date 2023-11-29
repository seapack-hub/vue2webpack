import { createApp } from 'vue'
import App from './App.vue'

//引入路由
import router from "@/views/router";
createApp(App).use(router).mount('#app')
