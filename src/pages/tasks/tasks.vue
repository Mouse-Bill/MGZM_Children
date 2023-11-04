<!-- <template>
  <h1>Here is a task component!</h1>
  <h2>hhhhhhh</h2>
  <counter />
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
</script> -->
<template>
  <nut-cell class="light-orange-cell">

    <nut-space :gutter="135">
      <nut-button shape="square" type="warning" @tap="getChildrenPointsData">
        <Category></Category>
        积分
      </nut-button>

      <nut-button shape="square" type="warning">
        <My></My>
        教学资源库
      </nut-button>
    </nut-space>
  </nut-cell>

  <nut-navbar @click-back="back" @click-Title="tabTitle">
    <template #content>
      <nut-tabs v-model="tab1value" @click="changeTab">
        <nut-tab-pane title="任务看板"></nut-tab-pane>
        <nut-tab-pane title="反馈情况"></nut-tab-pane>
      </nut-tabs>
    </template>
  </nut-navbar>




  <nut-collapse v-model="activeNames" @change="onChange">

    <nut-collapse-item :name="1">
      <template #title> {{ title.title1 }} </template>
      <nut-cell>
        <nut-row :gutter="10">
          <nut-col :span="4">
            <nut-avatar class="demo-avatar" bg-color="#FA2C19">
              <My color="#fff" />
            </nut-avatar>
            <nut-tag type="danger">未完成</nut-tag>
          </nut-col>

          <nut-col :span="12">
            <!-- <nut-cell center title="背诵英语" sub-title="积分">
            </nut-cell> -->
            <div>背诵英语100词</div>
            <div>积分 <nut-rate v-model="value" readonly size="10" /></div>
          </nut-col>
          <nut-col :span="8">
            <nut-button shape="square" type="primary">
              去回顾
            </nut-button>
          </nut-col>

        </nut-row>
      </nut-cell>

      <nut-cell>
        <nut-row :gutter="10">
          <nut-col :span="4">
            <nut-avatar class="demo-avatar" bg-color="#FA2C19">
              <My color="#fff" />
            </nut-avatar>
          </nut-col>
          <nut-col :span="12">
            <!-- <nut-cell center title="背诵英语" sub-title="积分">
            </nut-cell> -->
            <div>背诵英语100词</div>
            <div>积分 <nut-rate v-model="value" readonly size="10" /></div>
          </nut-col>
          <nut-col :span="8">
            <nut-button shape="square" type="primary">
              去回顾
            </nut-button>
          </nut-col>

        </nut-row>
      </nut-cell>
    </nut-collapse-item>


    <nut-collapse-item :title=title.title2 :name="2">
      <nut-cell>
        <nut-row :gutter="10">
          <nut-col :span="4">
            <nut-avatar class="demo-avatar" bg-color="#FA2C19">
              <My color="#fff" />
            </nut-avatar>
          </nut-col>
          <nut-col :span="12">
            <!-- <nut-cell center title="背诵英语" sub-title="积分">
            </nut-cell> -->
            <div>背诵英语100词</div>
            <div>积分 <nut-rate v-model="value" readonly size="10" /></div>
          </nut-col>
          <nut-col :span="8">
            <nut-button shape="square" type="primary">
              去回顾
            </nut-button>
          </nut-col>

        </nut-row>
      </nut-cell>
    </nut-collapse-item>
  </nut-collapse>
</template>



<script setup>
import { reactive, ref, toRefs, h } from 'vue';
import { Category, Find, Cart, My, MoreX } from '@nutui/icons-vue-taro';
import childrenApi from '../../api/children';


const activeNames = ref([1, 2]);
const value = ref(3); //积分星星
const title = reactive({
  title1: '必做任务',
  title2: '选做任务',
});

const child = {
  u_id: "26adeeee-7994-11ee-b962-0242ac120002"
}

const getChildrenPointsData = async () => {
  const res = await childrenApi.getChildrenPoints(child);
  console.log(res);
};

const onChange = (modelValue, currName, status) => {
  // currName: 当前操作的 collapse-item 的 name
  // status: true 打开 false 关闭
  console.log(modelValue, currName, status);
};



const tab1value = ref(0);
const back = () => {
  console.log('Click Back');
};
const tabTitle = () => {
  console.log('Click Title');
};
const changeTab = (tab) => {
  tab1value.value = tab.paneKey;
};


</script>


<style lang="scss">
.light-orange-cell {
  background-color: #FFEFD5;
  /* Light orange color */
}
</style>


