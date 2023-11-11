<template>
  <nut-uploader :before-xhr-upload="beforeXhrUpload" :auto-upload="false" ref="uploadRef"></nut-uploader>
  <br />
  <nut-button type="success" size="small" @click="submitUpload">手动执行上传</nut-button>
  <nut-button type="warning" size="small" @click="clearUpload">手动清空上传</nut-button>
</template>


<script setup>
import { ref } from 'vue';
import childrenApi from '../../api/children.js';

const uploadRef = ref(null);

const submitUpload = () => {
  uploadRef.value.submit();
};
const clearUpload = () => {
  uploadRef.value.clearUploadQueue();
};

const beforeXhrUpload = (taroUploadFile, options) => {
  options.problemId = '999',
    options.u_id = '20011',
    childrenApi.uploadAnswerImg(taroUploadFile, options)
};
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

.menu-card {
  margin-top: 25px;
  height: 200px;
  /* height: 90%; */
}

.menu-grid {
  --nut-grid-border-color: #ffff;
  --nut-grid-item-text-font-size: 30px;
}
</style>