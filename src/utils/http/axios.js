import axios from 'axios';
import Taro from '@tarojs/taro';
import TaroAdapter from './adapter';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 50000,
});


// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    Taro.getStorage({
      key: 'token',
      success: function (res) {
        console.log("token param", res);
        if (res.data !== null) {
          config.headers.token = res.data;
          instance.defaults.adapter = TaroAdapter(config);
        } else {
          const pages = Taro.getCurrentPages();
          const currentPage = pages[pages.length - 1];
          if (currentPage.route !== 'pages/login/login') {
            Taro.redirectTo({
              url: '/pages/login/login',
            });
          }
        }
      }
    })
    console.log("config done");
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },

);

export default instance;
