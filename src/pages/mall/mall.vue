<template>
  <view v-if="isLoaded">
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
        <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
          <nut-swiper-item>
            <img
              src="https://imgpp.ztupic.com/bup/so/20210113/4629d3a2e012bb1cc55554b61e082b4b-1.jpg?x-oss-process=image/resize,w_1024/quality,q_85/watermark,image_d2F0ZXIucG5n,type_ZmFuZ3poZW5naGVpdGk"
              alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="https://img.qiluyidian.net/1568599618636?imageView2/2/w/720/q/85" alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="https://img2.baidu.com/it/u=1510627751,1280776303&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=202"
              alt="" />
          </nut-swiper-item>
          <nut-swiper-item>
            <img src="https://pic.ntimg.cn/file/20200820/30420428_124434205000_2.jpg" alt="" />
          </nut-swiper-item>
        </nut-swiper>
      </div>

      <nut-row :gutter="10">
        <nut-col :span="8">
          <div :style="{ fontSize: '14px', marginLeft: '27px', color: '#ffd777' }">
            可用积分
            <nut-divider direction="vertical" />
            <nut-countup :init-num="0.0" :end-num="state.points" :speed="5" :during="1" :to-fixed="2"></nut-countup>
          </div>
        </nut-col>
        <nut-col :span="8">
          <nut-button type="warning" @click="tipsClick">积分规则</nut-button>
        </nut-col>
        <nut-col :span="8">
          <nut-button type="warning" @click="rankClick">积分排行榜</nut-button>
        </nut-col>
      </nut-row>

      <nut-menu active-color="green">
        <nut-menu-item v-model="state.value1" @change="handleChange1" :options="state.options1" />
        <nut-menu-item v-model="state.value2" @change="handleChange2" :options="state.options2" />
      </nut-menu>

      <nut-cell v-for="(mainProduct, index) in state.mainProductsToShow" :key="index" class="main-product"
        @click="goDetail(state.mainProductsToShow[index])"><nut-skeleton width="350px" height="15px" round row="3"
          title="false" v-model:loading=loading1>
          <nut-row>
            <nut-col :span="8">
              <image style="width: 100px; height: 100px; background: #fff" :src="mainProduct.goodsPicUrl" alt="图片加载失败" />
            </nut-col>
            <nut-col :span="16">
              <div>
                <view class="main-product-name">{{ mainProduct.goodsName }}</view>
              </div>
              <div>
                所需积分：
                <nut-price :price="mainProduct.goodsPoints" size="normal" :decimal-digits="0" :need-symbol="false" />
              </div>
              <div>
                <nut-ellipsis :content="mainProduct.goodsDescription" direction="end" rows="2"></nut-ellipsis>
                <view class="comment">剩余库存： {{ mainProduct.goodsNum }}</view>
              </div>
            </nut-col>
          </nut-row>
        </nut-skeleton>
      </nut-cell>
    </nut-space>

    <nut-dialog no-cancel-btn title="积分规则" :content="`<div style='text-align: left;'>
      1. 积分获取：完成任务可以获得一定的积分
      2. 兑换商品范围：积分可以用于兑换有库存的商品。
      3. 兑换流程：浏览商城，选择您想要的商品，并确认兑换。兑换成功后，积分将被扣除，工作人员会通过电话联系您。
      4. 积分结算：积分结算将每日进行一次，您获得的积分将会及时添加到您的账户中.
      5. 积分规则限制：积分不可转让给其他用户.
    </div>`" v-model:visible="ruleVisble" />
  </view>
</template>
  
<script setup>
import { reactive, ref, defineProps, defineEmits, computed } from "vue";
import { Search2, Message } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
import mallApi from "../../api/mall";
import childrenApi from "../../api/children";
import { stat } from "fs";
import { onMounted } from "vue";

const isLoaded = ref(false)

const ruleVisble = ref(false)
const loading1 = ref(true)
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
  mainProductsToShow: [],
  points: 50,
  child: {
    u_id: "20011",
  },
});
// state.child.u_id = JSON.parse(wx.getStorageSync("child")).u_id

const handleChange1 = (val) => {
  if (val == "0") {
    console.log("全部商品");
    state.mainProductsToShow = state.mainProducts;
  } else if (val == "1") {
    console.log("有库存的商品");
    state.mainProductsToShow = state.mainProducts.filter(
      (item) => item.goodsNum != 0
    );
  } else if (val == "2") {
    console.log("无库存的商品");
    state.mainProductsToShow = state.mainProducts.filter(
      (item) => item.goodsNum == 0
    );
  } else {
    console.log("库存排序失败");
  }
};

const handleChange2 = (val) => {
  getRankedGoodsList(val, state.mainProductsToShow);
};

const tipsClick = () => {
  ruleVisble.value = true;
};

const rankClick = () => {
  Taro.navigateTo({ url: "../pointSort/pointSort" });
};

const goDetail = (goods) => {
  // Taro.setStorageSync("goods", JSON.stringify(goods));
  // console.log(id);
  const detailUrl = "/pages/goods/goods?id=" + goods.goodsId;
  // console.log(detailUrl);
  Taro.navigateTo({ url: detailUrl });
};

const search = function () {
  console.log(state.searchValue);
  const detailUrl = "/pages/searchGoods/searchGoods?value=" + state.searchValue;
  Taro.navigateTo({ url: detailUrl });
};

const getRankedGoodsList = (val, data) => {
  if (val == "a") {
    console.log("默认排序");
    getGoodsList();
  } else if (val == "b") {
    console.log("积分从高到低排序");
    data.sort((a, b) => b.goodsPoints - a.goodsPoints);
  } else if (val == "c") {
    console.log("积分从低到高排序");
    data.sort((a, b) => a.goodsPoints - b.goodsPoints);
  } else {
    console.log("积分排序失败");
  }
};

async function getPoints() {
  const tmppoints = await childrenApi.getChildrenPoints(state.child).then((res) => {
    console.log(res.data);
    state.points = res.data;
  });
}

async function getGoodsList() {
  loading1.value = true;
  const res = await mallApi.getGoodsList();
  console.log(res.data);
  state.mainProducts = res.data;
  state.mainProductsToShow = res.data;
  loading1.value = false;
  isLoaded.value = true
}

onMounted(() => {
  getGoodsList();
  getPoints();
  
})
// getGoodsList();
// getPoints();
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
