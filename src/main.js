import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)
const router = new VueRouter({
  mode:"history",
  routes: [
  //   {
  //     path:'/',
  //     components: require ('./components/menu/menu.vue'),
  //     name:"menu",
  //     meta : {
  //         requiresAuth:true
  //     }
  // },


    {
        path:'/',
        components: require ('./components/pages/accueil.vue'),
        name:"accueil",
        meta : {
            requiresAuth:true,
            reload: true
        },
    },

    {
      path:'/1',
      components: require ('./components/pages/projet1.vue'),
      name:"projet1",
      meta : {
          requiresAuth:true
      }
  },

  {
    path:'/2',
    components: require ('./components/pages/projet2.vue'),
    name:"projet2",
    meta : {
        requiresAuth:true
    }
},

{
  path:'/3',
  components: require ('./components/pages/projet3.vue'),
  name:"projet3",
  meta : {
      requiresAuth:true
  }
} ,
{
  path:'/4',
  components: require ('./components/pages/projet4.vue'),
  name:"projet4",
  meta : {
      requiresAuth:true
  }
} 
],
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
