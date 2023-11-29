//导入vue
import app from "@/App.vue";
//导入路由
import {createRouter,createWebHistory} from "vue-router";
//使用路由
import routes from "@/views/router/routes";
//创建一个router对象
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;

