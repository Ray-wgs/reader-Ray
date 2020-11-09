import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/login',
    name:'login',
    component: ()=>
    import ('../views/login')
  },{
    path:'/home',
    name:'home',
    component: ()=>
    import ('../views/home')
  },{
    path:'/books',
    name:'books',
    component: ()=>
    import ('../views/books')
  },{
    path:'/categorize',
    name:'categorize',
    component: ()=>
    import ('../views/categorize')
  },{
    path:'/user',
    name:'user',
    component: ()=>
    import ('../views/user')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})
//登录拦截
router.beforeEach((to,from,next)=>{
  const role=window.sessionStorage.getItem('user')
  if(!role && to.path !== '/login'){
    next('/login')
  }else{
    next()
  }
})
export default router
