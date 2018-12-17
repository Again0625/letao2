$(function () {
    // 绘制柱状图
    // 基于准备好的dom，初始化echarts实例
    var echarts_1 = echarts.init(document.querySelector('.echarts_1'));

    // 指定图表的配置项和数据
    var option1 = {
        // 大标题
        title: {
            // 小标题
            text: '2018注册人数'
        },
        // 提示框组件
        tooltip: {},
        // 图例
        legend: {
            data: ['人数']
        },
        // x轴数据
        xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        // y轴数据
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [500, 400, 1000, 600, 700, 400]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    echarts_1.setOption(option1);


    // 绘制饼图
    // 基于准备好的dom，初始化echarts实例
    var echarts_2 = echarts.init(document.querySelector('.echarts_2'));

    // 指定图表的配置项和数据
    var option2 = {
        title: {
            text: '热门品牌销售',
            subtext: '2017年12月',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['阿迪', '耐克', '安踏', '新百伦', '特步']
        },
        series: [{
            name: '品牌',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                    value: 335,
                    name: '阿迪'
                },
                {
                    value: 310,
                    name: '耐克'
                },
                {
                    value: 234,
                    name: '安踏'
                },
                {
                    value: 135,
                    name: '新百伦'
                },
                {
                    value: 1548,
                    name: '特步'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    echarts_2.setOption(option2);

})