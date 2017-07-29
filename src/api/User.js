// 用户相关的网络请求
import Api from './Api';
import fetch from '../utils/fetch';

// 登录
export function loginByEmail (email, password) {
    const data = {
        email,
        password
    };
    return fetch({
        url: Api.login,
        method: 'post',
        data
    });
};

// 注册
export function signupByEmail (name, email, password) {
    const data = {
        name,
        email,
        password
    };
    return fetch({
        url: Api.signup,
        method: 'post',
        data
    });
};
