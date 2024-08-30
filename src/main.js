import Vue from 'vue'
import App from './App.vue'

import JQuery from 'jquery'
global.JQuery = JQuery
global.$ = JQuery
let bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css' 

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import VueRouter from 'vue-router'
import Routes from './routes'

import {ClientTable, Event} from 'vue-tables-2';

Vue.use(Event);
Vue.use(ClientTable, {}, false, 'bootstrap4');

Vue.use(VueRouter);

Vue.component('icon', Icon)


Vue.config.productionTip = false

// Register routes
const router = new VueRouter({
  routes : Routes,
  mode :'history'
});

const openRoutes = ['login'];

router.beforeEach((to, from, next) => {
  if(openRoutes.includes(to.name)){
    next()
  }else if(localStorage.getItem('token') == 'vuejak'){
    next()
  }else{
    next({ name: 'login' })
  }
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})




