import Taro from '@tarojs/taro';

let Ajax = async (url, method, data) => {
  const baseUrl = 'http://localhost:8080';
  var header = {
    'content-type': 'application/json',
  }
  
  // 请求拦截处理写在这里
  // Taro.showLoading({
  //   title: '加载中',
  //   icon: 'loading',
  //   mask: true
  // });

  await Taro.getStorage({
    key: 'token',
    success: function (res) {
      // console.log("token param", res);
      if (res.data !== null) {
        header.token = res.data;
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

  return new Promise((resolve, reject) => {
    console.log("request header", header);
    Taro.request({
      url: baseUrl + url,
      data: data,
      method: method,
      header: header,
      success: (res) => {
        // 响应拦截处理写在这里
        if (res.statusCode == 200) {// 确认用户登录，而不仅仅是有sessionId，还需要有登录的信息用户openId
          //   let loginData = Taro.getStorageSync('loginData');
          //   if(loginData){
          //     loginData = JSON.parse(loginData)
          //   }
          //   if(url.indexOf('account')<0 && !loginData.openId){
          //     Taro.showModal({
          //       title:'提示',
          //       content:'请进行登录。',
          //       success:(res)=>{
          //         if(res.confirm){
          //           Taro.clearStorageSync();
          //           Taro.reLaunch({
          //             url:'/login/index'
          //           });
          //           return;
          //         }
          //       }
          //     })
          // }
          return resolve(res);
        } else if (res.statusCode == 404) {
          Toast('404 请求页面不存在');
        } else if (res.statusCode == 408) {
          Toast('请求超时');
        } else if (res.statusCode == 500) {
          Toast('服务器错误')
        } else if (res.statusCode == 0) {
          Toast('网络连接超时')
        } else if (res.statusCode == 501) {
          Taro.showModal({
            title:'提示',
            content:'请进行登录。',
            success:(res)=>{
              if(res.confirm){
                Taro.clearStorageSync();
                Taro.reLaunch({
                  url:'/pages/login/login'
                });
                return;
              }
            }
          })
        }
        reject(res);
      },
      fail: (error) => {
        Model('服务器错误，请稍候再试 ！');
        reject(error);
        return;
      },
      complete: () => {
        // Taro.hideLoading();
      }
    })
  })
}

//将sessionId通过请求头传递给后台，用于判断是否登录以及登录是否过期超时
let get = (url, data) => {
  return Ajax(url, 'GET', data);
}

let post = (url, data) => {
  return Ajax(url, 'POST', data);
}

let Toast = (msg) => {
  Taro.showToast({
    title: msg,
    duration: 3000,
    icon: 'none',
    mask:true
  })
}

let Model = (msg) => {
  Taro.showModal({
    title: '提示',
    content: msg,
    showCancel: false
  })
}

export default {get, post}
