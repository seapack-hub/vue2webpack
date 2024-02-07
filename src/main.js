import { createApp } from 'vue'
import App from './App.vue'
//引入ElementPlus
// import ElementPlus from 'element-plus';
// //引入样式
// import 'element-plus/dist/index.css';

import ViewUIPlus from 'view-ui-plus';
import 'view-ui-plus/dist/styles/viewuiplus.css'

//引入路由
import router from "./router/index";

const app = createApp(App);
//使用elementPlus
app.use(ViewUIPlus);
//使用路由
app.use(router);
app.mount('#app');
