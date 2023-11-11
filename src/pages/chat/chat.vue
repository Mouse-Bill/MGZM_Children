<template>
  <view class="page">
    <div class="chat">
      <div class="chat-message">
        <div v-for="(item, index) in chatMessage" :key="index">
          <div v-if="item.send_id !== u_id" class="chat-left">
            <Image class="chat-avatar" :src="item.sender_avatar" />
            <div class="chat-content">
              <div class="chat-content-text">{{ item.content }}</div>
            </div>
          </div>
          <div v-else class="chat-right">
            <Image class="chat-avatar" :src="item.sender_avatar" />
            <div class="chat-content">
              <div class="chat-content-text">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </view>

  <nut-tabbar bottom placeholder safe-area-inset-bottom style="--nut-tabbar-border-top:2px solid #e3e3e3;">
    <div class="chat-input">
      <nut-input v-model="inputValue" placeholder="请输入内容" style="--nut-input-font-size:15pt" />
      <nut-button type="primary" @click="sendMessage">发送</nut-button>
    </div>
  </nut-tabbar>
</template>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
import childrenApi from '../../api/children.js';
import chatApi from '../../api/chat.js';
import Taro from '@tarojs/taro';
import { Image } from '@tarojs/components';

const u_id = 1;
const inputValue = ref("");
var wsIsOpen = false;
const chatMessage = ref([
  {
    send_id: 1,
    sender_avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
    content: "hello",
  },
  {
    send_id: 2,
    sender_avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
    content: "hello too",
  },
]);


const messageBody = {
  u_id: "20011",
  u_to_id: "1",
  content: "hello",
}


const data = {
  toUID: 2,
  Msg: "hello",  
}

function sendMsgViaWS(data){
  Taro.sendSocketMessage({
    data: JSON.stringify(data),
    success: function (res) {
      console.log('发送成功')
    },
    fail: function (res) {
      console.log('发送失败')
    }
  })
}

async function sendMessage() {
  chatMessage.value.push({
    send_id: 1,
    sender_avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
    content: inputValue.value,
  });
  data.Msg = inputValue.value;
  inputValue.value = "";
  if (wsIsOpen){
    sendMsgViaWS(data)
  }else{
    const WSTask = await Taro.connectSocket({
      // url: 'ws://localhost:8080/server/'+Taro.getStorageSync('child').uid,
      url: 'ws://localhost:8080/server/'+'1',
    })
    WSTask.onOpen(function (res) {
      console.log('WebSocket连接已打开！')
      wsIsOpen = true;
      sendMsgViaWS(data)
    })
    WSTask.onMessage(function (res) {
      console.log('收到服务器内容：' + res.data)
      chatMessage.value.push({
        send_id: res.data.toUID,
        sender_avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
        content: JSON.parse(res.data).Msg,
      });
    })
    WSTask.onError(function (res) {
      console.log('WebSocket连接打开失败，请检查！')
    })
    WSTask.onClose(function (res) {
      console.log('WebSocket 已关闭！')
    })

  }

}

</script>

<style>
.chat {
  margin-top: 0%;
  margin-bottom: 0%;
  height: auto
}

.chat-message {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 1%;
}

.chat-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
}

.chat-left .chat-content {
  background-color: #E5E5EA;
  /* background-color: #cacaca; */
}

.chat-right {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 10px;
}

.chat-right .chat-content {
  background-color: #fde57e;
}


.chat-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 3%;
}

.chat-content {
  font: 1.2em sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 3%;
  max-width: 70%;
}
.chat-content-text{
  word-wrap:break-all;
  word-break:break-all;
  max-width: 100%;
}

.chat-input {
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1%;
  padding: 1%;
}
::-webkit-scrollbar {
width: 0;
height: 0;
color: transparent;
}
</style>