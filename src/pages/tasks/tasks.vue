<template class="page">
  <view style="padding-bottom: 10%;">
    <nut-cell class="top-cell">
      <nut-space direction="vertical" fill>
        <div class="header-count-top">
          <h1>
            当前积分</h1>
        </div>
        <div class="header-count">
          <nut-countup class="count-up" :init-num="0.00" :end-num="points" :speed="5" :during="1"
            :to-fixed="2"></nut-countup>
        </div>

        <div class="top-card" round-radius="18px" style="margin-top: 5%;">
          <!-- <nut-cell class="light-orange-cell" :style="{ '--nut-space-gap': '190px' }"> -->
          <nut-grid :gutter="0" :column-num="2" :center="true" :border="false" class="menu-grid">

            <nut-grid-item>
              <nut-button size="large" shape="round" type="warning" @click="goPointSort()">
                <template #icon>
                  <Category></Category>
                </template>
                积分
              </nut-button>
            </nut-grid-item>
            <nut-grid-item>
              <nut-button size="large" shape="round" type="warning">
                <template #icon>
                  <Check></Check>
                </template>
                资源
              </nut-button>
            </nut-grid-item>
          </nut-grid>
          <!-- </nut-cell> -->
        </div>
      </nut-space>
    </nut-cell>


    <div class="main-card">

      <nut-tabs v-model="tabsValue" :background="`rgba(255, 255, 255, 1)`">
        <nut-tab-pane title="任务看板" pane-key="0" style="padding: 2px;">

          <nut-row>
            <nut-col :span="8">
              <nut-cell :showIcon="true" :desc="state.date && state.date[0] ? `${state.date[0]}` : '请选择'"
                style="color: blue;" @click="openSwitch"></nut-cell>
            </nut-col>
            <nut-col :span="8" style="text-align: center;">
              <nut-cell title="历史任务" @click="viewHistory()"></nut-cell>
            </nut-col>
            <nut-col :span="8">
              <nut-cell :showIcon="true" :desc="state.date && state.date[0] ? `${state.date[1]}` : '请选择'"
                style="color: blue;" @click="openSwitch"></nut-cell>
            </nut-col>
          </nut-row>

          <nut-collapse v-model="activeNames" @change="onChange">

            <nut-collapse-item :name="1" class="collapse-panel">
              <template #title>
                {{ title.title1 }}<nut-divider />
              </template>

              <nut-cell v-for="task in taskList.data" v-show="!checkSelective(task)">
                <nut-row :gutter="10">
                  <nut-col :span="4">
                    <nut-avatar v-if="checkDone(task)" size="50" class="demo-avatar" bg-color="rgb(84,255, 193)"
                      shape="square">
                      <Check color="#fff" />
                    </nut-avatar>
                    <nut-avatar v-else size="50" class="demo-avatar" bg-color="rgb(155,155, 155)" shape="square">
                      <MoreX color="#fff" />
                    </nut-avatar>
                    <nut-tag v-if="checkDone(task)" plain type="warning">{{ finish.finish }}</nut-tag>
                    <nut-tag v-else="!checkDone(task)" plain type="warning">{{ finish.unFinish }}</nut-tag>
                  </nut-col>

                  <nut-col :span="12">
                    <div>{{ task.ctName }}</div>
                    <div>积分 <nut-rate v-model="task.ctPoints" readonly size="10" /></div>

                  </nut-col>
                  <nut-col :span="8">
                    <nut-button v-if="checkDone(task)" plain type="info" @click="reviewTask(task.ctId,task.ctName,task.Des,task.ctEndTime)">
                      去回顾
                    </nut-button>
                    <nut-button v-else="!checkDone(task)" type="info" @click="doTask(task.ctId,task.ctName,task.Des,task.ctEndTime)">
                      去完成
                    </nut-button>
                  </nut-col>

                  <nut-col :span="20">
                    <div>
                      <nut-cell>
                        <template #title>
                          <span>难度系数: {{task.ctDifficulty}}</span>
                        </template>
                        <template #desc>
                          <span>{{timeHandler(task.ctEndTime)}}截止</span>
                        </template></nut-cell>
                    </div>
                  </nut-col>
                </nut-row>

              </nut-cell>
              <!-- <nut-divider /> -->
            </nut-collapse-item>


            <nut-collapse-item :name="2" class="collapse-panel">
              <template #title> {{ title.title2 }} <nut-divider /></template>

              <nut-cell v-for="task in taskList.data" v-show="checkSelective(task)">
                <nut-row :gutter="10">
                  <nut-col :span="4">
                    <nut-avatar v-if="checkDone(task)" size="50" class="demo-avatar" bg-color="rgb(84,255, 193)"
                      shape="square">
                      <Check color="#fff" />
                    </nut-avatar>
                    <nut-avatar v-else size="50" class="demo-avatar" bg-color="rgb(155,155, 155)" shape="square">
                      <MoreX color="#fff" />
                    </nut-avatar>
                    <nut-tag v-if="checkDone(task)" plain type="warning">{{ finish.finish }}</nut-tag>
                    <nut-tag v-else="!checkDone(task)" plain type="warning">{{ finish.unFinish }}</nut-tag>
                  </nut-col>

                  <nut-col :span="12">
                    <div>{{ task.ctName }}</div>
                    <div>积分 <nut-rate v-model="task.ctPoints" readonly size="10" /></div>

                  </nut-col>
                  <nut-col :span="8">
                    <nut-button v-if="checkDone(task)" plain type="info" @click="reviewTask(task.ctId,task.ctName,task.Des,task.ctEndTime)">
                      去回顾
                    </nut-button>
                    <nut-button v-else="!checkDone(task)" type="info" @click="doTask(task.ctId,task.ctName,task.Des,task.ctEndTime)">
                      去完成
                    </nut-button>
                  </nut-col>

                  <nut-col :span="20">
                    <div>
                      <nut-cell>
                        <template #title>
                          <span>难度系数: {{task.ctDifficulty}}</span>
                        </template>
                        <template #desc>
                          <span>{{timeHandler(task.ctEndTime)}}截止</span>
                        </template></nut-cell>
                    </div>
                  </nut-col>
                </nut-row>

              </nut-cell>
            </nut-collapse-item>
          </nut-collapse>
        </nut-tab-pane>
        <nut-tab-pane title="反馈情况" pane-key="1"> Tab 2 </nut-tab-pane>
      </nut-tabs>
      <nut-calendar v-model="state" :visible="state.isVisible" :default-value="state.date" type="range"
        :start-date="`2023-01-01`"  :end-date="`2024-01-01`" @close=""
        @choose="setChooseValue" @select="select" style="padding-bottom: 20%;">
      </nut-calendar>
    </div>
  </view>
</template>



<script setup>
import { reactive, ref, onMounted, computed } from 'vue';
import { Category, Check, MoreX, Clock } from '@nutui/icons-vue-taro';
import { useDidShow } from '@tarojs/taro'
import childrenApi from '../../api/children';
import Taro from '@tarojs/taro';

const tabsValue = ref('0');

useDidShow(() => {
  const tabbar = Taro.getTabBar(Taro.getCurrentInstance().page)
  // tabbar.setSelected(3)

  updateTime()
  // console.log('onShow')
})
const showIcon = ref(false);
const child = Taro.getStorageSync('child');
const finish = ref({
  finish: "已完成",
  unFinish: "未完成",
});
// const child = Taro.getStorageSync('child');
//:is-auto-back-fill="true"
async function loadChildrenTaskList() {
  const list = await childrenApi.getChildrenTaskList(child)
  // console.log(list);
  return list;
};

const points = ref(0);
async function getChildrenPoints() {
  const tmppoints = await childrenApi.getChildrenPoints(child).then(res => {
    // console.log(res.data);
    points.value = res.data;
  })
  // console.log("Got Child Points",tmppoints);
  return points;
};
getChildrenPoints();


const taskList = ref([]);
async function loadHandler() {
  taskList.value = await loadChildrenTaskList();
  // console.log("tasklist", taskList);
}
//onMounted(loadHandler);


const activeNames = ref([1, 2]);
// const value = ref(3); //积分星星

const title = reactive({
  title1: '必做任务',
  title2: '选做任务',
});



function timeHandler(time) {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  // console.log("----month",month);
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  // console.log("timeHandler", `${month}-${day} ${hour}:${minute}`,"time",time,"date",date,"year",year,"month",month,"day",day,"hour",hour,"minute",minute,"second",second,"time",time);
  return `${month}-${day} ${hour}:${minute}`;
}


function doTask(taskId,taskName,taskDes,taskEndTime) {
  Taro.navigateTo({
    url: `/pages/answerSheet/answerSheet?taskId=${taskId}&taskName=${taskName}&taskEndTime=${taskEndTime}&taskDes=${taskDes}`,
  });
  // console.log(taskId,taskName,taskEndTime);
}

function reviewTask(taskId,taskName,taskDes,taskEndTime) {
  Taro.navigateTo({
    url: `/pages/reviewAnswerSheet/reviewAnswerSheet?taskId=${taskId}&taskName=${taskName}&taskEndTime=${taskEndTime}&taskDes=${taskDes}`,
  });
  // console.log(taskId,taskName,taskEndTime);
}



const onChange = (modelValue, currName, status) => {
  // currName: 当前操作的 collapse-item 的 name
  // status: true 打开 false 关闭
  // console.log(modelValue, currName, status);
};



//date
const state = reactive({
  date: [],
  isVisible: false,
});

function goPointSort() {
  Taro.navigateTo({
    url: `/pages/pointSort/pointSort`,
  });
}

function updateTime() {
  const dataList = childrenApi.getChildrenTaskInThisTime(child).then(res => {
    // console.log("Got Child Tasks in this batch time",res.data);
    taskList.value.data = res.data;
    const startDates = [];
    const endDates = [];
    for (let i = 0; i < res.data.length; i++) {
      const element = res.data[i];
      const tempStartTime = new Date(element.ctStartTime);
      const tempEndTime = new Date(element.ctEndTime);
      tempStartTime.setTime(tempStartTime.getTime());
      tempEndTime.setTime(tempEndTime.getTime());
      startDates.push(tempStartTime);
      endDates.push(tempEndTime);
    }
    startDates.sort(function (a, b) {
      return a.getTime() > b.getTime() ? 1 : -1;
    });
    endDates.sort((a, b) => {
      return a.getTime() < b.getTime() ? 1 : -1;
    });
    // console.log("StartDates", startDates);
    // console.log("EndDates", endDates);
    state.date.push(`${startDates[0].getFullYear()}-${startDates[0].getMonth()}-${startDates[0].getDate()}`);
    state.date.push(`${endDates[0].getFullYear()}-${endDates[0].getMonth()}-${endDates[0].getDate()}`);
    // console.log("Task time set done",state);
  })

};

updateTime();

function viewHistory() {
  // console.log("查看历史任务");
  state.isVisible = true;
};


function openSwitch() {
  state.isVisible = true;
};

function setChooseValue(param) {
  state.date[0] = param[0][3];
  state.date[1] = param[1][3];
  // console.log("setChooseValue", state.date[0]);
  closeSwitch();
};
function select(param) {
  // console.log(param);
};

async function closeSwitch() {
  state.isVisible = false;
  const body = {
    u_id: child.u_id,
    startTime: state.date[0],
    endTime: state.date[1],
  }
  // console.log("body", body);
  const tmplist  = await childrenApi.getChildrenPastTaskList(body)
  // console.log("tmplist", tmplist);
  taskList.value = tmplist;

};

//小导航栏
const tab1value = ref(0);
const back = () => {
  // console.log('Click Back');
};
const tabTitle = () => {
  // console.log('Click Title');
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
  // console.log(task);
  if (task.ctSelective == "1") {
    return true;
  } else {
    return false;
  }
}

</script>


<style>
.top-cell {
  margin-top: 0;
  --nut-cell-large-padding: 18px;

  background-image: linear-gradient(135deg, #FFE985 10%, #FA742B 100%);

  width: 100%;
  height: 600px;
  border-bottom-left-radius: 60%;
  border-bottom-right-radius: 60%;
}

.top-card {
  /* margin-top: 25px; */
  /* height: 90%; */
  margin: 3px;
  padding: 1%;
  background: #fff;
  /* color: #506AE7; */
  text-shadow: 1px 1px 1px rgba(255, 255, 255, .1);
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.15s ease;
}

.menu-grid {
  /* --nut-grid-border-color: #ffff; */
  --nut-grid-item-text-font-size: 30px;
  padding: 1%;
  margin: 1%;
}

.count-up {
  font: 300% sans-serif;
  font-weight: bold;
  color: #fff;
  text-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.19);
  margin: auto;
  padding-top: 5%;
}

.header-count {
  text-align: center;
}

.header-count-top {
  text-align: center;
  font: 150% sans-serif;
  font-weight: bold;
  color: #fff;
  text-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.19);
  margin: auto;
  padding-top: 12%;
}

.main-card {
  margin: 35px;
  padding: 1%;
  background: #fff;
  /* color: #506AE7; */
  text-shadow: 1px 1px 1px rgba(255, 255, 255, .1);
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.15s ease;
}

.collapse-panel {
  --nut-collapse-item-padding: 3%;
  --nut-collapse-item-font-size: 35px;
  --nut-collapse-item-color: rgb(27, 27, 27);
  --nut-collapse-wrapper-content-padding: 2% margin: 0%;
  padding-left: 1%;
  padding-right: 1%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 30px;
  border: #f2daa2;
  border-style: dashed;
}

.page {
  background-color: #f5f5f9;
}
</style>


