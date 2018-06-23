import Vue from 'vue';
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Originals from "@/pages/Originals";
import Router from 'vue-router';
import Callback from '@/components/Callback';
import { requireAuth } from '../../utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      beforeEnter: requireAuth,
      component: Profile,
    },
    {
      path: '/originals',
      name: 'Originals',
      component: Originals,
    },
    {
      path: '/callback',
      component: Callback,
    },
  ],
});
