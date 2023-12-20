import { createRouter, createWebHistory } from 'vue-router'
import CochesList from '../views/Coaches/CochesList.vue'
import CoachDetail from '../views/Coaches/CoachDetail.vue'
import ContactCoach from '../views/Requests/ContactCoach.vue'
import CoachRegisteriation from '../views/Coaches/CoachRegisteriation.vue'
import RequestsReceive from '../views/Requests/RequestsReceive.vue'

const routes = [
  {path: '/', name: 'coaches', redirect: "/coaches"},
  {
    path: '/coaches',
    name: 'coaches',
    component: CochesList
  },
  {
    path: '/coaches/:id',
    name: 'coach',
    component: CoachDetail,
    children: [
      {path: 'contact', name: 'contact', component: ContactCoach},
    ]
  },
{
    path: '/register',
    name: 'register',
    component: CoachRegisteriation
  },
  {
    path: '/requests',
    name: 'requests',
    component: RequestsReceive
  },
  {
    path: '/:notFound(.*)',
    name: 'notFound',
    component: null
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
