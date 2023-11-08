<template>
  <nut-dialog
    title="积分兑换"
    content="您确定要兑换该商品吗？（此操作不可逆）"
    v-model:visible="visible1"
    @cancel="onCancel"
    @ok="onOk"
  />

  <nut-notify
      @click="onClick"
      @closed="onClosed"
      :type="notifyState.state.type"
      v-model:visible="notifyState.state.show"
      :msg="notifyState.state.desc"
    />


    <nut-image-preview :show="state.showPreview" :images="state.picUrl" @close="hideFn" />
  <!-- <nut-cell isLink title="展示图片预览" :showIcon="true" @click="showFn"></nut-cell> -->

  <view class="goods_info">
    <view id="goodsInfo"></view>
    <nut-swiper
      pagination-color="#426543"
      auto-play="0"
      :loop="true"
      @change="change"
      height="375"
    >
      <nut-swiper-item @click="showFn">
        <img class="item_img" :src="state.goods.goodsPicUrl" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <view class="price_wrap">
      <div>
        所需积分：
        <nut-price
          :price="state.goods.goodsPoints"
          size="normal"
          :decimal-digits="0"
          :need-symbol="false"
        />
      </div>
    </view>
  </view>
  <view class="text_container">
    <nut-cell-group>
      <nut-cell>
        <nut-space direction="vertical" fill>
          <div class="goods_name">{{ state.goods.goodsName }}</div>
          <p class="goods_id">商品编号：{{ state.goods.goodsId }}</p>
        </nut-space>
      </nut-cell>
      <nut-cell>
        <nut-space direction="vertical" fill>
          <div>
            <p class="goods_num">商品库存：{{ state.goods.goodsNum }}</p>
          </div>
          <p class="goods_desc">商品描述：{{ state.goods.goodsDescription }}</p>
        </nut-space>
      </nut-cell>
    </nut-cell-group>

    <div class="confirmbut1">
      <nut-button type="warning" @click="buyVisible = true"
        >兑换商品</nut-button
      >
    </div>
    <nut-popup
      position="bottom"
      closeable
      :style="{ height: '20%' }"
      v-model:visible="buyVisible"
      class="pop_text"
    >
      <nut-row>
        <nut-col :span="4"></nut-col>
        <nut-col :span="20">
          <div>
            <view class="textArea">商品名称：{{ state.goods.goodsName }}</view>
          </div>
          <div>
            <view class="textArea">
              所需积分：
              <nut-price
                :price="state.goods.goodsPoints"
                size="normal"
                :decimal-digits="0"
                :need-symbol="false"
              />
            </view>
          </div>
          <div>
            <view class="textArea">剩余库存： {{ state.goods.goodsNum }}</view>
          </div>
        </nut-col>
      </nut-row>
      <div class="confirmbut2">
        <nut-button type="warning" @click="clickBtnOperate"
          >确定兑换</nut-button
        >
      </div>
    </nut-popup>
  </view>
</template>
  <script setup>
import { ref, reactive, toRefs } from "vue";
import { IconFont } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
const base = ref(false);
const routerParams = Taro.getCurrentInstance()?.router.params;
const id = routerParams?.id;
const buyVisible = ref(false);
const visible1 = ref(false);
const state = reactive({
  imgUrl: "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
  current: 1,
  goods: {},
  showPreview: false,
  picUrl:[],
});

const showFn = () => {
        state.showPreview = true;
        console.log("showPic")
        console.log(state.picUrl)
      };

      const hideFn = () => {
        state.showPreview = false;
        console.log("hidPic")
      };

const notifyState = {
  state: reactive({
    show: false,
    desc: '',
    type: 'primary'
  }),
  methods: {
    cellClick(type,desc) {
      notifyState.state.show = true;
      notifyState.state.type = type;
      notifyState.state.desc = desc;
    }
  }
};

console.log(Taro.getStorageSync("goods"));
// console.log(JSON.parse(Taro.getStorageSync("goods"))
state.goods = JSON.parse(wx.getStorageSync("goods"));
const jsonObject = { src: JSON.parse(wx.getStorageSync("goods")).goodsPicUrl };
state.picUrl = [jsonObject]
console.log(state.goods);

const change = (index) => {
  state.current = index + 1;
};

const onCancel = () => {
  notifyState.methods.cellClick("warning", "您已取消兑换。");
  console.log("event cancel");
  visible1.value = false;
  buyVisible.value = false;
};

const onOk = () => {
  console.log("event ok");
  notifyState.methods.cellClick('success', '您已成功兑换')
  visible1.value = false;
  buyVisible.value = false;
  console.log(JSON.parse(wx.getStorageSync("goods")).goodsId);
};

// 底部操作按钮触发
const clickBtnOperate = () => {
  visible1.value = true;
  // console.log(userId)
};
// 关闭商品规格弹框
const close = () => {};
// }
</script>

  <style lang="scss">
.goods_info {
  width: 100%;
  background: #fff;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 0 0 0 #ececee;
  .page {
    position: absolute;
    bottom: 20px;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px 0 0 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
  .item_img {
    width: 100%;
    height: 100%;
  }
  .footImg {
    display: block;
    float: left;
    width: 1px;
  }
  .price_wrap {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0px 12px;
    background-image: url(//storage.jd.com/jdcdkh/welfare/5.5.91-43/img/detail-bg.png);
    background-size: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .nut-price {
      color: #fff;
    }
    .opt_wrap {
      display: flex;
      align-items: center;
      .btn {
        margin: 0 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        height: 100%;
        line-height: 12px;
      }
    }
  }
}

.text_container {
  padding: 12px 18px 24px 18px;
  /* 商品名称 */
  .goods_name {
    font-size: 50px;
    color: #333;
    font-weight: bold;
  }

  /* 商品编号 */
  .goods_id {
    font-size: 5x;
    color: #888;
    font-weight: normal;
  }

  /* 商品数量 */
  .good_num {
    font-size: 80px;
    color: #ff6600;
    font-weight: bold;
  }

  /* 商品描述 */
  .goods_desc {
    font-size: 30px;
    color: #666;
    font-weight: normal;
  }
}

.pop_text {
  .textArea {
    display: flex;
    padding-top: 10px;
    padding-left: 100px;
  }
  .confirmbut2 {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.confirmbut1 {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
