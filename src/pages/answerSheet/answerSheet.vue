<template>
    <nut-cell>
        <nut-space direction="vertical" fill>


            <nut-cell title="000" sub-title="截止时间" desc="未结束" style="margin: 0%;">
                <template #title>
                    <span>Task {{ TaskId.taskId }}</span>
                </template>

            </nut-cell>
            <nut-tabs v-model="tabsValue" :background="`rgba(255, 255, 255, 1)`">
                <nut-tab-pane title="Q1" pane-key="0" style="padding: 2px;">
                    <nut-cell>
                        <nut-space direction="vertical" fill>
                            <div>题目名称</div>
                            <nut-uploader :before-xhr-upload="beforeXhrUpload"></nut-uploader>
                            <nut-divider />

                            <nut-cell title="选项01" style="margin: 0%;;" />
                            <nut-cell title="选项02" style="margin: 0%;" />
                            <nut-cell title="选项03" style="margin: 0%;" />
                            <nut-cell title="选项04" style="margin: 0%;" />

                        </nut-space>
                    </nut-cell>
                </nut-tab-pane>
                <nut-tab-pane title="Q2" pane-key="1"> Tab 2 </nut-tab-pane>
            </nut-tabs>
        </nut-space>

    </nut-cell>
</template>
  
<script setup>
import { ref } from 'vue'
import childrenApi from '../../api/children.js';
import Taro from '@tarojs/taro';

const TaskId = ref('1');

const instance = Taro.getCurrentInstance();

console.log(instance);
console.log(instance.router.params);
TaskId.value = instance.router.params;
console.log(TaskId.value);

// useLoad((opsetions) => {
//     console.log(opsetions);
//     TaskId.value = opsetions;
//     console.log(TaskId.value);
// });

const beforeXhrUpload = (taroUploadFile, options) => {
    options.problemId = '999',
        options.u_id = '26adeeee-7994-11ee-b962-0242ac120002',
        childrenApi.uploadAnserImg(taroUploadFile, options)
};


const child = {
    ct_id: "99550e7e-7993-11ee-b962-0242ac120002",
    // u_id: "26adeeee-7994-11ee-b962-0242ac120002",

};










const submit = async () => {
    Taro.navigateTo({
        url: '/pages/taskupload/taskupload'
    });
};


async function loadAnswerSheet() {
    await childrenApi.getTaskQuestionList(child).then((res) => {
        console.log(res);
    });
}
loadAnswerSheet();



</script>