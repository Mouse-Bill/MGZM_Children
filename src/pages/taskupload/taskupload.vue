<template>
  <nut-uploader  :before-xhr-upload="childrenApi.uploadAnserImg"></nut-uploader>
</template>


<script setup>
import { ref } from 'vue';
import childrenApi from '../../api/children.js';
// const beforeXhrUpload = (taroUploadFile, options) => {
//   childrenApi.uploadAnserImg(taroUploadFile,options).then(res => {
//     console.log(res);
//     options.onSuccess?.(res, options);
//   });
  
// };
</script>