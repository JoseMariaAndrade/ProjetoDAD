
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import Wallets from './components/wallets/wallet.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);
Vue.component('wallets', require('./components/wallets/wallet.vue').default);
import Login from './components/auth/login';
Vue.component('login',Login);
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);


import Users from './components/users/user';
Vue.component('user',Users);
import Categories from './components/category/category';
Vue.component('category', Categories);
const routes = [
    {
        path: '/categories', component:Categories
    },
    {
        path: '/users',component:Users
    },{
        path:'/',component:Login
    }


];

const router = new VueRouter({routes});

const app = new Vue({

    el: '#app',
    router,

    }
);
