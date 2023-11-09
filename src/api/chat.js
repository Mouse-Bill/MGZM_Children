import http from '../utils/http/request.js';
import Taro from '@tarojs/taro';



const uploadChatContent = (data) => {
  return http.post('/uploadChatContent', data);
};


function sendSocketMessage(msg) {
  if (socketOpen) {
    Taro.sendSocketMessage({
      data: msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}

const wsTest = (data) => {
  let socketOpen = false
  const socketMsgQueue = []
  Taro.connectSocket({
    url: 'ws://localhost:8080/socket/server/1'
  })
  Taro.onSocketOpen(function (res) {
    socketOpen = true
    for (let i = 0; i < socketMsgQueue.length; i++) {
      sendSocketMessage(socketMsgQueue[i])
    }
    socketMsgQueue = []
  })
}


export default {
  uploadChatContent,
  wsTest
};

