<template>
  <nut-searchbar v-model="state.searchValue" @search="search">
    <template #leftin>
      <Search2 />
    </template>
    <template #rightout>
      <Message />
    </template>
  </nut-searchbar>

  <nut-space direction="vertical" fill>
    <div>
      <nut-swiper
        :init-page="page"
        :pagination-visible="true"
        pagination-color="#426543"
        auto-play="3000"
      >
        <nut-swiper-item>
          <img
            src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"
            alt=""
          />
        </nut-swiper-item>
        <nut-swiper-item>
          <img
            src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
            alt=""
          />
        </nut-swiper-item>
      </nut-swiper>
    </div>

    <nut-row :gutter="10">
      <nut-col :span="8">
        <div
          :style="{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }"
        >
          可用积分
          <nut-divider direction="vertical" />
          <a href="#" :style="{ color: '#1989fa' }">256</a>
        </div>
      </nut-col>
      <nut-col :span="8">
        <nut-button type="info" @click="tipsClick">积分规则</nut-button>
      </nut-col>
      <nut-col :span="8">
        <nut-button type="primary" @click="rankClick">积分排行榜</nut-button>
      </nut-col>
    </nut-row>
    <nut-menu active-color="green">
      <nut-menu-item
        v-model="state.value1"
        @change="handleChange1"
        :options="state.options1"
      />
      <nut-menu-item
        v-model="state.value2"
        @change="handleChange2"
        :options="state.options2"
      />
    </nut-menu>

    <view class="main-products">
      <view
        v-for="(mainProduct, index) in state.mainProducts"
        :key="index"
        class="main-product"
      >
        <view class="main-product-image">
          <img
            src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
            alt=""
          />
        </view>
        <view class="main-product-name">{{ mainProduct.goods_name }}</view>
        <nut-price
          :price="state.goods_price"
          size="large"
          :need-symbol="false"
        />
        <view class="comment-points">
          <view class="comment">剩余库存{{ mainProduct.num }}</view>
        </view>
      </view>
    </view>
  </nut-space>

  <nut-dialog
    no-cancel-btn
    title="积分规则"
    :content="`<div style='text-align: left;'>
    1. 积分获取：完成任务可以获得一定的积分
    2. 兑换商品范围：积分可以用于兑换有库存的商品。
    3. 兑换流程：浏览商城，选择您想要的商品，并确认兑换。兑换成功后，积分将被扣除，工作人员会通过电话联系您。
    4. 积分结算：积分结算将每日进行一次，您获得的积分将会及时添加到您的账户中.
    5. 积分规则限制：积分不可转让给其他用户.
  </div>`"
    v-model:visible="ruleVisble"
  />
</template>

<script setup>
import { reactive,ref} from 'vue'
import { Search2, Message } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro'
import mallApi from '../../api/mall.js'
const ruleVisble = ref(false);

const state = reactive({
  options1: [
    { text: '全部商品', value: 0 },
    { text: '有库存的商品', value: 1 },
    { text: '无库存的商品', value: 2 }
  ],
  options2: [
    { text: '默认排序', value: 'a' },
    { text: '积分从高到低排序', value: 'b' },
    { text: '积分从低到高排序', value: 'c' }
  ],
  page: 2,
  value1: 0,
  value2: 'a',
  searchValue: '',
  mainProducts: []
}); 



const getGoodsList = async () => {
  const list = await mallApi.getGoodsList();
  console.log(list);
};

getGoodsList()
</script>

<style>
.nut-swiper-item {
  line-height: 150px;
}
img {
  width: 100%;
  height: 100%;
}
.nut-cell {
  height: 100%;
}
.nut-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: rgb(236, 205, 138);
  border-radius: 10px;
}
</style>


