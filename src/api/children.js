import http from '../utils/http/http.js';

const getChildrenPoints = (data) => {
  return http.post('/getChildrenPoints', data);
};

const getChildrenInfo = (data) => {
  return http.post('/getChildrenInfo', data);
};

const getChildrenTaskList = (data) => {
  return http.post('/getChildrenTaskList', data);
};


export default {
  getChildrenPoints,
  getChildrenInfo,
  getChildrenTaskList
};
