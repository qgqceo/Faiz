<template>
    <!-- 消息框 -->
    <div class="message">
        <ul>
            <li v-for="(item, index) in list" v-bind:key="index" :class="['message-item', {'me': item.user_id === 0}]">
                <img class="avatar" :src="item.img">
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
            list: [{
                user_id: 1,
                img: user1,
                msg: 'Hello Hayden...',
                time: '09:00'
            }, {
                user_id: 0,
                img: user2,
                msg: 'I\'m Hayden',
                time: '09:03'
            }]
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

