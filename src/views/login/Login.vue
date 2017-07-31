<template>
    <div class="login-container">
        <div class="form">
            <!-- 猫头鹰区域 -->
            <div class="owl-area" v-bind:class="{ 'owl-area-active': isActive }">
                <div class="owl-head"></div>
                <transition name="arm-left">
                    <div class="owl-arm owl-arm-left" v-if="isActive"></div>
                </transition>
                <transition name="arm-right">
                    <div class="owl-arm owl-arm-right" v-if="isActive"></div>
                </transition>
                <transition name="hand-left">
                    <div class="owl-hand owl-hand-left" v-if="!isActive"></div>
                </transition>
                <transition name="hand-right">
                    <div class="owl-hand owl-hand-right" v-if="!isActive"></div>
                </transition>
            </div>
            <!-- 输入框区域 -->
            <div class="input-area">
                <div class="input-box">
                    <img src="../../assets/login/login_input_email.png" alt="email_image" />
                    <input v-model="email" type="text" placeholder="Email" />
                </div>
                <div class="input-box">
                    <img src="../../assets/login/login_input_password.png" alt="password_image" />
                    <input v-model="password" type="text" placeholder="Password" v-on:focus="owlActive" v-on:blur="owlActive" />
                </div>
            </div>
            <!-- 按钮事件区域 -->
            <div class="btn-area">
                <a>Forgot password?</a>
                <router-link to="/signup">Sign Up</router-link>
                <button @click="doLogin">Login</button>
            </div>
        </div>
        <sweet-modal ref="modal" icon="error" hide-close-button blocking overlay-theme="light" modal-theme="light">
            {{alertMessage}}
            <!-- <sweet-button slot="button" color="red" v-on:click="closeExample('darkWithBlockingError')">Press this Button</sweet-button> -->
            <button class="sweet-button bg-blue color-white" slot="button" @click="closeModal">OK</button>
        </sweet-modal>
    </div>
</template>

<script>
// sweet-modal-vue, vodal
import router from '../../router';
import { SweetModal, SweetButton } from 'sweet-modal-vue';
import { verifyEmail, verifyPassword } from '../../utils/regexp';
export default {
    name: 'login',
    data () {
        return {
            isActive: false,
            email: '',
            password: '',
            alertMessage: ''
        }
    },
    components: { SweetModal, SweetButton },
    methods: {
        // 🦉动画
        owlActive: function () {
            this.$data.isActive = !this.$data.isActive;
        },
        // 关闭modal
        closeModal: function () {
            this.$refs.modal.close();
        },
        // 登录操作
        doLogin: function () {
            // TODO: 请求接口获取登录信息
            // TODO: 使用 vuex，存储用户 id，name, email
            if (!verifyEmail(this.$data.email) || !verifyPassword(this.$data.password)) {
                this.$data.alertMessage = '邮箱或密码格式有误';
                this.$refs.modal.open();
                return;
            }
            this.$store.dispatch('login', {email: this.$data.email, password: this.$data.password})
                .then(res => {
                    if (res.success === true) {
                        router.push({ name: 'chatRoom' });
                    } else {
                        this.$data.alertMessage = res.message;
                        this.$refs.modal.open();
                    }
                });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/base.scss';
.login-container {
    width: 100%;
    height: 100%;
    background: url('../../assets/login/login_back.jpg');
    background-size: cover;
    position: relative;
}
.form {
    width: 400px;
    height: 230px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-200px, -115px);
}
.owl-area {
    position: absolute;
    left: 50%;
    top: -100px;
    transform: translateX(-105.5px);
    .owl-head {
        width: 211px;
        height: 108px;
        background-image: url('../../assets/login/login_owl_head.png');
        background-size: cover;
    }
    .owl-hand {
        width: 50px;
        height: 50px;
        background-image: url('../../assets/login/login_owl_hand.png');
        background-size: cover;
        position: absolute;
        bottom: -20px;
    }
    // 设定动画前的场景
    .owl-hand-right {
        right: 0;
    }
    .owl-arm {
        width: 40px;
        height: 36px;
        position: absolute;
        bottom: 8px;
        background-size: 100%;
        background-repeat: no-repeat;
        transition: all 1s;
    }
    .owl-arm-left {
        background-image: url('../../assets/login/login_owl_arm_left.png');
        transform: translateX(52px) rotateX(0deg);
        left: 8px;
    }
    .owl-arm-right {
        background-image: url('../../assets/login/login_owl_arm_right.png');
        transform: translateX(-42px) rotateX(0deg);
        right: 10px;
    }
    .arm-left-enter-active, .arm-left-leave-active，.arm-right-enter-active, .arm-right-leave-active, .hand-left-enter-active, .hand-left-leave-active, .hand-right-enter-active, .hand-right-leave-active {
        transition: all 1s;
    }
    // 设定动画后的场景
    .arm-left-enter, .arm-left-leave-to {
        transform: rotateX(90deg);
        bottom: -8px;
    }
    .arm-right-enter, .arm-right-leave-to {
        transform: rotateX(90deg);
        bottom: -8px;
    }
    .hand-left-enter, .hand-left-leave-to {
        transform: translateX(60px) scale(0.2);
        bottom: 4px;
    }
    .hand-right-enter, .hand-right-leave-to {
        transform: translateX(-52px) scale(0.2);
        bottom: 4px;
    }
}
.input-area {
    height: 100px;
    padding: 30px;
    .input-box {
        position: relative;
        img {
            position: absolute;
            left: 13px;
            top: 10px;
            width: 20px;
            height: 20px;
        }
        input {
            height: 40px;
            width: 100%;
            border-radius: 6px;
            margin-bottom: 10px;
            padding-left: 46px;
            box-sizing: border-box;
            font-size: 14px;
            border: 1px solid #ccc;
        }
        input:focus {
            outline: none;
            border: 1px solid #91BBDD;
            box-shadow: 0px 0px 4px #91BBDD;
        }
    }
}
.btn-area {
    height: 40px;
    padding: 15px 30px;
    text-align: right;
    border-top: 1px solid #ccc;
    background-color: #f7f7f7;
    >a:first-of-type {
        margin-right: 58px;
    }
    a {
        vertical-align: middle;
        line-height: 20px;
        font-size: 14px;
        padding: 6px 12px;
        color: #ccc;
    }
    button {
        width: 60px;
        line-height: 32px;
        background-color: #1B69A1;
        color: #fff;
        border-radius: 6px;
        font-size: 14px;
    }
}
</style>

