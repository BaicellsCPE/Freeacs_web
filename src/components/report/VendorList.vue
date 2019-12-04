<template>
    <div>
        <div style="width: 50%;height: 400px;"
             id="echartss"></div>
    </div>
</template>

<script>
// 引入echarts
import echarts from 'echarts';

export default {
    mounted(){
        // 基于准备好的dom 初始化echarts实例
        let myChart = echarts.init(document.getElementById('echartss'))
        // 绘制图表 this.echarts1_option是数据
        myChart.setOption(this.echarts1_option);
    },
    data(){
        return{
            echarts1_option:{
                title:{
                    text: '厂商设备数量图'
                },
                tooltip: {},
                xAxis: {
                    data: ['Baicells', 'LTE', 'Marvell', 'NOTION']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    barWidth: 90,
                    itemStyle: {
                        // color: '#333333',
                        normal: {
                            label: {
                                show: true, // 开启显示
                                position: 'top', // 在上方显示
                                color: '#333333',
                                textStyle: { // 数值样式
                                    color: '#333333',
                                    fontSize: 16
                                }
                            }
                        }
                    },
                    data: [90,0,26,1]
                }]
            }
        }
    }
}
</script>