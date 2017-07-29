<template>
    <div class="container flex center">
        <div class="flex flex-row">
            <div class="left-area">Do it first, Do it right, Do it better</div>
            <div class="right-area">
                <!-- 输入框区域 -->
                <div class="input-area">
                    <h1>Faiz</h1>
                    <div class="input-box">
                        <img src="../../assets/login/login_input_name.png" alt="name_image" />
                        <input v-model="name" type="text" placeholder="Name" />
                    </div>
                    <div class="input-box">
                        <img src="../../assets/login/login_input_email.png" alt="email_image" />
                        <input v-model="email" type="text" placeholder="Email" />
                    </div>
                    <div class="input-box">
                        <img src="../../assets/login/login_input_password.png" alt="password_image" />
                        <input v-model="password" type="text" placeholder="Password" />
                    </div>
                </div>
                <button class="bg-blue" @click="doSignup">Sign Up</button>
            </div>
        </div>
        <sweet-modal ref="modal" icon="error" hide-close-button blocking overlay-theme="light" modal-theme="light">
            {{alertMessage}}
            <button class="sweet-button bg-blue color-white" slot="button" @click="closeModal">OK</button>
        </sweet-modal>
    </div>
</template>

<script>
import router from '../../router';
import { SweetModal, SweetButton } from 'sweet-modal-vue';
export default {
    data () {
        return {
            name: '',
            email: '',
            password: '',
            alertMessage: ''
        };
    },
    components: { SweetModal, SweetButton },
    methods: {
        // 关闭modal
        closeModal: function () {
            this.$refs.modal.close();
        },
        doSignup () {
            this.$store.dispatch('signup', { name: this.$data.name, email: this.$data.email, password: this.$data.password })
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
.container {
    width: 100%;
    height: 100%;
    background: url('../../assets/login/signup_back.jpg');
    background-size: cover;
    position: relative;
}
.left-area {
    width: 300px;
    height: 300px;
    background-color: rgba( 255, 255, 255, 0.3);
}
.right-area {
    height: 300px;
    padding: 30px 30px 0 30px;
    box-sizing: border-box;
    background-color: rgba( 255, 255, 255, 0.9);
    h1 {
        text-align: center;
        color: #666;
        margin-bottom: 10px;
    }
    button {
        width: 100%;
        height: 40px;
        color: #fff;
    }
}
.input-area {
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
</style>

