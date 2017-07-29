import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login/Login';
import Signup from '@/views/login/signup';
import ChatRoom from '@/views/chatRoom';

Vue.use(Router)

export default new Router({
    mode: 'history',
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
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }
    ]
})
