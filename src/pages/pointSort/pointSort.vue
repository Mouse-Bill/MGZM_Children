<template>
  <view class='echarts'>
    <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' :ec="ec"></ec-canvas>
    
  </view>
  <view class="chartLine">
    <ec-canvas id='mychart-dom-line' canvas-id='mychart-line' :ec="ecline"></ec-canvas>
  </view>
</template>

<script>
import * as echarts from '../../components/ec-canvas/echarts'
import childrenApi from '../../api/children.js';

const child = {
  u_id: "20011",
};
const jsonDX = [];
const jsonDY = [];
// 折线图数据
const jsonDZ = [];



function start(canvas, width, height) {

  async function loadData() {
    await childrenApi.getChildrenPointsRank(child).then((res) => {
      console.log("pointRank", res);
      if (res.data.length > 0) {
        for (var i = 0; i < res.data.length; i++) {
          jsonDX.push(res.data[i].month);
          jsonDY.push(res.data[i].total_points);
          jsonDZ.push(res.data[i].rank_in_month);
        }
      }

      console.log("jsonDX", jsonDX);
      console.log("jsonDY", jsonDY);
      console.log("jsonDZ", jsonDZ);
      
    });
    initChart(canvas, width, height);
    // initChartLine(canvas, width/2, height/2);
  }
  loadData();
  
};



function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  })
  canvas.setChart(chart)
  const option = {
    tooltip: {
      trigger: 'axis',
      // formatter: '{b0}<br />{a0}: {c0}',
      axisPointer: {
        type: 'shadow'
      }
    
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: jsonDX,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '积分',
      },
      {
        type: 'value',
        name: '排名',
        min: 0,
        max: 10,
        interval: 1,
        axisLabel: {
          formatter: '{value} 位'
        }
      }
    ],
    series: [
      {
        name: '积分',
        type: 'bar',
        barWidth: '60%',
        data: jsonDY,
      },{
        name: '排名',
        type: 'line',
        yAxisIndex: 1,
        data: jsonDZ,
      }
    ]
  } 
  chart.setOption(option)
  return chart
}

// function initChartLine(canvas, width, height) {
//   // const canvasLine = canvas/2;
//   // const widthLine = width/2;
//   // const heightLine = height/2;
//   const chartLine = echarts.init(canvas, null, {
//     width: width,
//     height: height
//   })
//   canvasLine.setChart(chartLine)
//   const lineOption = {
//   xAxis: {
//     type: 'category',
//     data: jsonDX
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: jsonDZ,
//       type: 'line'
//     }
//   ]
// };
// chartLine.setOption(lineOption)
//   return chartLine
// }


export default {
  data() {
    return {
      ec: {
        onInit: start
      },
      // ecline: {
      //   onInit: initChartLine
      // }
    }
  }
}
</script>

<style>
.echarts {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
/* .chartLine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
} */

ec-canvas {
  width: 100%;
  height: 80%;
}
</style>