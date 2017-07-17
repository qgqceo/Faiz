import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login/Login';
import ChatRoom from '@/views/chatRoom';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'chatRoom',
            component: ChatRoom
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
