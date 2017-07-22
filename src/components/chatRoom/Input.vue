<template>
    <div class="input">
        <div class="input-box">
            <input placeholder="Type your message here..." />
            <button @click="clickButton(123)">SEND</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'input',
    methods: {
        clickButton: function (val) {
            console.log('聊天');
            // $socket is socket.io-client instance
            this.$socket.emit('chat', val);
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

