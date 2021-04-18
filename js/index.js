console.log("index.js")

// GET("/public/topInfo.json", {}, function(res) {
//     console.log("res", res)
// })

new Vue({
    el: "#app",
    data: function() {
        return {
            aaa: "111"
        }
    },
    mounted() {
        // this.initMap();
        this.initTimeline();
    },
    methods: {
        initTimeline() {
            let $mapBox = echarts.init(document.getElementById("mapBox"))

            let years = ['1917', '1972', '1982', '1984', '1994'];

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
            console.log("years", years)
            let option = {
                baseOption: {
                    timeline: {
                        axisType: 'category',
                        orient: 'vertical',
                        autoPlay: true,
                        inverse: true,
                        playInterval: 5000,
                        left: null,
                        right: 10,
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
                        data: years
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

                    series: [{
                        name: '中国',
                        type: 'map',
                        mapType: 'china',
                        selectedMode: 'multiple',
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        tooltip: {
                            formatter: function(params) {
                                // return d.name
                                let htmlStr = `
          <div style='font-size:18px;'> ${params.name}</div>
          <p style='text-align:left;margin-top:-10px;'>
	          区域对应数据value：${params.name}<br/>
	          性能perf：${params.name}<br/>
	          下载速度downloadSpeep：${params.name}<br/>
	          可用性usability：${params.name}<br/>
	          监测点数point：${params.name}<br/>
          </p>
        `
                                return htmlStr;
                            }
                        },
                        markPoint: {
                            symbol: 'pin',
                            symbolSize: 30,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function(d) {
                                        return d.name
                                    }
                                }
                            },
                            effect: {
                                show: true,
                                showBlur: 10,
                                // color: 'rgba(255, 255, 255, 0.5)'
                            },
                            data: [{
                                name: '重庆',
                                coord: [106.54, 29.59]
                            }]
                        }
                    }],
                    //animationDurationUpdate: 1000,
                    //animationEasingUpdate: 'quinticInOut'
                },
                options: []
            };

            // for (let n = 0; n < years.length; n++) {
            //     option.options.push({
            //         title: {
            //             text: years[n]
            //         },
            //         series: {
            //             markPoint: {
            //                 data: value[n]
            //             }
            //         }
            //     });
            // }
            console.log("option", option)

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
        }
    },
})