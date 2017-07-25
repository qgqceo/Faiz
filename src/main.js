// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueSocketio from 'vue-socket.io';
import Vuex from 'vuex';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueSocketio, 'http://127.0.0.1:7001/');
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
    sockets: {
        connect: function () {
            console.log('socket connected');
        }
    }
});
