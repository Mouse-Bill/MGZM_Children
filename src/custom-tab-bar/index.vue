<template>
  <nut-tabbar unactive-color="#7d7e80" active-color="#edc672" v-model="selected" v-if="isVisible">
    <nut-tabbar-item v-for="(item, index) in list" :tab-title="item.text" :icon="item.icon" @tap="tabSwitch(index,item.pagePath)"> </nut-tabbar-item>
  </nut-tabbar>
</template>



<script setup>
import Taro from '@tarojs/taro'
import { h, ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Order, Dshop, Comment, My2 } from '@nutui/icons-vue-taro';
import { IconFont } from '@nutui/icons-vue-taro';

const store = useStore()
const selected = computed(() => store.state.selected)

const isVisible = true


const list = [
  {
    pagePath: '/pages/tasks/tasks',
    // selectedIconPath: '../images/tabbar_cate_on.png',
    // iconPath: '../images/tabbar_cate_on.png',
    text: '任务',
    icon: h(Order)
  },
  {
    pagePath: '/pages/mall/mall',
    // selectedIconPath: '../images/tabbar_cate_on.png',
    // iconPath: '../images/tabbar_cate.png',
    text: '商城',
    icon: h(Dshop)
  },
  {
    pagePath: '/pages/community/community',
    // selectedIconPath: '../images/tabbar_cart_on.png',
    // iconPath: '../images/tabbar_cart.png',
    text: '社群',
    icon: h(Comment)
  },
  {
    pagePath: '/pages/mine/mine',
    // selectedIconPath: '../images/tabbar_my_on.png',
    // iconPath: '../images/tabbar_my.png',
    text: '我的',
    icon: h(My2)
  }
]

function tabSwitch(index, url) {
  setSelected(index)
  Taro.switchTab({ url })
}

function setSelected(index) {
  store.dispatch('setSelected', index)
}
</script>

<script>
// 只支持 Options API 写法，不支持 <script setup>
export default {
  options: {
    addGlobalClass: true,
  },
}
</script>