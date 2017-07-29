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
    watch: {
        '$router': 'checkLogin'
    },
    sockets: {
        connect: function () {
            console.log('socket connected');
        }
    },
    created () {
        // 打开页面的时候检测登录状态
        this.checkLogin();
    },
    methods: {
        checkLogin: function () {
            // 检测本地是否存在 id cookie
            if (this.getCookie('id')) {
                this.$router.push('/');
            } else {
                this.$router.push('/login');
            }
        },
        getCookie: function (name) {
            return window.localStorage.getItem(name);
        }
    }
});
// TODO:监测路由变化，用户打开页面时判断登录状态
