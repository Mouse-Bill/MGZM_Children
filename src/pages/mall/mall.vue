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

    <nut-cell
      v-for="(mainProduct, index) in state.mainProductsToShow"
      :key="index"
      class="main-product"
    >
      <div>
        <img
          src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
          alt=""
        />
      </div>
      <div>
        <view class="main-product-name">{{ mainProduct.goodsName }}</view>
      </div>
      <div>
        所需积分：
        <nut-price
          :price="mainProduct.goodsPoints"
          size="normal"
          :decimal-digits="0"
          :need-symbol="false"
        />
      </div>
      <div>
        <view class="comment">剩余库存： {{ mainProduct.goodsNum }}</view>
      </div>
      <nut-divider
        content-position="left"
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 0px' }"
        >商品描述</nut-divider
      >
      <view class="comment">{{ mainProduct.goodsDescription }}</view>
    </nut-cell>
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
import { reactive, ref, defineProps, defineEmits, computed } from "vue";
import { Search2, Message } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
import mallApi from "../../api/mall";
const ruleVisble = ref(false);

const state = reactive({
  options1: [
    { text: "全部商品", value: 0 },
    { text: "有库存的商品", value: 1 },
    { text: "无库存的商品", value: 2 },
  ],
  options2: [
    { text: "默认排序", value: "a" },
    { text: "积分从高到低排序", value: "b" },
    { text: "积分从低到高排序", value: "c" },
  ],
  page: 2,
  value1: 0,
  value2: "a",
  searchValue: "",
  mainProducts: [],
  mainProductsToShow: []
});

const handleChange1 = (val) => {
  if (val == "0") {
    console.log("全部商品");
  } else if (val == "1") {
    console.log("有库存的商品");
  } else if (val == "2") {
    console.log("无库存的商品");
  } else {
    console.log("库存排序失败");
  }
};

const handleChange2 = (val) => {
  if (val == "a") {
    console.log("默认排序");
  } else if (val == "b") {
    console.log("积分从高到低排序");
  } else if (val == "c") {
    console.log("积分从低到高排序");
  } else {
    console.log("积分排序失败");
  }
};

const tipsClick = () => {
  ruleVisble.value = true;
};

const rankClick = () => {
  Taro.navigateTo({ url: "../goods/goods" });
};

const goDetail = (id) => {
  Taro.navigateTo({ url: "../goods/goods?id=" + id });
};

const search = function () {
  console.log(state.searchValue);
};

const getRankedGoodsList = (val, data) => {
  if (val == 'a') {
    console.log('默认排序');
    return data;
  } else if (val == 'b') {
    console.log('积分从高到低排序');
    return data.sort((a,b)=>a.goodsPoint - b.goodsPoint);
  } else if (val == 'c') {
    console.log('积分从低到高排序');
    return data.sort((a,b)=>a.goodsPoint - b.goodsPoint);
  } else {
    console.log('积分排序失败');
    return data;
  }
}

async function getGoodsList() {
  const res = await mallApi.getGoodsList();
  console.log(res);
  state.mainProducts = res.data;
  state.mainProductsToShow = res.data;
}
getGoodsList();

computed:{
  state.mainProductsToShow(){
    if(state.options1=='0'){
      console.log('全部商品');
      state.mainProductsToShow = state.mainProducts;
    }else if(state.options1=="1"){
      console.log('有库存的商品');
      state.mainProductsToShow = state.mainProducts.filter(item => item.goodsNum != 0);
    }
    else if(state.options1=="2"){
      console.log('无库存的商品');
      state.mainProductsToShow = state.mainProducts.filter(item => item.goodsNum == 0);
    }else{
      console.log("库存量排序失败");
    }
    return getRankedGoodsList(state.options2,state.mainProductsToShow);
  };
};
</script>

<style>
.main-product {
  display: block;
}
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


