<template>
    <!-- 消息框 -->
    <div class="message">
        <ul>
            <li v-for="(item, index) in list" v-bind:key="index" v-bind:class="{'me': item.id === id}">
                <img class="avatar" :src="item.id === id ? user2 : user1">
                <p>{{item.msg}}</p>
                <span>{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import user1 from '../../assets/chat_room/user1.jpg';
import user2 from '../../assets/chat_room/user2.jpg';
export default {
    name: 'message',
    data () {
        return {
            user1: user1,
            user2: user2,
            id: this.$store.state.user.id,
            list: [{
                email: 'brooklyn1984@qq.com', name: 'Hayden', id: '1', msg: 'nihao', time: '23:51'
            }]
        }
    },
    computed: {
        initId: function () {
            return parseInt(this.$store.state.user.id);
        }
    },
    created: function () {
        this.$options.sockets.chat = (data) => {
            console.log('组件监听', data);
            this.$data.list.push(data);
        }
    }
}
</script>

<style lang="scss" scoped>
.message {
    display: flex;
    flex: 1;
    padding: 30px 20px;
}
ul {
    width: 100%;
}
li {
    display: flex;
    flex: 1;
    margin-top: 4px;
}
.avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
}
p {
    display: inline-block;
    max-width: 400px;
    background-color: #959591;
    padding: 10px 20px;
    color: #fff;
    border-radius: 10px;
    margin: 0;
    vertical-align: top;
    font-size: 14px;
    margin: 0 10px;
}
span {
    vertical-align: top;
    display: inline-block;
    line-height: 40px;
    font-size: 12px;
    color: #777571;
    margin-left: 6px;
}
.me {
    flex-direction: row-reverse;
    p {
        background-color: #4c5f7d;
    }
}
</style>

