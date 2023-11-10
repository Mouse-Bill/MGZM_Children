<!-- <template>
  
</template>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
</script> -->

<template>
  <view class="container">
    <view class="con1">
      <view class="item1">
        <!-- <img class="img" style="z-liner" src="https://s2.loli.net/2023/11/08/owyRbsK8dc12QWa.png" /> -->
        <text class="welcome-text">欢迎登录</text>
      </view>
   </view>

   <view class="card" wrap>
  
    <nut-input  v-model="basicData.username" class="nut-input-text" placeholder="输入用户名" type="text" />

    <nut-input  v-model="basicData.password" class="nut-input-text" placeholder="输入密码" type="password" />

    <nut-button @click="submit" size="large"  type="info" style="  width:100% ; height:45px ;--nut-button-large-font-size:20px " color="#ffd966"
      >提交</nut-button>
    </view>

     <img class="img" style="z-liner" src="https://s2.loli.net/2023/11/08/owyRbsK8dc12QWa.png" />

    <view class="con2">
      <view class="item2"></view>
    </view>

 </view>

  
</template>


<script setup>
import { ref, reactive } from 'vue';
import loginApi from '../../api/login.js';
import Taro from '@tarojs/taro';

const basicData = reactive({
  username: '',
  password: ''
});

async function submit() {
  loginApi.childrenLogin(basicData).then(res => {
    console.log(res);
    Taro.switchTab({
      url: '/pages/tasks/tasks'
    });
  });
}

</script>


<style>

.container{
  z-index: -999;
  background-color: #fff9e6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

page{
  height: 100%;
}

.item1{
  height: 570px;
  width: 650px;
  /* border-top-right-radius:3%; */
  border-bottom-right-radius:100%;
  top: 20px;
  background-color: #fff2cc;
}

.item2{
  height: 300px;
  width: 300px;
  border-top-left-radius:100%;
  top: 20px;
  background-color: #ffe599;
}

.con1{
  height: 20%;
}

.con2{
  display: flex;
  flex-direction: row ;
  justify-content: flex-end;

}

.card{
  position: absolute;
  top: 36%;
  width: 80%;
  align-self:center;
  display: flex;
  flex-direction: column;
  justify-content: space-around ;
  height: 25%;
  background-color: #fff9e6;
}

.nut-input-text{
  background-color: transparent;
 
  border:none;
  border-bottom: 1px solid #c0c0c0
}

.welcome-text{
  font-size: 80px;
  font-weight: bold;
  color: #434343;

  position: absolute;
  left: 8%;
  top: 18%;
}

.img{
  height: 200px;
  width: 250px;
  
  position: absolute;
  left: 33%;
  top: 73%;
}

</style>