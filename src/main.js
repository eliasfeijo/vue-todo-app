import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
