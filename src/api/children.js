import http from '../utils/http/http.js';

const getChildrenPoints = (data) => {
  return http.post('/getChildrenPoints', data);
};

const getChildrenInfo = (data) => {
  return http.post('/getChildrenInfo', data);
};

export default {
  getChildrenPoints,
  getChildrenInfo
};
