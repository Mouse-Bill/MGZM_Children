<!-- <template>
  <h1>Here is a task component!</h1>
  <h2>hhhhhhh</h2>
  <counter />
  <button @click="count++">count is: {{ count }}</button>
</template>

<nut-cell :showIcon="true" :desc="state.date && state.date[0] ? `${state.date[0]}至${state.date[1]}` : '请选择'"
    style="color: blue;" @click="openSwitch"></nut-cell>

<script setup>
import counter from '../../components/counter.vue'
import { ref } from 'vue'
</script> -->
<template>
  <nut-cell class="light-orange-cell" :style="{ '--nut-space-gap': '190px' }">


    <nut-space>
      <nut-button shape="square" type="warning" @click="">
        <Category></Category>
        积分
      </nut-button>

      <nut-button shape="square" type="warning">
        <Check></Check>
        资源
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

  <nut-cell style="padding: 0;">
    <nut-row>
      <nut-col :span="8">
        <nut-cell :showIcon="true" :desc="state.date && state.date[0] ? `${state.date[0]}` : '请选择'" style="color: blue;"
          @click="openSwitch"></nut-cell>
      </nut-col>
      <nut-col :span="8">
        <nut-cell title="查看历史任务" @click="click"></nut-cell>

      </nut-col>
      <nut-col :span="8">
        <nut-cell :showIcon="true" :desc="state.date && state.date[0] ? `${state.date[1]}` : '请选择'" style="color: blue;"
          @click="openSwitch"></nut-cell>
      </nut-col>
    </nut-row>

  </nut-cell>

  <nut-calendar v-model="state" :visible="state.isVisible" :default-value="state.date" type="range"
    :start-date="`2019-12-22`" :is-auto-back-fill="true" :end-date="`2021-01-08`" @close="closeSwitch"
    @choose="setChooseValue" @select="select">
  </nut-calendar>






  <nut-collapse v-model="activeNames" @change="onChange">

    <nut-collapse-item :name="1">
      <template #title> {{ title.title1 }} <nut-divider /></template>

      <nut-cell v-for="task in taskList.data" v-show="!checkSelective(task)">
        <nut-row :gutter="10">
          <nut-col :span="4">
            <nut-avatar v-if="checkDone(task)" size="50" class="demo-avatar" bg-color="rgb(84,255, 193)" shape="square">
              <Check color="#fff" />
            </nut-avatar>
            <nut-avatar v-else size="50" class="demo-avatar" bg-color="rgb(84,255, 193)" shape="square">
              <MoreX color="#fff" />
            </nut-avatar>
            <nut-tag plain type="warning">未完成</nut-tag>
          </nut-col>

          <nut-col :span="12">
            <div>{{ task.ctName }}</div>
            <div>积分 <nut-rate v-model="task.ctPoints" readonly size="10" /></div>

          </nut-col>
          <nut-col :span="8">
            <nut-button plain type="info">
              去回顾
            </nut-button>
          </nut-col>

          <nut-col :span="20">
            <div>
              <nut-cell :sub-title="`难度系数: ${taskList.ctDifficulty}`" :desc="`${taskList.ctEndTime}截止`"></nut-cell>
            </div>
          </nut-col>
        </nut-row>

      </nut-cell>
      <nut-divider />


      <!-- <nut-cell>
        <nut-row :gutter="10">
          <nut-col :span="4">
            <nut-avatar size="50" class="demo-avatar" bg-color="rgb(84,255, 193)" shape="square">
              <Check color="#fff" />
            </nut-avatar>
            <nut-tag plain type="warning">未完成</nut-tag>
          </nut-col>

          <nut-col :span="12">
            <div>{{taskList.ctName}}</div>
            <div>积分 <nut-rate v-model="taskList.ctPoints" readonly size="10" /></div>

          </nut-col>
          <nut-col :span="8">
            <nut-button plain type="info">
              去回顾
            </nut-button>
          </nut-col>

          <nut-col :span="20">
            <div>
              <nut-cell :sub-title="`难度系数: ${taskList.ctDifficulty}`" :desc="`${taskList.ctEndTime}截止`"></nut-cell>
            </div>
          </nut-col>
        </nut-row>

      </nut-cell>
      <nut-divider /> -->
    </nut-collapse-item>


    <nut-collapse-item :name="2">
      <template #title> {{ title.title2 }} <nut-divider /></template>

      <nut-cell>
        <nut-row :gutter="10">
          <nut-col :span="4">
            <nut-avatar v-if="checkDone" size="50" class="demo-avatar" bg-color="rgb(84,255, 193)" shape="square">
              <Check color="#fff" />
            </nut-avatar>
            <nut-avatar v-else size="50" class="demo-avatar" bg-color="rgb(84,255, 193)" shape="square">
              <MoreX color="#fff" />
            </nut-avatar>
            <nut-tag plain type="warning">未完成</nut-tag>
          </nut-col>

          <nut-col :span="12">
            <div>{{ taskList.ctName }}</div>
            <div>积分 <nut-rate v-model="taskList.ctPoints" readonly size="10" /></div>

          </nut-col>
          <nut-col :span="8">
            <nut-button plain type="info">
              去回顾
            </nut-button>
          </nut-col>

          <nut-col :span="20">
            <div>
              <nut-cell :sub-title="`难度系数: ${taskList.ctDifficulty}`" :desc="`${taskList.ctEndTime}截止`"></nut-cell>
            </div>
          </nut-col>
        </nut-row>

      </nut-cell>
      <nut-divider />
    </nut-collapse-item>
  </nut-collapse>
</template>



<script setup>
import { reactive, ref, toRefs, h, onMounted, computed } from 'vue';
import { Category, Find, Cart, Check, MoreX } from '@nutui/icons-vue-taro';
import childrenApi from '../../api/children';
import Taro from '@tarojs/taro';

// let taskList = reactive({
//   ctName: "背诵英语",
//   ctDone: "0",
//   ctEndTime: "2023-10-29 16:00",
//   ctPoints: 5,
//   ctDifficulty: 3,
// })

const child = {
  u_id: "26adeeee-7994-11ee-b962-0242ac120002"
}
// const child = Taro.getStorageSync('child');

async function loadChildrenTaskList() {
  const list = await childrenApi.getChildrenTaskList(child)
  // taskList.ctName = list.data[0].ctName;
  // taskList.ctPoints = list.data[0].ctPoints;
  // taskList.ctEndTime = list.data[0].ctEndTime;
  // taskList.ctDifficulty = list.data[0].ctDifficulty;

  console.log(list);
  return list;
};

const taskList = ref({});
async function handler() {
  taskList.value = await loadChildrenTaskList();
  console.log("tasklist", taskList);
}
onMounted(handler);


const activeNames = ref([1, 2]);
// const value = ref(3); //积分星星

const title = reactive({
  title1: '必做任务',
  title2: '选做任务',
});



// const getChildrenPointsData = async () => {
//   const res = await childrenApi.getChildrenPoints(child);
//   console.log(res);
// };



// async function loadChildrenInfo() {
//   const list = await childrenApi.getChildrenInfo(child)
//   console.log(list);
// };



const onChange = (modelValue, currName, status) => {
  // currName: 当前操作的 collapse-item 的 name
  // status: true 打开 false 关闭
  // console.log(modelValue, currName, status);
};



//date
const state = reactive({
  date: ['2019-12-23', '2019-12-26'],
  isVisible: false,
});

function openSwitch() {
  state.isVisible = true;

};

function closeSwitch() {
  state.isVisible = false;
};

function setChooseValue(param) {
  state.date = [...[param[0][3], param[1][3]]];
};
function select(param) {
  console.log(param);
};

//小导航栏
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

function checkDone(task) {
  if (task.ctDone == "1") {
    return true;
  } else {
    return false;
  }
}

function checkSelective(task) {
  console.log(task);
  if (task.ctSelective == "1") {
    return true;
  } else {
    return false;
  }
}

</script>


<style lang="scss">
.light-orange-cell {
  background-color: #8780d9;
  /* Light orange color */
}

//date
.nut-cell__value {
  flex: initial;
}

//tab
.nut-tabs {
  width: 580px;
}
</style>


