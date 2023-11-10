import http from '../utils/http/request.js';
import Taro from '@tarojs/taro';



const uploadChatContent = (data) => {
  return http.post('/uploadChatContent', data);
};


function sendSocketMessage(socketOpen, msg) {
  if (socketOpen) {
    Taro.sendSocketMessage({
      data: msg
    })
  } else {
    socketMsgQueue.push(msg)
  }
}

const openWS = async () => {
  await Taro.connectSocket({
    url: 'ws://localhost:8080/server/'+Taro.getStorageSync('child').uid,
    success: function (res) {
      console.log('WebSocket连接创建', res)
      return true
    },
    fail: function (err) {
      console.log(err)
      return false
    }
  })
}

const closeWS = async () => {
  await Taro.closeSocket({
    success: function (res) {
      console.log('WebSocket连接关闭', res)
      return true
    },
    fail: function (err) {
      console.log(err)
      return false
    }
  })
}

const sendWSMsg = async (data) => {
  await Taro.sendSocketMessage({
    data: JSON.stringify(data),
    success: function (res) {
      console.log('WebSocket发送消息', res)
      return true
    },
    fail: function (err) {
      console.log(err)
      return false
    }
  })
}

const onWSMsg = async () => {
  await Taro.onSocketMessage(function (res) {
    console.log('收到服务器内容：' + res.data)
    return res.data
  })
}

// const wsTest = (data) => {
//   let socketOpen = false
//   const socketMsgQueue = []
//   socketMsgQueue.push(JSON.stringify(data))
//   Taro.connectSocket({
//     url: 'ws://localhost:8080/server/1'
//   })
//   Taro.onSocketOpen(function (res) {
//     socketOpen = true
//     for (let i = 0; i < socketMsgQueue.length; i++) {
//       sendSocketMessage(socketOpen, socketMsgQueue[i])
//     }
//     socketMsgQueue = []
//   })
//   Taro.onSocketMessage(function (res) {
//     console.log('收到服务器内容：' + res.data)
//     return res.data
//   })
// }


export default {
  uploadChatContent,
  openWS,
  closeWS,
  sendWSMsg,
  onWSMsg
};

