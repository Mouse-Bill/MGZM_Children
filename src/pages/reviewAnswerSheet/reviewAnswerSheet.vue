<template>
    <nut-cell>
        <nut-space direction="vertical" fill>

            <div class="top-card">
            <nut-cell title="000" desc="未结束" style="margin: 0%;">
                <template #title>
                    <span>{{ TaskId.taskName }}</span>
                </template>

                <template #desc>
                    <span>截止时间：{{ timeHandler(TaskId.taskEndTime) }}</span>
                </template>

            </nut-cell>
        </div>

            <div class="main-card">
            <nut-tabs v-model="tabsValue" :background="`rgba(255, 255, 255, 1)`">
                <nut-tab-pane v-for="problem in problemList" :title="problem.problemTitle" pane-key="0"
                    style="padding: 2px;">
                    <nut-cell v-if="QuestionTypeHandler(problem.ttypeId) == `简答题`">
                        <nut-space direction="vertical" fill>
                            <div>{{ handleContent(problem.problemContent) }}</div>
                            <!-- <nut-tag plain type="warning">{{ problem.problemTag }}</nut-tag> -->
                            <nut-uploader :before-xhr-upload="beforeXhrUpload"></nut-uploader>
                            <nut-divider />

                            <!-- <nut-cell v-for="answer in handleAnswer(problem.problemContent)" :title="answer" style="margin: 0%;;" /> -->

                        </nut-space>
                    </nut-cell>

                    <nut-cell v-if="QuestionTypeHandler(problem.ttypeId) == `单选题`">
                        <nut-space direction="vertical" fill>
                            <div>{{ handleContent(problem.problemContent) }}</div>
                            <!-- <nut-tag plain type="warning">{{ problem.problemTag }}</nut-tag> -->
                            <nut-divider />
                            
                            <nut-checkbox-group v-model="state.checkboxgroup" @change="">
                                <nut-space direction="vertical" fill>
                                    <nut-checkbox icon-size="80" shape="button"
                                        v-for="(answer, index) in handleAnswer(problem.problemContent)" @click="choice(index)"
                                        :label="index" >{{ index + ' ' + answer }}</nut-checkbox>
                                </nut-space>
                                    
                            </nut-checkbox-group>
                            <nut-divider />
                            <!-- <nut-button type='primary' @click="submit()">提交</nut-button> -->
                        </nut-space>
                    </nut-cell>
                </nut-tab-pane>
                <nut-tab-pane title="Q2" pane-key="1"> Tab 2 </nut-tab-pane>
            </nut-tabs>
        </div>
        </nut-space>

    </nut-cell>
</template>
  
<script setup>
import { ref } from 'vue'
import childrenApi from '../../api/children.js';
import Taro from '@tarojs/taro';

const TaskId = ref([]);

const instance = Taro.getCurrentInstance();

var state = ref({
    checkboxgroup: ['A'],
});

const changeBox = () => {
    // state.check01 = true;
};

console.log(instance);
console.log(instance.router.params);
TaskId.value = instance.router.params;
console.log(TaskId.value);


const beforeXhrUpload = (taroUploadFile, options) => {
    options.problemId = '999',
        options.u_id = '20011',
        childrenApi.uploadAnswerImg(taroUploadFile, options)
};


const child = {
    ct_id: "11",
    // u_id: "20011",
};

const answer = {
    ct_id: "11",
    u_id: "20011",
};

const tabsValue = ref('0');

const problemList = ref([]);
async function loadAnswerSheet() {
    await childrenApi.getTaskQuestionList(child).then((res) => {
        console.log(res);
        problemList.value = res.data;
        console.log("ooooooooooooooooo",problemList.value);
    });
}
loadAnswerSheet();


const answerList = ref([]);
async function loadAnswer() {
    await childrenApi.getAnswerInfo(answer).then((res) => {
        console.log(res);
        answerList.value = res.data;
        console.log("nnnnnnnnnnnnnnnnnnnn",answerList.value);
    });
    console.log("answerList.answer", answerList.answer);
}
loadAnswer();


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
    console.log("NNNNN--NNNNNNN", JsonObject.answer);
    return JsonObject.answer;
}

// function handleAnswerInfo(answer) {
//     let JsonObject = JSON.parse(answer);
//     console.log("answerJSON", answer);
//     console.log("---------------", JsonObject.answer);
//     return JsonObject.answer;
// }

function QuestionTypeHandler(QuestionType) {
    if (QuestionType == 1) {
        return "简答题";
    } else if (QuestionType == 2) {
        return "单选题";
    } else if (QuestionType == 3) {
        return "多选题";
    }
}

function choice (index) {
    console.log(index);
    answerSheet.answer = JSON.stringify({"answer":index});
}

const answerSheet ={
        u_id: "20011",
        ct_id: "11",
        problem_id: "999",
        answer: "index",
    }

// function submit() {
//     console.log(answerSheet);
//     console.log("提交中");
//     childrenApi.writeAnswerInfo(answerSheet).then((res) => {
//         console.log(res);
//     });
// }



</script>

<style>
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

.top-card {
  margin: 35px;
  padding: 1%;
  background: #fff;
  /* color: #506AE7; */
  text-shadow: 1px 1px 1px rgba(255, 255, 255, .1);
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.15s ease;
}

</style>