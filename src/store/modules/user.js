import { loginByEmail } from '../../api/User';

const state = {
    email: window.localStorage.getItem('email'),
    name: window.localStorage.getItem('name'),
    id: window.localStorage.getItem('id')
};

const mutations = {
    // 注册
    SIGN_IN: (state, user) => {
        window.localStorage.setItem('user_mobile', JSON.stringify(user.mobile));
        window.localStorage.setItem('user_name', JSON.stringify(user.name));
        state.user = Object.assign({}, user);
    },
    // 登录
    LOGIN: (state, user) => {
        window.localStorage.setItem('email', JSON.stringify(user.email));
        window.localStorage.setItem('name', JSON.stringify(user.name));
        window.localStorage.setItem('id', JSON.stringify(user.id));
        state.user = Object.assign({}, user);
    }
}

const actions = {
    // 注册
    signin: ({ commit }, user) => {
        commit('SIGN_IN', user);
    },
    // 登录
    login: ({ commit }, user) => {
        return new Promise((resolve, reject) => {
            loginByEmail(user.email, user.password)
            .then(res => {
                const data = {
                    ...res.data,
                    email: user.email
                };
                if (data.success === true) {
                    commit('LOGIN', data);
                } else {
                    console.log(data.message);
                }
                resolve(data);
            });
        });
    }
};

const getters = {
    getUser (state) {
        return state;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
