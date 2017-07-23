const state = {
    user: {
        email: '',
        name: '',
        id: ''
    }
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
        commit('LOGIN', user);
    }
};

export default {
    state,
    mutations,
    actions
};
