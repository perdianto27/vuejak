import homeView from "./components/homeView.vue";
import nasabahView from "./components/nasabahView.vue";
import nasabahCreate from "./components/nasabahCreate.vue";
import nasabahApprove from "./components/nasabahApprove.vue";
import aboutView from "./components/aboutView.vue";
import login from "./components/login.vue";


export default [
    { path: '*', component:login },
    { path: '/nasabah/view', component: nasabahView, name: 'nasabahView' },
    { path: '/nasabah/create', component: nasabahCreate, name: 'nasabahCreate' },
    { path: '/nasabah/approve/:id', component: nasabahApprove, name: 'nasabahApprove' },
    { path: '/home', component: homeView, name: 'homeView' },    
    { path: '/about', component: aboutView, name: 'aboutView' },
    { path: '/login', component: login, name: 'login' },    
    

]