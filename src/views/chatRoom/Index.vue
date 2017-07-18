<template>
    <div class="chat-room-container">
        <div class="chat-box">
            <!-- 背景 -->
            <div class="back-top"></div>
            <div class="back-bottom"></div>
            <!-- 内容 -->
            <div class="chat-content">
                <div class="slide-left">
                    <!-- 个人信息 -->
                    <div class="user-message ver-center">
                        <img class="avator" src="../../assets/chat_room/user1.jpg"/>
                        <div class="message-text">
                            <h3>Hayden</h3>
                            <p>brooklyn1984@qq.com</p>
                        </div>
                    </div>
                    <!-- 总消息 -->
                    <div class="message-count">
                        Recent Messages：
                        <span>4 new</span>
                    </div>
                    <!-- 通讯录 -->
                    <ul class="mail-list">
                        <li class="mail-active ver-center">
                            <img class="avator" src="../../assets/chat_room/room1.jpg"/>
                            <div class="message-text">
                                <h3>Room1</h3>
                                <p>17:00</p>
                            </div>
                        </li>
                        <li>
                            <img class="avator" src="../../assets/chat_room/room2.jpg"/>
                            <div class="message-text">
                                <h3>Room2</h3>
                                <p>09:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="dialog-box">
                    <message></message>
                    <input-box></input-box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import message from '../../components/chatRoom/Message';
import inputBox from '../../components/chatRoom/Input';
export default {
    name: 'chatRoom',
    data () {
        return {
            isActive: true
        }
    },
    components: {
        message,
        inputBox
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/base.scss';
div {
    box-sizing: border-box;
}
// 头像样式
.avator {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 0 10px 0 18px;
    // padding: 2px;
    // background-color: #fff;
    vertical-align: middle;
}
// 介绍性文字信息样式
.message-text {
    display: inline-block;
    color: #ddd;
    width: 100px;
    font-size: 13px;
    vertical-align: middle;
    h3 {
        margin: 13px 0;
    }
}

.chat-room-container {
    width: 100%;
    height: 100%;
    background: url('../../assets/chat_room/chat_room_back.jpg');
    background-size: cover;
    position: relative;
}
.chat-box {
    width: 70%;
    height: 80%;
    max-width: 1000px;
    max-height: 800px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    .back-top {
        height: 80%;
    }
    .back-bottom {
        height: 20%;
        background-color: #666;
    }
}
.chat-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    .slide-left {
        width: 250px;
        height: 100%;
        // background-color: rebeccapurple;
    }
    .message-count {
        line-height: 50px;
        color: #fff;
        font-size: 12px;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0 20px;
        span {
            float: right;
            width: 50px;
            line-height: 20px;
            background-color: #a00b25;
            text-align: center;
            border-radius: 4px;
            margin-top: 15px;
        }
    }
    .dialog-box {
        width: 80%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        top: -40px;
        left: 250px;
    }
}
.slide-left {
    .user-message {
        height: 100px;
        background-color: rgba(0, 0, 0, 0.2);
    }
    .mail-list {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        li {
            padding: 10px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .mail-active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
}

.dialog-box {
    display: flex;
    flex-direction: column;
}
</style>

