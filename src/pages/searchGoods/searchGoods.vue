<template>
    <nut-searchbar v-model="state.searchValue" @search="search">
      <template #leftin>
        <Search2 />
      </template>
      <template #rightout>
        <Message />
      </template>
    </nut-searchbar>
  
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
  
    <nut-space direction="vertical" fill>
      <nut-cell
        v-for="(mainProduct, index) in state.mainProductsToShow"
        :key="index"
        class="main-product"
        @click="goDetail(state.mainProductsToShow[index])"
      >
        <nut-row>
          <nut-col :span="8">
            <image style="width: 100px;height: 100px;background: #fff;" :src="mainProduct.goodsPicUrl" alt="图片加载失败" />
          </nut-col>
          <nut-col :span="16">
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
              <nut-ellipsis
                :content='mainProduct.goodsDescription'
                direction="end"
                rows="2"
              ></nut-ellipsis>
              <view class="comment">剩余库存： {{ mainProduct.goodsNum }}</view>
            </div>
          </nut-col>
        </nut-row>
      </nut-cell>
    </nut-space>
  
  </template>
  
  <script setup>
  import { reactive, ref, defineProps, defineEmits, computed } from "vue";
  import { Search2, Message } from "@nutui/icons-vue-taro";
  import Taro from "@tarojs/taro";
  import mallApi from "../../api/mall";
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
  });
  
  state.searchValue = Taro.getCurrentInstance()?.router.params?.value;
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
  
  const goDetail = (goods) => {
    // Taro.setStorageSync('goods',JSON.stringify(goods))
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
  
  async function getGoodsList() {
    const body = {
      keyword:state.searchValue
    }
    const res = await mallApi.getGoodsListByName(body);
    console.log(res.data);
    state.mainProducts = res.data;
    state.mainProductsToShow = res.data;
  }
  getGoodsList();
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
