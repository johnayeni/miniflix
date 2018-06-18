import Vue from 'vue';
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Router from 'vue-router';

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
      component: Profile,
    },
  ],
});
