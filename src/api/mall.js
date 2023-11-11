// import http from '../utils/http/http.js';
import http from '../utils/http/request.js';

const getGoodsList = (data) => {
  return http.post('/getGoodsList', data);
};

const getGoodsListByName = (data) =>{
  return http.post("/searchGoods",data)
}
// const handleChange1 = (val) => {
//   if (val == '0') {
//     console.log('全部商品');
//   } else if (val == '1') {
//     console.log('有库存的商品');
//   } else if (val == '2') {
//     console.log('无库存的商品');
//   } else {
//     console.log('库存排序失败');
//   }
// };

// const handleChange2 = (val) => {
//   if (val == 'a') {
//     console.log('默认排序');
//   } else if (val == 'b') {
//     console.log('积分从高到低排序');
//   } else if (val == 'c') {
//     console.log('积分从低到高排序');
//   } else {
//     console.log('积分排序失败');
//   }
// };

// const tipsClick = () => {
//   ruleVisble.value = true;
// };

// const rankClick = () => {
//   Taro.navigateTo({ url: '../goods/goods' });
// };

// const goDetail = (id) => {
//   Taro.navigateTo({ url: '../goods/goods?id=' + id });
// };

// const search = function () {
//   console.log(state.searchValue);
// };

export default {
  getGoodsList,
  getGoodsListByName,
};
