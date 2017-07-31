<template>
    <div class="input">
        <div class="input-box">
            <input v-model="val" placeholder="Type your message here..." />
            <button @click="clickButton()">SEND</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            val: ''
        };
    },
    props: ['alert'],
    name: 'input',
    methods: {
        clickButton: function () {
            if (this.$data.val.length <= 0) {
                this.alert('消息内容不能为空');
                return;
            }
            let nowTime = new Date();
            let message = {
                ...this.$store.state.user,
                msg: this.$data.val,
                time: `${nowTime.getHours()}:${nowTime.getMinutes()}`
            };
            // $socket is socket.io-client instance
            this.$socket.emit('chat', message);
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    height: 100px;
    padding: 20px 20px;
}
.input-box {
    background-color: #fff;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    input {
        width: 100%;
        line-height: 60px;
        padding: 0 110px 0 20px;
        box-sizing: border-box;
        &:focus {
            outline: none;
        }
    }
    button {
        position: absolute;
        top: 50%;
        right: 10px;
        width: 80px;
        height: 40px;
        transform: translateY(-20px);
        color: #fff;
        border-radius: 10px;
        background-color: #4c5f7d;
    }
}
</style>

