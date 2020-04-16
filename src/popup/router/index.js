import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

/* Reload extension when you modify manifest.json */
export default new VueRouter({
  routes,
});
