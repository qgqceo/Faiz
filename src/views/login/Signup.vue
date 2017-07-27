<template>
    <div class="container">
        <div>
            <div></div>
            <!-- 输入框区域 -->
            <div class="input-area">
                <div class="input-box">
                    <img src="../../assets/login/login_input_name.png" alt="name_image" />
                    <input v-model="name" type="text" placeholder="Password" />
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
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            email: '',
            password: ''
        };
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    background: url('../../assets/login/signup_back.jpg');
    background-size: cover;
    position: relative
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
</style>

