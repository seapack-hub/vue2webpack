export default [
    //主页
    {
        path:'/',
        component:()=>import('@/views/index.vue')
    },
    //插槽的使用
    {
        path:'/slot',
        component:()=>import('@/views/slotComponent/index.vue')
    }
]