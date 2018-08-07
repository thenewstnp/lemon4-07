import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Tv from '@/views/Tv'
import Movie from '@/views/Movie'
import Show from '@/views/Show'
import Comic from '@/views/Comic'
import Shaoer from '@/views/Shaoer'
import Amuse from '@/views/Amuse'

import Notfind from '@/components/Notfind'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      alias:"/index.html"
    },
    {
      path: '/tv',
      name: 'Tv',
      component: Tv
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/comic',
      name: 'Comic',
      component: Comic
    },
    {
      path: '/channel/shaoer',
      name: 'Shaoer',
      component: Shaoer
    },
    {
      path: '/channel/amuse',
      name: 'Amuse',
      component: Amuse
    },
    {
      path: '/index.html',
      redirect:'/'
    },
    {
      path: '*',
      name: 'Notfind',
      component: Notfind
    }
  ]
})
