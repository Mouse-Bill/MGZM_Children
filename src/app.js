import { createApp } from 'vue'
import store from './store'
import './app.css'
import { Tabbar, TabbarItem, Navbar, Rate } from '@nutui/nutui-taro';
import { IconFont } from '@nutui/icons-vue-taro';

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)
App.use(Tabbar).use(TabbarItem).use(IconFont);
App.use(Navbar).use(Rate);
export default App
