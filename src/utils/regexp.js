const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const passwordReg = /^\w{6,15}$/;
const nameReg = /([\u4e00-\u9fa5]|\w){4,}/gm;

export const verifyEmail = email => {
    return emailReg.test(email);
};

export const verifyPassword = password => {
    return passwordReg.test(password);
};

export const verifyName = name => {
    return nameReg.test(name);
};
