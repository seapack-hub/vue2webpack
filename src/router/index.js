
//导入路由
import {createRouter,createWebHistory} from "vue-router";
//使用路由
// import routes from "@/router/router";
import moduleRoutes from './requireAll';

const constantRouter = [];

const routes = [...constantRouter,...moduleRoutes]
//创建一个router对象
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router;

