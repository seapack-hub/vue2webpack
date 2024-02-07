/**
 * 模块中路由文件定义：模块名驼峰+Router.js
 * 路由文件一定要以Router.js结尾，普通js文件不要以js结尾
 * 路由模块只定义一次，不要手动引入！不要手动引入！不要手动引入！否则会出现路由重复问题
 * 如果特定路由不需要自动注册，可在route的meta中添加 autoRequire:false
 */

//搜索views目录下以Router.js结尾的路由文件
const webpackContext = require.context('../views',true,/\w+(Router\.js)$/);
const requireAll = ctx => ctx.keys().map(ctx);
const moduleRoutes = requireAll(webpackContext).map(r => r.default);
const routes = [];
moduleRoutes.forEach(item=>{
    //考虑路由定义为对象的情况
    const itemRoutes = Array.isArray(item)?item:[item];
    itemRoutes.map(route=>{
        if(route && route.meta?.autoRequire !== false){
            routes.push(route);
        }
    });
})
export default routes;