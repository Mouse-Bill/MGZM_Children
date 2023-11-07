<template>
  <nut-uploader :before-xhr-upload="beforeXhrUpload"></nut-uploader>
</template>


<script setup>
import { ref } from 'vue';
import childrenApi from '../../api/children.js';
const beforeXhrUpload = (taroUploadFile, options) => {
  options.problemId = '999',
  options.u_id = '26adeeee-7994-11ee-b962-0242ac120002',
  childrenApi.uploadAnserImg(taroUploadFile, options)
};
</script>