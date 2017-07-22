// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(VueSocketio, 'http://127.0.0.1:7001/')

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
        customEmit: function (val) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        },
        res: function (val) {
            console.log('接收到服务端消息', val);
        }
    }
})
