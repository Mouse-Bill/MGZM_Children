import http from '../utils/http/http.js';
import Taro from '@tarojs/taro';

// 异步请求
const childrenLogin = async (data) => {
  try {
    const res = await http.post('/ChildrenLogin', data).then((res) => {
      console.log(res);
      if (res.status === 200 && res.data.pass) {
        Taro.setStorageSync('token', res.data.token);
        Taro.setStorageSync('child', res.data.child);
        console.log("pass");
      }
      console.log(Taro.getStorageSync('token'));
    });
    return true;
  } catch (error) {
    // 处理错误
    console.error(error);
    throw error; // 可以选择抛出错误以供调用者处理
  }
};


export default {
  childrenLogin
};
