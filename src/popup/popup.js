import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';
// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js';

import axios from 'axios';
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App';

import store from './store/index';
import router from './router';

const baseUrl = 'http://127.0.0.1:3000';
const instance = axios.create({
  baseURL: baseUrl,
});

global.browser = require('webextension-polyfill');

Vue.prototype.$browser = global.browser;

Vue.use(Loading);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

export default instance;
