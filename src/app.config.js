export default defineAppConfig({
  pages: [
    'pages/login/login',
    'pages/index/index',
    'pages/tasks/tasks',
    'pages/community/community',
    'pages/mall/mall',
    'pages/mine/mine',
    'pages/goods/goods',
    'pages/taskupload/taskupload',
    'pages/answerSheet/answerSheet',
    'pages/pointSort/pointSort',
    'pages/reviewAnswerSheet/reviewAnswerSheet',
    'pages/chat/chat',
    'pages/searchGoods/searchGoods',
  ],
  tabBar: {
    custom: true,
    list: [
      {
        // iconPath: 'resource/latest.png',
        // selectedIconPath: 'resource/lastest_on.png',
        pagePath: 'pages/tasks/tasks',
        text: '任务',
      },
      {
        // iconPath: 'resource/hotest.png',
        // selectedIconPath: 'resource/hotest_on.png',
        pagePath: 'pages/mall/mall',
        text: '商城',
      },
      {
        // iconPath: 'resource/hotest.png',
        // selectedIconPath: 'resource/hotest_on.png',
        pagePath: 'pages/community/community',
        text: '社群',
      },
      {
        // iconPath: 'resource/hotest.png',
        // selectedIconPath: 'resource/hotest_on.png',
        pagePath: 'pages/mine/mine',
        text: '我的',
      },
      // {
      //   pagePath: 'pages/goods/goods',
      //   text: '商品详情',
      // },
      // {
      //   // iconPath: 'resource/hotest.png',
      //   // selectedIconPath: 'resource/hotest_on.png',
      //   pagePath: 'pages/index/index',
      //   text: '首页',
      // }
    ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
