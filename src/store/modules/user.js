import { loginByEmail, signupByEmail } from '../../api/User';

const state = {
    user: {
        email: JSON.parse(window.localStorage.getItem('email')),
        name: JSON.parse(window.localStorage.getItem('name')),
        id: JSON.parse(window.localStorage.getItem('id'))
    }
};

const mutations = {
    // 注册
    SIGN_IN: (state, user) => {
        window.localStorage.setItem('email', JSON.stringify(user.email));
        window.localStorage.setItem('name', JSON.stringify(user.name));
        window.localStorage.setItem('id', JSON.stringify(user.id));
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
    signup: ({ commit }, user) => {
        return new Promise((resolve, reject) => {
            signupByEmail(user.name, user.email, user.password)
            .then(res => {
                const data = {
                    ...res.data,
                    name: user.name,
                    email: user.email
                };
                if (data.success === true) {
                    commit('SIGN_IN', data);
                } else {
                    console.log(data.message);
                }
                resolve(data);
            });
        });
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
