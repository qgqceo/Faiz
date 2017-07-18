const state = {
    user: {
        mobile: '',
        name: ''
    }
};

const mutations = {
    SIGN_IN: (state, user) => {
        window.localStorage.setItem('user_mobile', JSON.stringify(user.mobile));
        window.localStorage.setItem('user_name', JSON.stringify(user.name));
        state.user = Object.assign({}, user);
    }
}

const actions = {
    signin: ({ commit }, user) => {
        commit('SIGN_IN', user);
    }
};

export default {
    state,
    mutations,
    actions
};
