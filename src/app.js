import { createApp } from 'vue'
import store from './store'
import './app.css'
import { Tabbar, TabbarItem, Navbar, Rate, Calendar } from '@nutui/nutui-taro';
import { IconFont } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

Taro.setStorageSync('token', "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ7XCJ1X2FjY291bnRcIjpcIlwiLFwidV9wYXNzd29yZFwiOlwiXCJ9IiwiY3JlYXRlZCI6MTY5OTI4OTA3MDUxNiwiZXhwIjoxNjk5MjkyNjcwfQ.UuJpNQGl9f6m_aSGkdYVyl2-Sz6vKdaCghjktUSEukqZOj3tVPVOhqsDJti71S0H")
Taro.setStorageSync('child', null)


App.use(store)
App.use(Tabbar).use(TabbarItem).use(IconFont);
App.use(Navbar).use(Rate).use(Calendar);
export default App
