<template>
  <nut-cell v-if="isLoaded">
    <nut-space direction="vertical" fill>


      <nut-cell title="000" desc="未结束" style="margin: 0%;">
        <template #title>
          <span>{{ taskInfo.taskName }}</span>
        </template>

        <template #desc>
          <span>截止时间：{{ timeHandler(taskInfo.taskEndTime) }}</span>
        </template>

      </nut-cell>
      <nut-tabs v-model="tabsValue" :background="`rgba(255, 255, 255, 1)`">
        <nut-tab-pane v-for="(problem, index) in problemList" :title="problem.problemTitle" :pane-key="index"
          style="padding: 2px;">
          <nut-cell v-if="QuestionTypeHandler(problem.ttypeId) == `简答题`">
            <nut-space direction="vertical" fill>
              <div>{{ handleContent(problem.problemContent) }}</div>
              <nut-uploader :before-xhr-upload="beforeXhrUpload" :auto-upload="false" ref="uploadRef"
                :data="{ problemId: problem.problemId, u_id: Taro.getStorageSync('child').u_id, ctId: taskInfo.taskId }"
                maximum="9"></nut-uploader>
              <br />
              <nut-button type="success" size="small" @click="submitUpload">手动执行上传</nut-button>
              <nut-button type="warning" size="small" @click="clearUpload">手动清空上传</nut-button>
              <nut-divider />
              <!-- <nut-button type='primary' @click="submit(problem.ttypeId)">去提交</nut-button> -->
              <nut-button type='primary' @click="">去提交</nut-button>
            </nut-space>
          </nut-cell>

          <nut-cell v-if="QuestionTypeHandler(problem.ttypeId) == `单选题`">
            <nut-space direction="vertical" fill>
              <div>{{ handleContent(problem.problemContent) }}</div>
              <nut-divider />
              <nut-checkbox-group v-model="state.checkboxgroup" @change="">
                <nut-space direction="vertical" fill>
                  <nut-checkbox icon-size="80" shape="button"
                    v-for="(answer, index) in handleAnswer(problem.problemContent)" @click="choice(index)"
                    :label="index">{{ index + ' ' + answer }}</nut-checkbox>
                </nut-space>

              </nut-checkbox-group>
              <nut-divider />
              <nut-button type='primary' @click="submit(problem.problemId)">提交</nut-button>
            </nut-space>
          </nut-cell>
        </nut-tab-pane>
      </nut-tabs>
    </nut-space>

  </nut-cell>
</template>
  
<script setup>
import { ref } from 'vue'
import childrenApi from '../../api/children.js';
import Taro from '@tarojs/taro';

const isLoaded = ref(false);

const taskInfo = ref([]);

const instance = Taro.getCurrentInstance();

var state = ref({
  checkboxgroup: ['1'],
});

const changeBox = () => {
  // state.check01 = true;
};

console.log(instance);
console.log(instance.router.params);
taskInfo.value = instance.router.params;
console.log(taskInfo.value);


const taskRequestBody = {
  ct_id: taskInfo.value.taskId,
}

const tabsValue = ref('0');

const problemList = ref([]);
async function loadAnswerSheet() {
  await childrenApi.getTaskQuestionList(taskRequestBody).then((res) => {
    console.log(res);
    problemList.value = res.data;
    console.log(problemList.value);
    isLoaded.value = true;
  });
}
loadAnswerSheet();

// ttypeId

function timeHandler(time) {
  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  console.log(date)
  return `${month}-${day} ${hour}:${minute}`;
}

function handleContent(ProblemContent) {
  let JsonObject = JSON.parse(ProblemContent);
  console.log("yyyyyyyyyyyyyyyyyyyyyy", ProblemContent);
  return JsonObject.content;
}




function handleAnswer(ProblemContent) {
  let JsonObject = JSON.parse(ProblemContent);
  console.log("mmmmmmmmmmmmmm", ProblemContent);
  console.log("NNNNNNNNNNNNNNN", JsonObject.answer);
  return JsonObject.answer;
}

function QuestionTypeHandler(QuestionType) {
  if (QuestionType == 1) {
    return "简答题";
  } else if (QuestionType == 2) {
    return "单选题";
  } else if (QuestionType == 3) {
    return "多选题";
  }
}

function choice(index) {
  console.log(index);
  answerSheet.answer = { "answer": index };
  answerSheet.problem_id = problemList.value[tabsValue.value].problemId;
}

const answerSheet = {
  u_id: Taro.getStorageSync('child').u_id,
  ct_id: taskInfo.value.taskId,
  problem_id: null,
  answer: null,
}

function submit(problem_id) {
  answerSheet.problem_id = problem_id
  console.log(uploadRef);
  console.log(answerSheet);
  console.log("提交中");
  childrenApi.writeAnswerInfo(answerSheet).then((res) => {
    console.log(res);
  });

}

// const submit = async () => {
//     Taro.navigateTo({
//         url: '/pages/taskupload/taskupload'
//     });
// };



// 图片提交
const uploadRef = ref(null);

const submitUpload = () => {
  uploadRef.value[0].submit();
};
const clearUpload = () => {
  uploadRef.value[0].clearUploadQueue();
};

const beforeXhrUpload = (taroUploadFile, options) => {
  // options.problemId = problemId,
  // options.u_id = Taro.getStorageSync('child').u_id,
  // options.ct_id = TaskId.value.taskId,
  console.log("options", options);
  childrenApi.uploadAnswerImg(taroUploadFile, options)
};


</script>
