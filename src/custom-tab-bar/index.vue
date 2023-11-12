<template>
  <div style="background-color: #ffff;">
    <nut-tabbar unactive-color="#7d7e80" active-color="#edc672" :selected.sync="selected"
      style="padding-bottom: 2%;">
      <nut-tabbar-item v-for="(item, index) in list" :tab-title="item.text" :icon="item.icon"
        @tap="tabSwitch(index, item.pagePath)"> </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>



<script setup>
import Taro from '@tarojs/taro'
import { h, ref } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Order, Dshop, Comment, My2 } from '@nutui/icons-vue-taro';
import { IconFont } from '@nutui/icons-vue-taro';

const store = useStore()
const selected = ref(
  computed(() => store.state.selected)

)


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
    pagePath: '/pages/chat/chat',
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
  if (url === '/pages/chat/chat') {
    Taro.navigateTo({ url })
    return
  }
  Taro.switchTab({ url })
}

function setSelected(index) {
  store.dispatch('setSelected', index)
}

</script>

<script>
// 只支持 Options API 写法，不支持 <script setup>
// import Taro from '@tarojs/taro'
// import { h, ref, reactive } from 'vue'
// import { computed } from 'vue'
// import { useStore } from 'vuex'
// import { Order, Dshop, Comment, My2 } from '@nutui/icons-vue-taro';
// import { IconFont } from '@nutui/icons-vue-taro';
export default {
  options: {
    addGlobalClass: true,
  },
  // data() {
  //   return {
  //     list: [
  //       {
  //         pagePath: '/pages/tasks/tasks',
  //         // selectedIconPath: '../images/tabbar_cate_on.png',
  //         // iconPath: '../images/tabbar_cate_on.png',
  //         text: '任务',
  //         icon: h(Order)
  //       },
  //       {
  //         pagePath: '/pages/mall/mall',
  //         // selectedIconPath: '../images/tabbar_cate_on.png',
  //         // iconPath: '../images/tabbar_cate.png',
  //         text: '商城',
  //         icon: h(Dshop)
  //       },
  //       {
  //         pagePath: '/pages/chat/chat',
  //         // selectedIconPath: '../images/tabbar_cart_on.png',
  //         // iconPath: '../images/tabbar_cart.png',
  //         text: '社群',
  //         icon: h(Comment)
  //       },
  //       {
  //         pagePath: '/pages/mine/mine',
  //         // selectedIconPath: '../images/tabbar_my_on.png',
  //         // iconPath: '../images/tabbar_my.png',
  //         text: '我的',
  //         icon: h(My2)
  //       }
  //     ]
  //   }
  // },
  // methods: {
  //   tabSwitch(index, url) {
  //     // this.selected = index
      
  //     console.log("selected p",this.selected);
  //     this.setSelected(index)
  //     console.log("selected a",this.selected);
  //     if (url === '/pages/chat/chat') {
  //       Taro.navigateTo({ url })
  //       return
  //     }
  //     Taro.switchTab({ url })
  //   },
  //   setSelected(index) {
  //     console.log("tttttttttttttttttt",index)
      
  //     // this.$store.dispatch('setSelected', index)
  //     // Taro.setStorageSync('selected', index)
  //     this.selected = index
  //   }
  // },
  // computed: {
  //   isVisible() {
  //     return true
  //   },
  // },
  // setup() {
    
  //   // const store = useStore()
  //   // store.dispatch('setSelected', Taro.getStorageSync('selected'))
  //   // console.log("tttttttttttttttttttttttttgggggggggg",Taro.getStorageSync('selected'))
  //   const selected = ref(2)
  //   // const selected = computed(() => store.state.selected)
  //   // const selected = reactive(0)
  //   // const setSelected = (index) => {
  //   //   store.dispatch('setSelected', index)
  //   // }
  //   return {
  //     selected,
  //   }
  // },
  // // watch: {
  // //   selected(val) {
  // //     this.setSelected(val)
  // //   }
  // // },
  // // mounted() {
  // //   this.selected = this.$store.state.selected
  // // },




}
</script>