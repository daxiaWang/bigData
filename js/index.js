// console.log("index.js")

// GET("/public/topInfo.json", {}, function(res) {
//     console.log("res", res)
// })

new Vue({
    el: "#app",
    data: function() {
        return {
            incomeData: [{
                    name: "一月",
                    value: 500,
                    value1: 100,
                    value2: 320,
                    value3: 90
                },
                {
                    name: "二月",
                    value: 800,
                    value1: 40,
                    value2: 220,
                    value3: 390
                },
                {
                    name: "三月",
                    value: 300,
                    value1: 200,
                    value2: 620,
                    value3: 362
                },
                {
                    name: "四月",
                    value: 300,
                    value1: 200,
                    value2: 620,
                    value3: 162
                },
                {
                    name: "五月",
                    value: 300,
                    value1: 200,
                    value2: 620,
                    value3: 562
                }, {
                    name: "六月",
                    value: 250,
                    value1: 200,
                    value2: 620,
                    value3: 462
                },
                {
                    name: "七月",
                    value: 500,
                    value1: 200,
                    value2: 620,
                    value3: 162
                },
                {
                    name: "八月",
                    value: 340,
                    value1: 200,
                    value2: 620,
                    value3: 262
                },
                {
                    name: "九月",
                    value: 700,
                    value1: 200,
                    value2: 620,
                    value3: 62
                },
                {
                    name: "十月",
                    value: 200,
                    value1: 200,
                    value2: 620,
                    value3: 912
                }, {
                    name: "十一月",
                    value: 600,
                    value1: 200,
                    value2: 620,
                    value3: 162
                },
                {
                    name: "十二月",
                    value: 390,
                    value1: 200,
                    value2: 620,
                    value3: 916
                },
            ]
        }
    },
    mounted() {
        // this.initMap();
        this.initTimeline();
        this.initProjectIncome()
        this.initOrderTrend()
        this.initReviewBox()
        this.initClassfiyBox()
        this.initIncrementBox()
    },
    methods: {
        initTimeline() {
            let $mapBox = echarts.init(document.getElementById("mapBox"))
            window.addEventListener('resize', function() {
                $mapBox.resize();
            });
            let monthes = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

            let value = [
                [{ name: '上海', coord: [121.48, 31.22] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }, { name: '重庆', coord: [106.54, 29.59] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }, { name: '重庆', coord: [106.54, 29.59] }, { name: '武汉', coord: [114.31, 30.52] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }, { name: '重庆', coord: [106.54, 29.59] }, { name: '武汉', coord: [114.31, 30.52] }, { name: '济南', coord: [117, 36.65] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }, { name: '重庆', coord: [106.54, 29.59] }, { name: '武汉', coord: [114.31, 30.52] }, { name: '济南', coord: [117, 36.65] }, { name: '哈尔滨', coord: [126.63, 45.75] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }, { name: '重庆', coord: [106.54, 29.59] }, { name: '武汉', coord: [114.31, 30.52] }, { name: '济南', coord: [117, 36.65] }, { name: '哈尔滨', coord: [126.63, 45.75] }, { name: '成都', coord: [104.06, 30.67] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }, { name: '重庆', coord: [106.54, 29.59] }, { name: '武汉', coord: [114.31, 30.52] }, { name: '济南', coord: [117, 36.65] }, { name: '哈尔滨', coord: [126.63, 45.75] }, { name: '成都', coord: [104.06, 30.67] }, { name: '重庆', coord: [106.54, 29.59] }],
                [{ name: '上海', coord: [121.48, 31.22] }, { name: '香港', coord: [114.25, 22.25] }, { name: '澳门', coord: [113.5, 22.2] }, { name: '北京', coord: [116.46, 39.92] }, { name: '大连', coord: [121.62, 38.92] }, { name: '广州', coord: [113.23, 23.16] }, { name: '天津', coord: [117.2, 39.13] }, { name: '南京', coord: [118.78, 32.04] }, { name: '深圳', coord: [114.07, 22.62] }, { name: '苏州', coord: [120.62, 31.32] }, { name: '杭州', coord: [120.19, 30.26] }, { name: '厦门', coord: [118.1, 24.46] }, { name: '重庆', coord: [106.54, 29.59] }, { name: '武汉', coord: [114.31, 30.52] }, { name: '济南', coord: [117, 36.65] }, { name: '哈尔滨', coord: [126.63, 45.75] }, { name: '成都', coord: [104.06, 30.67] }, { name: '重庆', coord: [106.54, 29.59] }, { name: '长沙', coord: [113, 28.21] }]
            ];


            let itemStyle = {
                normal: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            };
            // console.log("monthes", monthes)
            let option = {

                baseOption: {
                    timeline: {
                        axisType: 'category',
                        orient: 'vertical',
                        autoPlay: true,
                        inverse: true,
                        playInterval: 5000,
                        left: 10,
                        right: null,
                        top: 20,
                        bottom: 20,
                        width: 55,
                        height: null,
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#ddd'
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        symbol: 'none',
                        lineStyle: {
                            color: '#555'
                        },
                        checkpointStyle: {
                            color: '#bbb',
                            borderColor: '#777',
                            borderWidth: 2
                        },
                        controlStyle: {
                            showNextBtn: false,
                            showPrevBtn: false,
                            normal: {
                                color: '#666',
                                borderColor: '#666'
                            },
                            emphasis: {
                                color: '#aaa',
                                borderColor: '#aaa'
                            }
                        },
                        data: monthes
                    },
                    title: {
                        text: '',
                        textAlign: 'center',
                        left: 180,
                        bottom: 10,
                        textStyle: {
                            fontSize: 70,
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    },
                    // backgroundColor: '#333',

                    // series: [{
                    //     name: '中国',
                    //     type: 'map',
                    //     mapType: 'china',
                    //     // selectedMode: 'multiple',
                    //     "label": {
                    //         "emphasis": {
                    //             "show": false
                    //         },
                    //         "normal": {
                    //             "show": false
                    //         }
                    //     },
                    //     tooltip: {
                    //         formatter: function(params) {
                    //             // return d.name
                    //             let htmlStr = `
                    //                 <div style='font-size:18px;'> ${params.name}</div>
                    //                 <p style='text-align:left;margin-top:-10px;'>
                    //                     区域对应数据value：${params.name}<br/>
                    //                     性能perf：${params.name}<br/>
                    //                     下载速度downloadSpeep：${params.name}<br/>
                    //                     可用性usability：${params.name}<br/>
                    //                     监测点数point：${params.name}<br/>
                    //                 </p>
                    //                 `
                    //             return htmlStr;
                    //         }
                    //     },
                    //     markPoint: {
                    //         symbol: 'pin',
                    //         symbolSize: 30,
                    //         label: {
                    //             normal: {
                    //                 show: true,
                    //                 formatter: function(d) {
                    //                     return d.name
                    //                 }
                    //             }
                    //         },
                    //         effect: {
                    //             show: true,
                    //             showBlur: 10,
                    //             // color: 'rgba(255, 255, 255, 0.5)'
                    //         },
                    //         data: [{
                    //             name: '重庆',
                    //             coord: [106.54, 29.59]
                    //         }]
                    //     }
                    // }],
                    //animationDurationUpdate: 1000,
                    //animationEasingUpdate: 'quinticInOut'
                },
                options: [{
                    visualMap: {
                        right: '10%',
                        bottom: '10%',
                        splitList: [
                            { start: 500, end: 600 },
                            { start: 400, end: 500 },
                            { start: 300, end: 400 },
                            { start: 200, end: 300 },
                            { start: 100, end: 200 },
                            { start: 0, end: 100 },
                        ],
                        textStyle: {
                            color: "#fff"
                        }
                        // min: 0,
                        // max: 8500,
                        // right: '10%',
                        // bottom: '10%',
                        // text: ['高', '低'], // 文本，默认为数值文本
                        // calculable: true,
                        // textStyle: {
                        //     color: "#fff"
                        // }
                    },
                    series: [{
                        center: "center",
                        "data": [{
                                name: '北京',
                                value: 725.0529252
                            },
                            {
                                name: '天津',
                                value: 904.278137
                            },
                            {
                                name: '河北',
                                value: 4765.636856
                            },
                            {
                                name: '山西',
                                value: 3903.235364
                            },
                            {
                                name: '内蒙古',
                                value: 2938.751868
                            },
                            {
                                name: '辽宁',
                                value: 3115.487365
                            },
                            {
                                name: '吉林',
                                value: 1205.00734
                            },
                            {
                                name: '黑龙江',
                                value: 962.5167856
                            },
                            {
                                name: '上海',
                                value: 1057.306289
                            },
                            {
                                name: '江苏',
                                value: 2548.488597
                            },
                            {
                                name: '浙江',
                                value: 1867.647803
                            },
                            {
                                name: '安徽',
                                value: 1471.982985
                            },
                            {
                                name: '福建',
                                value: 1721.650902
                            },
                            {
                                name: '江西',
                                value: 1548.718086
                            },
                            {
                                name: '山东',
                                value: 5083.987678
                            },
                            {
                                name: '河南',
                                value: 3428.966325
                            },
                            {
                                name: '湖北',
                                value: 2248.837357
                            },
                            {
                                name: '湖南',
                                value: 2385.493622
                            },
                            {
                                name: '广东',
                                value: 2741.71366
                            },
                            {
                                name: '广西',
                                value: 1525.26922
                            },
                            {
                                name: '海南',
                                value: 226.455853
                            },
                            {
                                name: '重庆',
                                value: 1220.577822
                            },
                            {
                                name: '四川',
                                value: 2990.743219
                            },
                            {
                                name: '贵州',
                                value: 1350.156798
                            },
                            {
                                name: '云南',
                                value: 1667.803895
                            },
                            {
                                name: '陕西',
                                value: 1877.289381
                            },
                            {
                                name: '甘肃',
                                value: 1233.232202
                            },
                            {
                                name: '青海',
                                value: 457.2709503
                            },
                            {
                                name: '宁夏',
                                value: 599.0952262
                            },
                            {
                                name: '新疆',
                                value: 1123.991132
                            },
                        ],
                        "label": {
                            "emphasis": {
                                "show": false
                            },
                            "normal": {
                                "show": false
                            }
                        },
                        "mapType": "china",
                        "roam": true,
                        "type": "map"
                    }]
                }]
            };

            $mapBox.setOption(option);
        },
        initMap() {
            // mapBox
            let $mapBox = echarts.init(document.getElementById("mapBox"))

            // 指定图表的配置项和数据
            let option = barOptionMobiSub = {
                baseOption: {
                    timeline: {
                        axisType: 'category',
                        realtime: true,
                        autoPlay: false,
                        symbolSize: 8,
                        orient: 'vertical',
                        inverse: true,
                        // z: 2,
                        top: 30,
                        right: 'auto',
                        bottom: 10,
                        left: '80%',
                        data: [],
                        label: {
                            interval: 0,
                            color: '#1781bf'
                        },
                        // symbol: 'roundRect',
                        symbol: 'pin',
                        lineStyle: {
                            show: true,
                            color: '#1781bf',
                            width: 1,
                            type: 'dotted'
                        },
                        controlStyle: {
                            showPlayBtn: false,
                            showPrevBtn: false,
                            showNextBtn: false
                        },
                        itemStyle: {
                            color: '#1781bf'
                        },
                        checkpointStyle: {
                            symbol: 'none'
                        },
                        tooltip: {
                            formatter: []
                        },
                        grid: { containLabel: true },
                        series: [{ type: 'bar' }]
                    }
                },
                options: [{
                    title: {
                        text: '',
                        left: '30%'
                    },
                    legend: {
                        data: ['累积流量', '累积耗电'],
                        orient: 'vertical',
                        left: 0
                    },
                    toolbox: {
                        feature: {
                            dataView: {}
                        }
                    },
                    tooltip: {},
                    xAxis: {
                        position: 'top',
                        axisLabel: {
                            rotate: 45
                        }
                    },
                    yAxis: {
                        data: [],
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            rotate: -45
                        },
                        offset: 0,
                        gridIndex: 0,
                        triggerEvent: true
                    },
                    grid: {
                        left: '20%',
                        right: '20%'
                            // bottom: 80
                    },
                    series: [{
                            name: '累积流量',
                            type: 'bar',
                            data: [],
                            animationDelay: function(idx) {
                                return idx * 10
                            }
                        },
                        {
                            name: '累积耗电',
                            type: 'bar',
                            data: [],
                            animationDelay: function(idx) {
                                return idx * 10 + 100
                            }
                        }
                    ],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function(idx) {
                        return idx * 5
                    }
                }]
            }

            // 使用刚指定的配置项和数据显示图表。
            $mapBox.setOption(option);
        },
        initProjectIncome() {
            let $incomepBox = echarts.init(document.getElementById("projectIncome"));
            window.addEventListener('resize', function() {
                $incomepBox.resize();
            });


            let labelSetting = {
                normal: {
                    show: true,
                    position: 'top',
                    offset: [10, 0],
                    textStyle: {
                        fontSize: 10,
                        color: "#fff"
                    }
                }
            };
            let datas = [],
                datas1 = [],
                datas2 = [],
                datas3 = [],
                xName = [];
            this.incomeData.forEach(value => {
                datas.push(value.value)
                datas1.push(value.value1)
                datas2.push(value.value2)
                datas3.push(value.value3)
                xName.push(value.name)
            });
            // console.log("datas", datas)
            let option = {
                grid: {
                    left: 60,
                    top: 40, // 设置条形图的边距
                    right: 20,
                    bottom: 40
                },
                xAxis: {
                    data: xName,
                    show: true,
                    position: 'bottom', // x轴的位置
                    offset: 5, // x轴相对于默认位置的偏移
                    axisLabel: {
                        verticalAlign: 'middle',
                        margin: 15,
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                    axisLine: {
                        show: true,
                        // color: '#fff',
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.35)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    show: true,
                    name: '亿元', // 轴名称
                    nameLocation: 'end', // 轴名称相对位置value
                    offset: 5, // x轴相对于默认位置的偏移
                    nameTextStyle: { // 坐标轴名称样式
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: [0, 0, 10, -40] // 坐标轴名称相对位置
                    },
                    nameGap: 5, // 坐标轴名称与轴线之间的距离
                    axisLabel: {
                        verticalAlign: 'middle',
                        color: 'rgba(255, 255, 255, 0.8)',
                        // fontSize: '12'
                    },
                    axisLine: {
                        show: false,
                        color: '#fff',
                    },
                    splitLine: { // gird区域中的分割线
                        show: true, // 是否显示
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                legend: {
                    data: ['每月计划收入', '每月实际收入', '2020同期', '2019同期'],
                    right: 0,
                    // itemWidth: "10",
                    // itemHeight: "8",
                    icon: "square",
                    textStyle: {
                        color: "#fff"
                    }
                },
                series: [{
                        name: '每月计划收入', // blue bar
                        type: 'pictorialBar',
                        symbol: 'rect',
                        barWidth: '20%',
                        // label: labelSetting,
                        barGap: '10%',
                        barCategoryGap: '90%',
                        itemStyle: {
                            normal: {
                                barMaxWidth: '20%',
                                barBorderRadius: 100,
                                color: '#00FBCC',
                                // color: function(params) {
                                //     var color;

                                //     color = {
                                //         type: "linear",
                                //         x: 0,
                                //         y: 1,
                                //         x2: 0,
                                //         y2: 0,
                                //         colorStops: [{
                                //                 offset: 0,
                                //                 color: "#00FBCC" // 0% 处的颜色
                                //             },
                                //             {
                                //                 offset: 1,
                                //                 color: "#00FBCC" // 100% 处的颜色
                                //             }
                                //         ]
                                //     }
                                //     return color;
                                // },
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: ['60%', '60%'],
                        data: datas,
                        animationEasing: "elasticOut"
                    },
                    {
                        name: '每月实际收入', // blue bar
                        type: 'pictorialBar',
                        symbol: 'rect',
                        barWidth: '20%',
                        barGap: '10%',
                        barCategoryGap: '90%',
                        itemStyle: {
                            normal: {
                                barMaxWidth: '20%',
                                barBorderRadius: 100,
                                color: '#FFEA00'
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: ['60%', '60%'],
                        data: datas1,
                        animationEasing: "elasticOut"
                    },
                    {
                        name: '2020同期', // blue bar
                        type: 'pictorialBar',
                        symbol: 'rect',
                        barWidth: '20%',
                        barGap: '10%',
                        barCategoryGap: '90%',
                        // symbolOffset: ['0%', '0%'],
                        itemStyle: {
                            normal: {
                                barMaxWidth: '20%',
                                barBorderRadius: 100,
                                color: '#0091FF'
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: ['60%', '60%'],
                        data: datas2,
                        animationEasing: "elasticOut"
                    },
                    {
                        name: '2019同期', // blue bar
                        type: 'pictorialBar',
                        symbol: 'rect',
                        barWidth: '20%',
                        barGap: '10%',
                        barCategoryGap: '90%',
                        // symbolOffset: ['0%', '0%'],
                        itemStyle: {
                            normal: {
                                barMaxWidth: '20%',
                                barBorderRadius: 100,
                                color: '#6DD400'
                            }
                        },
                        symbolRepeat: true,
                        symbolSize: ['60%', '60%'],
                        data: datas3,
                        animationEasing: "elasticOut"
                    },
                ]
            };

            $incomepBox.setOption(option);
        },
        initOrderTrend() {
            let $orderTrendBox = echarts.init(document.getElementById("orderTrend"));
            window.addEventListener('resize', function() {
                $orderTrendBox.resize();
            });
            let option = {
                grid: {
                    left: '3%',
                    right: '20%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        verticalAlign: 'middle',
                        margin: 20,
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                    axisLine: {
                        show: true,
                        // color: '#fff',
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.35)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    nameLocation: 'end', // 轴名称相对位置value
                    offset: 5, // x轴相对于默认位置的偏移
                    nameTextStyle: { // 坐标轴名称样式
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: [0, 0, 10, -40] // 坐标轴名称相对位置
                    },
                    nameGap: 5, // 坐标轴名称与轴线之间的距离
                    axisLabel: {
                        verticalAlign: 'middle',
                        color: 'rgba(255, 255, 255, 0.8)',
                        // fontSize: '12'
                    },
                    axisLine: {
                        show: false,
                        color: '#fff',
                    },
                    splitLine: { // gird区域中的分割线
                        show: true, // 是否显示
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            $orderTrendBox.setOption(option);
        },
        initReviewBox() {
            let pieDatas = [
                { value: 1048, name: '已评审需求' },
                { value: 335, name: '评审中需求' },
                { value: 310, name: '待评审需求' }
            ]
            let totalNum = 0
                // totalNum = pieDatas.reduce((pre, cur) => {
                //     return pre + cur.value
                // }, 0)

            pieDatas.forEach(function(value, index, array) {
                totalNum += value.value;
            });
            let $reviewBox = echarts.init(document.getElementById("reviewBox"));
            window.addEventListener('resize', function() {
                $reviewBox.resize();
            });
            let option = {
                //设置主副标题
                title: {
                    show: true,
                    text: "总需求数", //主标题
                    subtext: totalNum, //副标题：企业数量值，此处用标题方式来显示
                    left: "center",
                    top: "40%",
                    z: 0,
                    zlevel: 100,
                    textStyle: { //设置主标题的 样式
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontSize: 14
                    },
                    subtextStyle: { //设置副标题的样式
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 21,
                        fontWeight: 600
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    data: ['已评审需求', '评审中需求', '待评审需求'],
                    right: 0,
                    orient: 'vertical',
                    icon: 'circle',
                    textStyle: {
                        color: "#fff"
                    }
                },
                series: [{
                    name: '总需求数',
                    type: 'pie',
                    radius: ['43%', '55%'],
                    // center: ['30%', '50%'],
                    labelLine: {
                        length: 10,
                    },
                    label: {
                        formatter: '{b|{b}} \n{c|{c}}  ',
                        backgroundColor: '#7FC9FB',
                        borderColor: '#7FC9FB',
                        borderWidth: 1,
                        borderRadius: 2,
                        padding: 3,
                        align: 'center',
                        rich: {
                            color: '#0C143D',
                            fontSize: 12,
                            a: {
                                color: '#6E7079',
                                lineHeight: 22,
                                align: 'center'
                            },
                            hr: {
                                borderColor: '#8C8D8E',
                                width: '100%',
                                borderWidth: 1,
                                height: 0
                            },
                            b: {
                                color: '#0C143D',
                                fontSize: 12,
                            }
                        }
                    },
                    data: pieDatas
                }]
            };
            $reviewBox.setOption(option);
        },

        initClassfiyBox() {
            let lineStyle = {
                // color: '#5470C6',
                width: 2,
                type: 'dashed'
            }
            let $classfiyBox = echarts.init(document.getElementById("classfiyBox"));
            let option = {
                grid: {
                    left: '15%',
                    right: '15%',
                    top: '15%',
                    // containLabel: true
                },
                legend: {
                    type: "scroll",
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问'],
                    // orient: 'vertical',
                    bottom: 0,
                    icon: 'square',
                    textStyle: {
                        color: "#fff"
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    // offset: "5", // x轴相对于默认位置的偏移
                    axisLabel: {
                        verticalAlign: 'middle',
                        margin: 20,
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                    axisLine: {
                        show: true,
                        // color: '#fff',

                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.35)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    nameLocation: 'end', // 轴名称相对位置value
                    // offset: 5, // x轴相对于默认位置的偏移
                    nameTextStyle: { // 坐标轴名称样式
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: [0, 0, 10, -40] // 坐标轴名称相对位置
                    },
                    nameGap: 5, // 坐标轴名称与轴线之间的距离
                    axisLabel: {
                        show: false,
                        verticalAlign: 'middle',
                        color: 'rgba(255, 255, 255, 0.8)',
                        // fontSize: '12'
                    },
                    axisLine: {
                        show: false,
                        color: '#fff',
                    },
                    splitLine: { // gird区域中的分割线
                        show: true, // 是否显示
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        lineStyle: lineStyle,
                        label: {
                            show: true,
                            position: 'top',
                            color: "#fff"
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        lineStyle: lineStyle,
                        label: {
                            show: true,
                            position: 'top',
                            color: "#fff"
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        lineStyle: lineStyle,
                        label: {
                            show: true,
                            position: 'top',
                            color: "#fff"
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        lineStyle: lineStyle,
                        label: {
                            show: true,
                            position: 'top',
                            color: "#fff"
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        lineStyle: lineStyle,
                        label: {
                            show: true,
                            position: 'top',
                            color: "#fff",
                            fontSize: 12
                        },
                        // emphasis: {
                        //     focus: 'series'
                        // },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            $classfiyBox.showLoading({
                text: "加载中",
                color: "rgba(145,213,255,0.85)", //设置转圈圈字体颜色
                textColor: "rgba(145,213,255,0.85)", //设置文字字体颜色
                maskColor: "rgba(36, 102, 175, 0.05)",
                zlevel: 0
            });

            $classfiyBox.setOption(option);
            $classfiyBox.hideLoading();

            // 自动渲染echarts
            window.addEventListener("resize", () => {
                $classfiyBox.resize();
            });
        },
        initIncrementBox() {
            let $incrementBox = echarts.init(document.getElementById("incrementBox"));
            let option = {
                grid: {
                    left: '3%',
                    right: '20%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        verticalAlign: 'middle',
                        margin: 20,
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                    axisLine: {
                        show: true,
                        // color: '#fff',
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.35)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    nameLocation: 'end', // 轴名称相对位置value
                    offset: 5, // x轴相对于默认位置的偏移
                    nameTextStyle: { // 坐标轴名称样式
                        color: 'rgba(255, 255, 255, 0.8)',
                        padding: [0, 0, 10, -40] // 坐标轴名称相对位置
                    },
                    nameGap: 5, // 坐标轴名称与轴线之间的距离
                    axisLabel: {
                        verticalAlign: 'middle',
                        color: 'rgba(255, 255, 255, 0.8)',
                        // fontSize: '12'
                    },
                    axisLine: {
                        show: false,
                        color: '#fff',
                    },
                    splitLine: { // gird区域中的分割线
                        show: true, // 是否显示
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                series: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        endLabel: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                return params.seriesName;
                            }
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            $incrementBox.setOption(option);
            window.addEventListener("resize", () => {
                $incrementBox.resize();
            });
        }
    },
})