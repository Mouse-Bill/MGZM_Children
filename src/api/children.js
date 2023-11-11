// import http from '../utils/http/http.js';
import http from '../utils/http/request.js';
import Taro from '@tarojs/taro';


const getChildrenPoints = (data) => {
  return http.post('/getChildrenPoints', data);
};

const getChildrenPointsRank = (data) => {
  return http.post('/getChildrenPointsRank', data);
};

const getChildrenInfo = (data) => {
  return http.post('/getChildrenInfo', data);
};

const getChildrenTaskList = (data) => {
  return http.post('/getChildrenTaskList', data);
};

const getChildrenTaskInThisTime = (data) => {
  return http.post('/getChildrenTaskInthisTime', data);
}

const getTaskQuestionList = (data) => {
  return http.post('/getTaskQuestionList', data);
}

const writeAnswerInfo = (data) => {
  return http.post('/writeAnswerInfo', data);
}

const getChildrenPastTaskList = (data) => {
  return http.post('/getChildrenPastTaskList', data);
}

<<<<<<< HEAD
=======
const getChildrenAvatar = (data) => {
  return http.post('/getChildrenAvatar',data);
}
>>>>>>> 5c482313c90628b6652aa1435a1de8acfb78b6f9

const getAnswerInfo = (data) => {
  return http.post('/getAnswerInfo', data);
}



<<<<<<< HEAD

=======
>>>>>>> 5c482313c90628b6652aa1435a1de8acfb78b6f9
const uploadAnswerImg = (taroUploadFile, options) => {
  // const uploadTask = taroUploadFile({
  //   url: 'http://localhost:8080/uploadTaskImg', //仅为示例，非真实的接口地址
  //   filePath: data.taroFilePath,
  //   name: 'file',
  //   formData: {
  //     user: 'test',
  //   },
  //   success: function (res) {
  //     var data = res.data;
  //     //do something
  //   },
  // });
  // uploadTask.progress((res) => {
  //   console.log('上传进度', res.progress);
  //   console.log('已经上传的数据长度', res.totalBytesSent);
  //   console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
  // });
  //taroUploadFile  是 Taro.uploadFile ， 你也可以自定义设置其它函数
  const uploadTask = taroUploadFile({
    url: 'http://localhost:8080/uploadGoodsPicture',
    filePath: options.taroFilePath,
    fileType: options.fileType,
    header: {
      'Content-Type': 'multipart/form-data',
      ...options.headers,
    }, //
    formData: {
      //u_id: Taro.getStorageSync('child').u_id,
      u_id: options.u_id,
      // problemId: options.problemId,
    },
    name: options.name,
    success: function (res) {
      console.log('上传成功------', res);
    },
  });
  options.onStart?.(options);
  uploadTask.progress((res) => {
    console.log('上传进度', res.progress);
    console.log('已经上传的数据长度', res.totalBytesSent);
    console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
  });
  uploadTask.then((res) => {
    console.log('上传成功', res);
    options.onSuccess?.(res);
  });

  // uploadTask.abort(); // 取消上传任务
};



export default {
  getChildrenPoints,
  getChildrenInfo,
  getChildrenTaskList,
  uploadAnswerImg,
  getChildrenTaskInThisTime,
  getTaskQuestionList,
  writeAnswerInfo,
  getChildrenPastTaskList,
<<<<<<< HEAD
=======
  getChildrenAvatar,
>>>>>>> 5c482313c90628b6652aa1435a1de8acfb78b6f9
  getChildrenPointsRank,
  getAnswerInfo,
};
