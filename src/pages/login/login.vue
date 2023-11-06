<!-- <template>
  
</template>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
</script> -->

<template>
  <nut-form>
    <nut-form-item label="用户名">
      <nut-input v-model="basicData.username" class="nut-input-text" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item label="密码">
      <nut-input v-model="basicData.password" class="nut-input-text" placeholder="请输入密码" type="password" />
    </nut-form-item>
    <nut-button type="primary" style="margin-right: 10px" size="small" @click="submit"
        >提交</nut-button
      >
  </nut-form>
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
