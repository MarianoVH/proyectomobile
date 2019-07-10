import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TeamsInfo from './views/TeamsInfo.vue'
import GameInfo from './views/GameInfo.vue' 




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/teamsinfo',
      name: 'teamsinfo',
      component: TeamsInfo
    },
    {
      path: '/gameinfo',
      name: 'gameinfo',
      component: GameInfo
    }  
  ]
})
