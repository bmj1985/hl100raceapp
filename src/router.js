import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import Access from '@/views/Access'
import RunnerCheckIn from '@/views/RunnerCheckIn'
import PickAidStation from '@/views/PickAidStation'
import AidStation from '@/views/AidStation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/runnercheckin',
      name: 'RunnerCheckIn',
      component: RunnerCheckIn,
    },
    {
      path: '/access',
      name: 'Access',
      component: Access,
    },
    {
      path: '/pick-aid-station',
      name: 'PickAidStation',
      component: PickAidStation,
    },
    {
      path: '/aid-station/:code',
      name: 'AidStation',
      component: AidStation,
    },
  ],
})
