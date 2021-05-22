import {createRouter,createWebHistory} from 'vue-router'
import Vue from "vue"
const Classify=()=>import("views/Classify/Classify")
const Home=()=>import("views/Home/Home")
const Profile=()=>import("views/Profile/Profile")
const Shopping=()=>import("views/Shopping/Shopping")
const routes=[
      {
        path:"",
        redirect:"/Home"
    },
{
    path:"/Classify",
    component:Classify
},
{
     path:"/Home",
    component:Home
},
{
     path:"/Profile",
    component:Profile
},
{
     path:"/Shopping",
    component:Shopping
},
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router