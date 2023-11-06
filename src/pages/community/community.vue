<template>
  <h1>Here is a community component!</h1>
  <h2>hhhhhhh</h2>
  <counter />
  <nut-button type="primary" style="margin-right: 10px" size="small" @click="submit"
        >提交</nut-button
      >
</template>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
import childrenApi from '../../api/children.js';
import Taro from '@tarojs/taro';

const child = {};

// child.u_id = Taro.getStorageSync('child').u_id;
child.u_id = "26adeeee-7994-11ee-b962-0242ac120002";

async function submit() {
  await childrenApi.getChildrenPoints(child).then(res => {
    console.log(res);
    Taro.switchTab({
      url: '/pages/tasks/tasks'
    });
  });
}
</script>