import Vue from 'vue';
import Home from "@/components/Home";
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }, ],
});
