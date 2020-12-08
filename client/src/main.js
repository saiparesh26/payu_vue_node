import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/sr.vue';
import Register from './components/register.vue';
import Login from './components/login.vue';
import guardRoute from './guard';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home, name: 'Home', beforeEnter: guardRoute },
  { path: '/', component: Login, name: 'Login' },
  { path: '/register', component: Register, name: 'Register' },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
