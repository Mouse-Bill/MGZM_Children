import { createApp } from 'vue'
import store from './store'
import { useStore } from 'vuex'
import './app.css'
import { Tabbar, TabbarItem, Navbar, Rate, Calendar } from '@nutui/nutui-taro';
import { IconFont } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

Taro.setStorageSync('token', 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ7XCJ1X2FjY291bnRcIjpcIlwiLFwidV9wYXNzd29yZFwiOlwiXCJ9IiwiY3JlYXRlZCI6MTY5OTYwMjY5MDQ2NCwiZXhwIjoxNjk5NjA2MjkwfQ.uA8hlFHk1nTfpDzHNb3VFrGUvj5Lsc0GZUbS0cTBMXEik4RDLglMLu184pndc7Jw')
Taro.setStorageSync('child', null)
// eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ7XCJ1X2FjY291bnRcI…lJJ7zqpVTT4P0uC8LhT752C739UQ-Lud7hUW5___oJ4s8qTlE


App.use(store)
App.use(Tabbar).use(TabbarItem).use(IconFont);
App.use(Navbar).use(Rate).use(Calendar);
export default App
