// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'bulma/css/bulma.css';
import App from './App';
import './assets/css/main.css'
import SocialSharing from 'vue-social-sharing';
import router from "./router";


Vue.config.productionTip = false;

Vue.use(SocialSharing);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
