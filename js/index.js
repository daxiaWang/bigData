// console.log("index.js")

// GET("/public/topInfo.json", {}, function(res) {
//     console.log("res", res)
// })

new Vue({
    el: "#app",
    data: function() {
        return {
            moneyScalePlate: 500,
            numScalePlate: 60,
            importData: {
                "1": {
                    source: "导入市场",
                    ename: "drsc",
                    data: [{
                            produce: "产品a",
                            name: "张三",
                            info: [
                                { value: false },
                                { value: true },
                                { value: true },
                                { value: true }
                            ]
                        },
                        {
                            produce: "产品f",
                            name: "张三11",
                            info: [
                                { value: false },
                                { value: false },
                                { value: true }
                            ]
                        },
                        {
                            produce: "产品w",
                            name: "张11",
                            info: [
                                { value: false },
                                { value: false },
                                { value: true },
                                { value: true }
                            ]
                        }
                    ]
                },
                "2": {
                    source: "导入交付",
                    ename: "drjf",
                    data: [{
                            produce: "产品a",
                            name: "张三",
                            info: [
                                { value: false },
                                { value: false },
                                { value: true },
                                { value: false }
                            ]
                        },
                        {
                            produce: "产品b",
                            name: "李四",
                            info: [
                                { value: false },
                                { value: true },
                                { value: false }
                            ]
                        }, {
                            produce: "产品bb",
                            name: "张三",
                            info: [
                                { value: true },
                                { value: false },
                                { value: true },
                                { value: false }
                            ]
                        },
                        {
                            produce: "产品bc",
                            name: "李四",
                            info: [
                                { value: false },
                                { value: true },
                                { value: true }
                            ]
                        }
                    ]
                },
                "3": {
                    source: "导入客服",
                    ename: "drkf",
                    data: [{
                        produce: "产品c",
                        name: "张三",
                        info: [
                            { value: false },
                            { value: true },
                            { value: true },
                        ]
                    }]
                }
            },
            tableData: [{
                produce: '2016-05-02',
                name: '王小虎1王小虎1',
                num: '15',
                money: 500
            }, {
                produce: '2016-05-03',
                name: '王小虎4',
                num: '50',
                money: 300
            }, {
                produce: '2016-05-02',
                name: '王小虎1王小虎1',
                num: '60',
                money: 400
            }, {
                produce: '2016-05-03',
                name: '王小虎4',
                num: '44',
                money: 30
            }, {
                produce: '2016-05-02',
                name: '王小虎1王小虎1',
                num: '60',
                money: 400
            }, {
                produce: '2016-05-03',
                name: '王小虎4',
                num: '44',
                money: 30
            }],
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
            ],
            mapData: [{
                    name: '北京',
                    value: 125.0529252
                },
                {
                    name: '天津',
                    value: 94.278137
                },
                {
                    name: '河北',
                    value: 765.636856
                },
                {
                    name: '山西',
                    value: 303.235364
                },
                {
                    name: '内蒙古',
                    value: 238.751868
                },
                {
                    name: '辽宁',
                    value: 115.487365
                },
                {
                    name: '吉林',
                    value: 125.00734
                },
                {
                    name: '黑龙江',
                    value: 462.5167856
                },
                {
                    name: '上海',
                    value: 57.306289
                },
                {
                    name: '江苏',
                    value: 548.488597
                },
                {
                    name: '浙江',
                    value: 167.647803
                },
                {
                    name: '安徽',
                    value: 471.982985
                },
                {
                    name: '福建',
                    value: 721.650902
                },
                {
                    name: '江西',
                    value: 154.718086
                },
                {
                    name: '山东',
                    value: 503.987678
                },
                {
                    name: '河南',
                    value: 428.966325
                },
                {
                    name: '湖北',
                    value: 248.837357
                },
                {
                    name: '湖南',
                    value: 385.493622
                },
                {
                    name: '广东',
                    value: 274.71366
                },
                {
                    name: '广西',
                    value: 125.26922
                },
                {
                    name: '海南',
                    value: 226.455853
                },
                {
                    name: '重庆',
                    value: 220.577822
                },
                {
                    name: '四川',
                    value: 90.743219
                },
                {
                    name: '贵州',
                    value: 130.156798
                },
                {
                    name: '云南',
                    value: 67.803895
                },
                {
                    name: '陕西',
                    value: 187.289381
                },
                {
                    name: '甘肃',
                    value: 233.232202
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
                    value: 123.991132
                },
                {
                    name: '西藏',
                    value: 323.991132
                },
            ]
        }
    },

    mounted() {
        this.initSellRef()
        this.initDrscRef()
        this.initDrjfRef()
        this.initDrkfRef()
            // console.log("this is current swiper instance object", this.swiper);
            // this.initTimelineOld();
        this.initTimeline();
        this.initProjectIncome()
        this.initOrderTrend()
        this.initReviewBox()
        this.initClassfiyBox()
        this.initIncrementBox()
        this.initMoneyBox()
    },
    methods: {
        initSellRef() {
            var mySwiper = new Swiper(this.$refs.sellRef, {
                direction: 'vertical',
                slidesPerView: 6, // 每页显示几个slide
                spaceBetween: 10, // slide的间距px
                followFinger: false, // 
                speed: 400, // 速度
                // mousewheel: true, // 鼠标滚轮控制
                loop: true, // 循环
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            });
            // 鼠标移入停止自动滚动
            $('.sell-swiper .swiper-slide').mouseenter(function() {
                    mySwiper.autoplay.stop();
                })
                // 鼠标移出开始自动滚动
            $('.sell-swiper .swiper-slide').mouseleave(function() {
                mySwiper.autoplay.start();
            })
        },
        initDrscRef() {
            var mySwiper = new Swiper(this.$refs.drscRef, {
                direction: 'vertical',
                slidesPerView: 3, // 每页显示几个slide
                spaceBetween: 5, // slide的间距px
                followFinger: false, // 
                speed: 400, // 速度
                // mousewheel: true, // 鼠标滚轮控制
                loop: true, // 循环
                autoplay: {
                    delay: 800,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            });
        },
        initDrjfRef() {
            var mySwiper = new Swiper(this.$refs.drjfRef, {
                direction: 'vertical',
                slidesPerView: 3, // 每页显示几个slide
                spaceBetween: 4, // slide的间距px
                followFinger: false, // 
                speed: 400, // 速度
                // mousewheel: true, // 鼠标滚轮控制
                // loop: true, // 循环
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            });
        },
        initDrkfRef() {
            var mySwiper = new Swiper(this.$refs.drkfRef, {
                direction: 'vertical',
                slidesPerView: 3, // 每页显示几个slide
                spaceBetween: 4, // slide的间距px
                followFinger: false, // 
                speed: 400, // 速度
                // mousewheel: true, // 鼠标滚轮控制
                // loop: true, // 循环
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            });
        },
        initTimeline() {
            let uploadedDataURL = "data/json/china.json";
            // var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
            let $mapBox = echarts.init(document.getElementById("mapBox"))
            var geoGpsMap = {
                '1': [113.12244, 23.009505],
                '2': [118.8062, 31.9208],
                '3': [118.8062, 31.9208],
                '4': [113.12244, 23.009505],
                '5': [113.12244, 23.009505],
                '6': [113.12244, 23.009505],
            };
            var geoCoordMap = {
                "江苏": [118.8062, 31.9208],
                '黑龙江': [127.9688, 45.368],
                '内蒙古': [110.3467, 41.4899],
                "吉林": [125.8154, 44.2584],
                '北京市': [116.4551, 40.2539],
                "辽宁": [123.1238, 42.1216],
                "河北": [114.4995, 38.1006],
                "天津": [117.4219, 39.4189],
                "山西": [112.3352, 37.9413],
                "陕西": [109.1162, 34.2004],
                "甘肃": [103.5901, 36.3043],
                "宁夏": [106.3586, 38.1775],
                "青海": [101.4038, 36.8207],
                "新疆": [87.9236, 43.5883],
                "四川": [103.9526, 30.7617],
                "重庆": [108.384366, 30.439702],
                "山东": [117.1582, 36.8701],
                "河南": [113.4668, 34.6234],
                "安徽": [117.29, 32.0581],
                "湖北": [114.3896, 30.6628],
                "浙江": [119.5313, 29.8773],
                "福建": [119.4543, 25.9222],
                "江西": [116.0046, 28.6633],
                "湖南": [113.0823, 28.2568],
                "贵州": [106.6992, 26.7682],
                "云南": [102.9199, 25.4663],
                "广东": [113.12244, 23.009505],
                "广西": [108.479, 23.1152],
                "海南": [110.3893, 19.8516],
                '上海': [121.4648, 31.2891],
                "西藏": [115.0648, 28.6744],
            };


            var d1 = {
                '江苏': 15520.7,
                '黑龙江': 4684.1,
                '内蒙古': 1828.3,
                '吉林': 3500.4,
                '北京市': 6506.3,
                '辽宁': 9417.2,
                '河北': 6072.5,
                '天津': 1830.0,
                '山西': 3416.8,
                '陕西': 7418.8,
                '甘肃': 3898.6,
                '宁夏': 918.6,
                '青海': 544.4,
                '新疆': 3717.6,
                '四川': 13827.4,
                '重庆': 6839.9,
                '山东': 7437.8,
                '河南': 14018.0,
                '安徽': 13955.3,
                '湖北': 10073,
                '浙江': 13014.5,
                '福建': 5871.9,
                '江西': 6779.5,
                '湖南': 16183.7,
                '贵州': 8657.1,
                '云南': 4908.0,
                '广东': 18078.9,
                '广西': 5190.4,
                '海南': 1421.0,
                '上海': 1331.7,
                '西藏': 990.5,

            };

            var d2 = {
                "江苏": 13830.8,
                '黑龙江': 4286.9,
                '内蒙古': 1612.5,
                "吉林": 3635.9,
                '北京市': 6284.9,
                "辽宁": 7369.2,
                "河北": 5327.4,
                "天津": 1834.5,
                "山西": 2961.2,
                "陕西": 6968.0,
                "甘肃": 4045.3,
                "宁夏": 9300,
                "青海": 5602,
                "新疆": 3594.8,
                "四川": 13596.9,
                "重庆": 6228.3,
                "山东": 6035.6,
                "河南": 12501.5,
                "安徽": 8681.0,
                "湖北": 10203.5,
                "浙江": 11136.9,
                "福建": 5164.6,
                "江西": 6241.8,
                "湖南": 1313.11,
                "贵州": 8754.1,
                "云南": 4879.4,
                "广东": 12392.6,
                "广西": 4910.1,
                '海南': 1372.8,
                '上海': 1384.4,
                '西藏': 922.5,

            };

            var d3 = {
                '江苏': 13358.0,
                '黑龙江': 3938.6,
                '内蒙古': 1573.5,
                '吉林': 3491.0,
                '北京市': 6151.9,
                '辽宁': 7363.2,
                '河北': 5070.1,
                '天津': 1837.7,
                '山西': 2637.4,
                '陕西': 6982.0,
                '甘肃': 4162.6,
                '宁夏': 8757,
                '青海': 5934,
                '新疆': 3214.8,
                '四川': 12374.6,
                '重庆': 6125.5,
                '山东': 6346.3,
                '河南': 12052.8,
                '安徽': 8110.6,
                '湖北': 10299.0,
                '浙江': 10501.8,
                '福建': 5164.9,
                '江西': 6287.6,
                '湖南': 12176,
                '贵州': 8946.4,
                '云南': 4651.9,
                '广东': 13034.5,
                '广西': 4869.9,
                '海南': 1391.2,
                '上海': 1441.6,
                '西藏': 930.5,


            };

            var d4 = {
                "江苏": 12678.3,
                '黑龙江': 3467,
                '内蒙古': 1486.7,
                "吉林": 3298.9,
                '北京市': 5887.1,
                "辽宁": 7248.3,
                "河北": 5002.3,
                "天津": 1744,
                "山西": 2515.5,
                "陕西": 6788,
                "甘肃": 4263.8,
                "宁夏": 7345,
                "青海": 6274,
                "新疆": 2708.3,
                "四川": 10909.3,
                "重庆": 6052.2,
                "山东": 6529.9,
                "河南": 11435.1,
                "安徽": 6910.5,
                "湖北": 10314.4,
                "浙江": 10449.7,
                "福建": 5113.4,
                "江西": 6299.7,
                "湖南": 11493.6,
                "贵州": 9180.3,
                "云南": 4462.2,
                "广东": 13741.8,
                "广西": 4857.8,
                '海南': 1466,
                '上海': 1548.5,
                '西藏': 970.5,
            };

            var d5 = {
                '江苏': 12061.2,
                '黑龙江': 3156.8,
                '内蒙古': 1326.8,
                '吉林': 3195.6,
                '北京市': 5893.5,
                '辽宁': 7134.3,
                '河北': 4734.6,
                '天津': 1745,
                '山西': 2383.7,
                '陕西': 7158.3,
                '甘肃': 4218.5,
                '宁夏': 6137,
                '青海': 6443,
                '新疆': 2120.4,
                '四川': 9856.9,
                '重庆': 6058.7,
                '山东': 6744.3,
                '河南': 11042.1,
                '安徽': 6334.7,
                '湖北': 9835,
                '浙江': 9838,
                '福建': 4810.5,
                '江西': 6068.6,
                '湖南': 10668,
                '贵州': 9302.5,
                '云南': 4148.4,
                '广东': 14214.4,
                '广西': 4793.1,
                '海南': 1438.3,
                '上海': 1584.5,
                '西藏': 880.5,


            };

            var d6 = {
                "江苏": 12029.8,
                '黑龙江': 2975.1,
                '内蒙古': 1215.8,
                "吉林": 3159.9,
                '北京市': 6297.7,
                "辽宁": 7026.6,
                "河北": 4473.3,
                "天津": 1767.9,
                "山西": 2230.5,
                "陕西": 7076.1,
                "甘肃": 4213.3,
                "宁夏": 5754,
                "青海": 6313,
                "新疆": 2027.6,
                "四川": 9166.8,
                "重庆": 6015.3,
                "山东": 6892,
                "河南": 10929.7,
                "安徽": 5927.5,
                "湖北": 8743.2,
                "浙江": 10189.3,
                "福建": 4576.1,
                "江西": 5806.9,
                "湖南": 10142.8,
                "贵州": 9375.6,
                "云南": 3838.1,
                "广东": 14232.6,
                "广西": 4708.5,
                '海南': 1418.7,
                '上海': 1644.2,
                '西藏': 790.5,
            };

            var colors = [
                ["#1DE9B6", "#1DE9B6", "#FFDB5C", "#FFDB5C", "#04B9FF", "#04B9FF"],
                ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
                ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
                ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
            ];
            var colorIndex = 0;


            var year = ["2014", "2015", "2016", "2017", "2018", "2019"];
            var mapData = [
                [],
                [],
                [],
                [],
                [],
                [],
            ];

            /*柱子Y名称*/
            var categoryData = [];
            var barData = [];

            for (var key in geoCoordMap) {
                mapData[0].push({
                    "year": '2014',
                    "name": key,
                    "value": d1[key] / 100,
                    "value1": d1[key] / 100,
                });
                mapData[1].push({
                    "year": '2015',
                    "name": key,
                    "value": d1[key] / 100,
                    "value1": d2[key] / 100,
                });
                mapData[2].push({
                    "year": '2016',
                    "name": key,
                    "value": d3[key] / 100,
                    "value1": d3[key] / 100,
                });
                mapData[3].push({
                    "year": '2017',
                    "name": key,
                    "value": d3[key] / 100,
                    "value1": d4[key] / 100,
                });
                mapData[4].push({
                    "year": '2018',
                    "name": key,
                    "value": d5[key] / 100,
                    "value1": d5[key] / 100,
                });
                mapData[5].push({
                    "year": '2019',
                    "name": key,
                    "value": d5[key] / 100,
                    "value1": d6[key] / 100,
                });
            }

            $.getJSON(uploadedDataURL, function(geoJson) {

                echarts.registerMap('china', geoJson);
                var convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };

                var convertToLineData = function(data, gps) {
                    var res = [];
                    //流
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        var toCoord = geoCoordMap[dataItem.name];
                        debugger;
                        var fromCoord = gps;
                        if (fromCoord && toCoord) {
                            res.push([{
                                coord: fromCoord,
                                value: dataItem.value
                            }, {
                                coord: toCoord,
                            }]);
                        }
                    }
                    return res;
                };

                optionXyMap01 = {
                    timeline: {
                        data: year,
                        axisType: 'category',
                        orient: 'vertical',
                        autoPlay: true,
                        playInterval: 3000,
                        left: 10,
                        right: null,
                        top: 20,
                        bottom: 20,
                        width: 55,
                        //  height: null,
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
                        symbolSize: 10,
                        lineStyle: {
                            color: '#555'
                        },
                        checkpointStyle: {
                            borderColor: '#777',
                            borderWidth: 2
                        },
                        controlStyle: {
                            showNextBtn: true,
                            showPrevBtn: true,
                            normal: {
                                color: '#666',
                                borderColor: '#666'
                            },
                            emphasis: {
                                color: '#aaa',
                                borderColor: '#aaa'
                            }
                        },

                    },
                    baseOption: {
                        animation: true,
                        animationDuration: 1000,
                        animationEasing: 'cubicInOut',
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: 'cubicInOut',
                        grid: {
                            right: '1%',
                            top: '15%',
                            bottom: '10%',
                            width: '20%'
                        },
                        tooltip: {
                            trigger: 'item', // hover触发器
                            formatter: function(params) {
                                console.log("params", params)
                                    // return params
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
                        geo: {
                            show: true,
                            map: 'china',
                            roam: true,
                            zoom: 1,
                            center: [105, 34.6234],
                            label: {
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {

                                    borderColor: 'rgba(147, 235, 248, 1)',
                                    borderWidth: 1,
                                    areaColor: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 0.8,
                                        colorStops: [{
                                            offset: 0,
                                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                                        }],
                                        globalCoord: false // 缺省为 false
                                    },
                                    shadowColor: 'rgba(128, 217, 248, 1)',
                                    // shadowColor: 'rgba(255, 255, 255, 1)',
                                    shadowOffsetX: -2,
                                    shadowOffsetY: 2,
                                    shadowBlur: 10
                                },
                                emphasis: {
                                    areaColor: '#EEDD78',
                                    borderWidth: 0
                                }
                            }
                        },
                        visualMap: {
                            type: 'piecewise',
                            right: '2%',
                            bottom: '2%',
                            pieces: [
                                { gt: 500, color: "#207CFE", label: '中标500W以上' }, // (1500, Infinity]
                                { gt: 300, color: "#3AA0FF", lte: 500, label: '中标300W-500W以上' }, // (100, 200]
                                { gt: 100, color: "#418DFF", lte: 300, label: '中标100W-300W以上' }, // (100, 200]
                                { lt: 100, color: "#7FC9FB", label: '中标100W以下' } // (-Infinity, 100)
                            ],
                            align: "left",
                            textStyle: {
                                color: "#fff"
                            }
                        },
                    },
                    options: []

                };
                for (var n = 0; n < year.length; n++) {
                    optionXyMap01.options.push({
                        // backgroundColor: '#000000',
                        series: [
                            //地图？
                            {
                                type: 'map',
                                map: 'china',
                                geoIndex: 0,
                                aspectScale: 0.75, //长宽比
                                showLegendSymbol: false, // 存在legend时显示
                                label: {
                                    emphasis: {
                                        show: true,
                                        color: "#fff"
                                    },
                                    normal: {
                                        show: true,
                                        color: "#fff"
                                    }
                                },
                                emphasis: {
                                    itemStyle: {
                                        areaColor: "#3066ba",
                                        borderColor: "#00FFF6"
                                    },
                                },
                                roam: true,

                                animation: false,
                                data: mapData
                            }
                        ]
                    })
                }
                $mapBox.setOption(optionXyMap01);
            });

        },
        initTimelineOld() {
            let $mapBox = echarts.init(document.getElementById("mapBox"))
            window.addEventListener('resize', function() {
                $mapBox.resize();
            });
            let monthes = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            let con = [198];
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
                // timeline: {
                //     axisType: 'category',
                //     orient: 'vertical',
                //     autoPlay: true,
                //     inverse: true,
                //     playInterval: 5000,
                //     left: 10,
                //     right: null,
                //     top: "20%",
                //     bottom: 20,
                //     width: 55,
                //     height: null,
                //     label: {
                //         normal: {
                //             textStyle: {
                //                 color: '#ddd'
                //             }
                //         },
                //         emphasis: {
                //             textStyle: {
                //                 color: '#fff'
                //             }
                //         }
                //     },
                //     symbol: 'none',
                //     lineStyle: {
                //         color: '#555'
                //     },
                //     checkpointStyle: {
                //         color: '#bbb',
                //         borderColor: '#777',
                //         borderWidth: 2
                //     },
                //     controlStyle: {
                //         showNextBtn: false,
                //         showPrevBtn: false,
                //         normal: {
                //             color: '#666',
                //             borderColor: '#666'
                //         },
                //         emphasis: {
                //             color: '#aaa',
                //             borderColor: '#aaa'
                //         }
                //     },
                //     data: monthes
                // },
                timeline: {
                    data: monthes,
                    axisType: 'category',
                    orient: 'vertical',
                    autoPlay: true,
                    playInterval: 3000,
                    left: 10,
                    right: null,
                    top: 20,
                    bottom: 20,
                    width: 55,
                    //  height: null,
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
                    symbolSize: 10,
                    lineStyle: {
                        color: '#555'
                    },
                    checkpointStyle: {
                        borderColor: '#777',
                        borderWidth: 2
                    },
                    controlStyle: {
                        showNextBtn: true,
                        showPrevBtn: true,
                        normal: {
                            color: '#666',
                            borderColor: '#666'
                        },
                        emphasis: {
                            color: '#aaa',
                            borderColor: '#aaa'
                        }
                    },

                },
                baseOption: {
                    tooltip: {
                        trigger: "item",
                        formatter: function(params) {
                            console.log("params", params)
                                // return params
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
                    // tooltip: {},
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
                    visualMap: {
                        type: 'piecewise',
                        right: '2%',
                        bottom: '2%',
                        pieces: [
                            { gt: 500, color: "#207CFE", label: '中标500W以上' }, // (1500, Infinity]
                            { gt: 300, color: "#3AA0FF", lte: 500, label: '中标300W-500W以上' }, // (100, 200]
                            { gt: 100, color: "#418DFF", lte: 300, label: '中标100W-300W以上' }, // (100, 200]
                            { lt: 100, color: "#7FC9FB", label: '中标100W以下' } // (-Infinity, 100)
                        ],
                        align: "left",
                        textStyle: {
                            color: "#fff"
                        }
                    },

                },
                options: [{
                    series: [{
                        type: "map",
                        mapType: "china",
                        roam: true,
                        // zoom: 2.2,
                        scaleLimit: {
                            min: 0.7,
                            max: 3
                        },
                        center: "center",
                        label: {
                            emphasis: {
                                show: true,
                                color: "#fff"
                            },
                            normal: {
                                show: false,
                                color: "#fff"
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: "#3066ba",
                                borderColor: "#00FFF6"
                            },
                        },
                        data: this.mapData
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
                        label: {
                            show: true,
                            color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                            formatter: function(params) {
                                console.log("params", params)
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
                        label: {
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
                    left: '7%',
                    right: '7%',
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
                        data: [320, 32, 101, 134, 90, 230, 210]
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
                        data: [820, 132, 901, 434, 1290, 1330, 1320]
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
        },
        initMoneyBox() {
            let $moneyBox = echarts.init(document.getElementById("moneyBox"))


            window.addEventListener("resize", function(params) {
                $moneyBox.resize()
            })

            let option = {
                title: {
                    text: ""
                },
                grid: {
                    left: '3%',
                    right: '20%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                calculable: true,
                xAxis: [{
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
                }],
                yAxis: [{
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

                }],
                series: [{
                        name: '直接访问',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '邮件营销',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }
            $moneyBox.setOption(option)
        },
        initMoneyBox1() {
            let $moneyBox = echarts.init(document.getElementById("moneyBox"))

            $moneyBox.setOption(option)
            window.addEventListener("resize", function(params) {
                $moneyBox.resize()
            })

            let option = {
                tooltip: { //鼠标悬停提示内容
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'cross' // 十字线显示
                    }
                },
                legend: {
                    y: '20px',
                    data: ['标准保费', '增长'],
                    selectedMode: false,
                },
                xAxis: [
                    //X轴
                    {
                        type: 'category',
                        data: [1, 2, 3, 4, 5, 6],
                        axisLabel: { interval: 0 },
                    },
                    //x轴显示两组数据  第2个X轴
                    {
                        type: 'category',
                        axisLine: { show: false },
                        axisTick: { show: false },
                        axisLabel: { show: false, interval: 0 },
                        splitArea: { show: false },
                        splitLine: { show: false },
                        data: [1, 2, 3, 4, 5, 6],
                    }
                ],
                yAxis: [ //两个y轴  左边y轴
                    {
                        type: 'value',
                        name: "金额(元)",

                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} '
                        },
                        splitNumber: 10,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        // splitArea: {
                        //     show: false
                        // },
                        // max: 100,
                        // interval: 10,
                    },
                    //右边y轴
                    {
                        type: 'value',
                        name: "增长",
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} %'
                        },
                        splitNumber: 10,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        // max: 100,
                        // interval: 10,
                    }
                ],
                series: [ //用于指定图标显示类型
                    //第一个柱状图的数据
                    {
                        name: '标准保费',
                        type: 'bar',
                        yAxisIndex: '0', // 第一个柱状图的数据
                        itemStyle: { normal: { color: '#2d91ff', label: { show: true } } },
                        data: [100, 200, 30, 90, 210, 110]
                    },
                    //第二个柱状图的数据
                    {
                        name: '承保',
                        type: 'bar',
                        xAxisIndex: 1, //第二个柱状图的数据
                        itemStyle: {
                            normal: {
                                color: '#d5e9ff',
                                label: {
                                    show: true,
                                    formatter: function(p) {
                                        return p.value > 0 ? (p.value + '\n') : '';
                                    }
                                }
                            }
                        },
                        data: [120, 300, 100, 170, 300, 200]
                    },
                    //右边Y轴的数据 
                    {
                        name: '增长',
                        type: 'line',
                        symbol: 'emptyCircle',
                        showAllSymbol: true, //动画效果
                        symbolSize: 3,
                        smooth: true, //光滑的曲线
                        yAxisIndex: '1',
                        itemStyle: {
                            normal: {
                                color: '#ffb348',
                                label: {
                                    show: true,
                                    formatter: '{c}%',
                                    textStyle: {
                                        color: '#000000'
                                    }
                                }
                            }
                        },
                        data: [3, 9, 2, 5, 7, 10]
                    },
                ]
            };

        }
    },
})