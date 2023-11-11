<template>

  <view class="page">
  <nut-cell class="top-cell" >
    <nut-space direction="vertical" fill>
      <nut-space :gutter="12"  center style="margin-top:15%">
        <nut-avatar size="large" >
        <img
          :src= "childAvatar" />
        </nut-avatar>
        <nut-space direction="vertical" fill>
            <nut-row style="font-size:18px;margin-top: 7px;">{{child.cName}}</nut-row>
            <nut-row style="font-size:14px" >{{child.cProvince}} {{child.cCity}} {{child.cDistrict}}</nut-row>
        </nut-space>
      </nut-space>
      <nut-cell class="menu-card" round-radius="18px">
        <nut-grid :gutter="0" class="menu-grid" >
          <nut-grid-item text="扫一扫"><Scan2 /></nut-grid-item>
          <nut-grid-item text="收藏"><Follow /></nut-grid-item>
          <nut-grid-item text="浏览足迹"><Footprint /></nut-grid-item>
          <nut-grid-item text="设置"><Setting /></nut-grid-item>
          <nut-grid-item text="拍照搜题"><Photograph /></nut-grid-item>
          <nut-grid-item text="作文助手"><Edit /></nut-grid-item>
          <nut-grid-item text="英语单词"><Date /></nut-grid-item>
          <nut-grid-item text="下载内容"><Download /></nut-grid-item>
        </nut-grid>
      </nut-cell>
          <nut-noticebar style="margin-top: 0"
        :text= "noticebarMessage"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
      ></nut-noticebar> 
      <nut-cell >
        <nut-space direction="vertical" fill>
          <div>常见问题</div>
          <nut-cell title="如何申请资助？需要提供哪些信息？" desc="了解更多">
              <template #icon>
                  <Message />
              </template>
          </nut-cell>
          <nut-cell title="积分如何获取？获取后如何使用？" desc="了解更多">
              <template #icon>
                  <Message />
              </template>
          </nut-cell>
        </nut-space>
      </nut-cell>
      <nut-button size="large"  type="info" style="height:50px ;--nut-button-large-font-size:20px ; margin-bottom:0" color="linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)">
        <template #icon>
          <Uploader />
        </template>申请资助</nut-button>
    </nut-space>
  </nut-cell>

 </view>
 
</template>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
import { Dongdong  } from '@nutui/icons-vue-taro';
import { Setting  } from '@nutui/icons-vue-taro';
import { Empty } from '@nutui/nutui-taro';
import { Cell } from '@nutui/nutui-taro';
import {CellGroup } from '@nutui/nutui-taro';
import {Photograph } from '@nutui/icons-vue-taro';
import {Scan2 } from '@nutui/icons-vue-taro';
import {Edit } from '@nutui/icons-vue-taro';
import {Footprint } from '@nutui/icons-vue-taro';
import {Date } from '@nutui/icons-vue-taro';
import {Download} from '@nutui/icons-vue-taro';
import {Follow} from '@nutui/icons-vue-taro';
import {Uploader} from '@nutui/icons-vue-taro';
import {Message} from '@nutui/icons-vue-taro';

import childrenApi from '../../api/children';
import Taro from '@tarojs/taro';

const tempChild = {
  u_id :Taro.getStorageSync('child').uid ,
}

const child = ref(0);
async function getChildren(){
  await childrenApi.getChildrenInfo(tempChild).then(res =>{
    console.log(res.data);
    child.value = res.data;
  });
  return child;
};
getChildren();

console.log("99999999999999999999999999")
console.log(child);

// const childAvatar = await childrenApi.getChildrenAvatar(child);
const childAvatar = "https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" ;

//TODO
const noticebarMessage = "在云南省保山市昌宁县，东北大学软件学院的同学们进行了“明光筑梦”计划“儿童之家”启用后的首次授课。授课内容涵盖理想信念教育、普通话推广、科学知识普及、未成年人保护等。同学们还走进大山，开展志愿服务帮扶活动。";

</script>

<style>
.top-cell{
  margin-top: 0;
  --nut-cell-large-padding:18px;

  background-image: linear-gradient( 135deg, #FFE985 10%, #FA742B 100%);

  width:100%;
  height:600px;
  border-bottom-left-radius:60%;
  border-bottom-right-radius:60%;
}

.menu-card{
  margin-top:25px;
  height: 90%;
}

.menu-grid{
  --nut-grid-border-color:#ffff;
  --nut-grid-item-text-font-size:30px;
}

</style>