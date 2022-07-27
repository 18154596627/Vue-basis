import VueRouter from 'vue-router'//引入路由
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import New from '../pages/New'

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {   path:'/about',
            component:About
         },
         {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'new',
                    component:New
                },
                {
                    path:'message',
                    component:Message
                }
            ]
         }
    ]
})