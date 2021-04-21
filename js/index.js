// console.log("index.js")

// GET("/public/topInfo.json", {}, function(res) {
//     console.log("res", res)
// })

new Vue({
    el: "#app",
    data: function() {
        return {
            mTime: "",
            moneyScalePlate: 500,
            numScalePlate: 60,
            importData: {
                "1": {
                    source: "导入市场",
                    ename: "drsc",
                    data: [{
                            produce: "产品1",
                            name: "张三",
                            info: [
                                { value: false },
                                { value: true },
                                { value: true },
                                { value: true }
                            ]
                        },
                        {
                            produce: "产品2",
                            name: "张三11",
                            info: [
                                { value: false },
                                { value: false },
                                { value: true }
                            ]
                        },
                        {
                            produce: "产品3",
                            name: "张11",
                            info: [
                                { value: false },
                                { value: false },
                                { value: true },
                                { value: true }
                            ]
                        },
                        {
                            produce: "产品4",
                            name: "张4",
                            info: [
                                { value: false },
                                { value: true },
                                { value: false },
                                { value: false }
                            ]
                        },
                        {
                            produce: "产品5",
                            name: "张5",
                            info: [
                                { value: true },
                                { value: true },
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
                    "time": "一月",
                    "data": [{
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

                    ]
                },
                {
                    "time": "二月",
                    "data": [{
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
                    ]
                }, {
                    time: "三月",
                    "data": [{
                            name: '广东',
                            value: 274.71366
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
                },
                {
                    time: "四月",
                    "data": [{
                            name: '广东',
                            value: 274.71366
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
                            name: '吉林',
                            value: 125.00734
                        },
                        {
                            name: '河南',
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
                            name: '北京',
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
                }, {
                    time: "五月",
                    "data": [{
                            name: '广东',
                            value: 274.71366
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
                            name: '湖南',
                            value: 123.991132
                        },
                        {
                            name: '湖北',
                            value: 323.991132
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
                            name: '河南',
                            value: 548.488597
                        },
                        {
                            name: '浙江',
                            value: 167.647803
                        },
                    ]
                }, {
                    "time": "六月",
                    "data": [{
                            name: '甘肃',
                            value: 125.00734
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
                            name: '湖南',
                            value: 154.718086
                        },
                        {
                            name: '重庆',
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
                            name: '江西',
                            value: 385.493622
                        },
                        {
                            name: '黑龙江',
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
                            name: '山东',
                            value: 220.577822
                        },
                        {
                            name: '广东',
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
                    ]
                }, {
                    "time": "七月",
                    "data": [{
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
                        }, ,
                        {
                            name: '新疆',
                            value: 428.966325
                        },
                        {
                            name: '宁夏',
                            value: 248.837357
                        },
                        {
                            name: '西藏',
                            value: 385.493622
                        },
                    ]
                },
                {
                    "time": "八月",
                    "data": [{
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
                            name: '甘肃',
                            value: 471.982985
                        },
                        {
                            name: '内蒙古',
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
                            name: '黑龙江',
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
                            name: '西藏',
                            value: 67.803895
                        },
                    ]
                }, {
                    time: "九月",
                    "data": [{
                            name: '广东',
                            value: 274.71366
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
                },
                {
                    time: "十月",
                    "data": [{
                            name: '广东',
                            value: 274.71366
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
                            name: '吉林',
                            value: 125.00734
                        },
                        {
                            name: '河南',
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
                            name: '北京',
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
                }, {
                    time: "十一月",
                    "data": [{
                            name: '广东',
                            value: 274.71366
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
                            name: '湖南',
                            value: 123.991132
                        },
                        {
                            name: '湖北',
                            value: 323.991132
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
                            name: '河南',
                            value: 548.488597
                        },
                        {
                            name: '浙江',
                            value: 167.647803
                        },
                    ]
                }, {
                    "time": "十二月",
                    "data": [{
                            name: '甘肃',
                            value: 125.00734
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
                            name: '湖南',
                            value: 154.718086
                        },
                        {
                            name: '重庆',
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
                            name: '江西',
                            value: 385.493622
                        },
                        {
                            name: '黑龙江',
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
                            name: '山东',
                            value: 220.577822
                        },
                        {
                            name: '广东',
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
                    ]
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
        this.initTimeline();
        // this.initTimeline();
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
                loop: $(".sell-swiper .swiper-slide").length > 2, // 循环
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            });
            // 鼠标移入停止自动滚动
            // $('.sell-swiper .swiper-slide').mouseenter(function() {
            //         mySwiper.autoplay.stop();
            //     })
            //     // 鼠标移出开始自动滚动
            // $('.sell-swiper .swiper-slide').mouseleave(function() {
            //     mySwiper.autoplay.start();
            // })
        },
        initDrscRef() {
            var mySwiper = new Swiper(this.$refs.drscRef, {
                direction: 'vertical',
                slidesPerView: 3, // 每页显示几个slide
                spaceBetween: 5, // slide的间距px
                followFinger: false, // 
                speed: 400, // 速度
                // mousewheel: true, // 鼠标滚轮控制
                loop: $(".drsc-container .swiper-slide").length > 2, // 循环
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
                spaceBetween: 5, // slide的间距px
                followFinger: false, // 
                speed: 400, // 速度
                // mousewheel: true, // 鼠标滚轮控制
                loop: $(".drjf-container .swiper-slide").length > 2, // 循环
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            });
        },
        initDrkfRef() {
            console.log("this.$refs.drkfRef", this.$refs.drkfRef)
            var mySwiper = new Swiper(this.$refs.drkfRef, {
                direction: 'vertical',
                slidesPerView: 3, // 每页显示几个slide
                spaceBetween: 4, // slide的间距px
                followFinger: false, // 
                speed: 400, // 速度
                // mousewheel: true, // 鼠标滚轮控制
                loop: $(".drkf-container .swiper-slide").length > 2, // 循环
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            });
        },

        initTimeline() {
            let $mapBox = echarts.init(document.getElementById("mapBox"))
            window.addEventListener('resize', function() {
                $mapBox.resize();
            });
            let url = "/data/json/china.json"
            $.getJSON(url, function(csJson) {
                echarts.registerMap('china', csJson);
                // dt
                // var chart = echarts.init(document.getElementById('map'));
                // chart.setOption(option);
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
            let option = {
                timeline: {
                    // data: this.mapData.map(function(ele) {
                    //     return ele.time
                    // }),
                    data: monthes,
                    axisType: 'category',
                    orient: 'vertical',
                    autoPlay: true,
                    playInterval: 5000,
                    left: 30,
                    right: null,
                    top: 50,
                    bottom: 20,
                    width: 55,
                    height: "70%",
                    inverse: true,
                    //  height: null,
                    label: {
                        show: true,
                        normal: {
                            fontSize: "12",
                            textStyle: {
                                color: '#FFFFFF'
                            },
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            },
                            fontSize: "12",
                        }
                    },
                    symbol: "circle",
                    symbolSize: 10,
                    lineStyle: {
                        show: true,
                        color: '#0554A3'
                    },
                    itemStyle: {
                        normal: {
                            color: "#0554A3",
                        }
                    },
                    checkpointStyle: {
                        color: '#207CFE',
                        borderColor: '#207CFE',
                        borderWidth: 1,
                        symbolSize: '12',
                    },
                    controlStyle: {
                        show: false
                    }
                },
                baseOption: {
                    tooltip: {
                        trigger: 'item', // hover触发器
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        formatter: function(params) {
                            // console.log("params", params)
                            if (params.componentType === "timeline" || !params.data) return
                                // return params
                            let htmlStr = `
                                        <div class="maptooltip_box">
                                            <h4>中标情况</h4>
                                            <div class="maptooltip_cont">
                                                <p>${params.data.name} <span>张毅伟</span> 中标${params.data.value}W</p>
                                            </div>
                                        </div>
                                        `
                            return htmlStr;
                        }
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
                    geo: {
                        map: 'china',
                        roam: true,
                        zoom: 1.4,
                        scaleLimit: {
                            min: 0.7,
                            max: 3
                        },
                        // geoIndex: 2,
                        label: {
                            emphasis: {
                                show: true,
                                color: "#fff",
                            },
                            normal: {
                                show: false,
                                color: "#fff"
                            }
                        },
                        // emphasis: {
                        //     itemStyle: {
                        //         areaColor: 'rgba(32, 124, 254, 1)',
                        //         borderWidth: 1,
                        //         borderColor: 'rgba(0, 255, 246, 1)'
                        //     }
                        // },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0, 0, 0, 0.2)'
                            },
                            emphasis: {
                                areaColor: 'rgba(32, 124, 254, 1)',
                                borderWidth: 1,
                                borderColor: 'rgba(0, 255, 246, 1)',
                                // shadowOffsetX: 0,
                                // shadowOffsetY: 0,
                                // shadowBlur: 20,
                                // borderWidth: 0,
                                // shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    },
                },
                options: []
            };
            for (var i = 0; i < this.mapData.length; i++) {

                option.options.push({
                    series: [{
                        type: "map",
                        mapType: "china",
                        geoIndex: 0,
                        // zoom: 2.2,
                        scaleLimit: {
                            min: 0.7,
                            max: 3
                        },
                        center: "center",
                        label: {
                            emphasis: {
                                show: true,
                                color: "#fff",
                            },
                            normal: {
                                show: false,
                                color: "#fff"
                            }
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: 'rgba(32, 124, 254, 1)',
                                borderWidth: 1,
                                borderColor: 'rgba(0, 255, 246, 1)'
                            }
                        },
                        data: this.mapData[i].data
                    }]
                })
            }
            $mapBox.setOption(option);

            let index = 0; //播放所在下标
            // this.mTime = setInterval(function() {
            //     $mapBox.dispatchAction({
            //         type: 'showTip',
            //         seriesIndex: 0,
            //         dataIndex: index
            //     });
            //     index++;
            //     if (index >= option.options.series[0].data.length) {
            //         index = 0;
            //     }
            //     clearInterval(this.mTime)
            // }, 2000);
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
                            color: 'rgba(255, 255, 255, 0.05)',
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
                                color: '#00FBCC'
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                // color: '#fff',
                                // fontSize: 10
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
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                // color: '#fff',
                                // fontSize: 10
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
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                // color: '#fff',
                                // fontSize: 10
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
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                // color: '#fff',
                                // fontSize: 10
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
                    left: '5%',
                    // right: '20%',
                    bottom: '3%',
                    // top: '10%',
                    containLabel: true
                },
                legend: {
                    type: "scroll",
                    textStyle: {
                        color: "#fff"
                    },
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
                            color: 'rgba(255, 255, 255, 0.05)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                tooltip: {
                    show: false,
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                series: [{
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        symbol: "none",
                        markPoint: {

                            itemStyle: { opacity: 0.6 },
                            data: [
                                { type: 'max', name: '最大值' },
                                { type: 'min', name: '最小值' }
                            ]
                        },
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
                    left: '7%',
                    right: '7%',
                    top: '15%',
                    // containLabel: true
                },
                legend: {
                    type: "scroll",
                    textStyle: {
                        color: "#fff"
                    },
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问'],
                    // orient: 'vertical',
                    bottom: 0,
                    icon: 'square',

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
                            color: 'rgba(255, 255, 255, 0.05)',
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        // type: 'cross' // 十字线显示
                    }
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
                            color: 'rgba(255, 255, 255, 0.05)',
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
                            // position: 'top'
                        },
                        // endLabel: {
                        //     show: true,
                        //     color: "rgba(255, 255, 255, 0.8)", // inherit 同色系
                        //     formatter: function(params) {
                        //         return params.seriesName;
                        //     }
                        // },
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

            // $moneyBox.setOption(option)
            // var myChart = echarts.init(document.getElementById('main1'));
            let data = {
                    xData: [
                        ...['2021', '2020', '2019', ''],
                        ...['2021', '2020', '2019', ''],
                        ...['2021', '2020', '2019', ''],
                        ...['2021', '2020', '2019', ''],
                        ...['2021', '2020', '2019', ''],
                        ...['2021', '2020', '2019', '']
                    ],
                    yData: [
                        ...[0.1, "", "", ""],
                        ...[0.25, "", "", ""],
                        ...[0.33, "", "", ""],
                        ...[0.72, "", "", ""],
                        ...[0.33, "", "", ""],
                        ...[0.72, "", "", ""]
                    ], //毛利
                    yData1: [
                        ...[0.13, "", "", ""],
                        ...[0.95, "", "", ""],
                        ...[0.13, "", "", ""],
                        ...[0.72, "", "", ""],
                        ...[0.33, "", "", ""],
                        ...[0.72, "", "", ""]
                    ], //计划
                    yData2: [
                            ...[0.71, 0.5, 0.1, ""],
                            ...[0.5, 0.3, 0.39, ""],
                            ...[0.53, 0.36, 0.57, ""],
                            ...[0.72, 0.45, 0.2, ""],
                            ...[0.33, 0.36, 0.57, ""],
                            ...[0.42, 0.95, 0.2, ""]
                        ] //实际
                }
                /**
                    双X轴标签对应，伪实现思路：
                    底部的标签也是柱状图，对应包含的区域为上方X轴条数占总数的比例，设为宽度即可
                */
            $moneyBox.setOption({
                legend: {
                    right: 0,
                    data: ['中标毛利', '计划中标', '实际中标'],
                    textStyle: {
                        color: "#fff"
                    },
                    icon: "square"
                },
                grid: [{
                    top: "20%",
                    left: "8%",
                    right: "5%",
                    // bottom: 101
                }, {
                    height: 60,
                    bottom: "0%",
                    right: "5%",
                }],
                xAxis: [{
                    type: 'category',
                    data: data.xData,
                    gridIndex: 0,
                    interval: 0,
                    axisLabel: {
                        verticalAlign: 'middle',
                        margin: 20,
                        color: 'rgba(255, 255, 255, 0.8)'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.35)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    zlevel: 2
                }, {
                    type: 'category',
                    gridIndex: 1,
                    axisLine: {
                        length: 8,
                        show: false
                    },
                    zlevel: 1
                }],
                yAxis: [{
                    type: 'value',
                    name: '亿元', // 轴名称
                    nameLocation: 'end', // 轴名称相对位置value
                    offset: 5, // x轴相对于默认位置的偏移
                    gridIndex: 0,
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
                            color: 'rgba(255, 255, 255, 0.05)',
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }, {
                    type: 'value',
                    gridIndex: 1,
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                }],
                series: [{
                    data: data.yData,
                    name: "中标毛利",
                    type: 'bar',
                    stack: 'total',
                    itemStyle: {
                        normal: {
                            // barMaxWidth: '20%',
                            // barBorderRadius: 100,
                            color: '#FFEA00'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: '#0D1641',
                            fontSize: 10
                        },
                    },
                    xAxisIndex: 0,
                    yAxisIndex: 0
                }, {
                    data: data.yData2,
                    name: "实际中标",
                    type: 'bar',
                    stack: 'total',
                    itemStyle: {
                        normal: {
                            // barMaxWidth: '20%',
                            // barBorderRadius: 100,
                            color: '#0091FF'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: '#fff',
                            fontSize: 10
                        }
                    },
                    xAxisIndex: 0,
                    yAxisIndex: 0
                }, {
                    data: data.yData1,
                    name: "计划中标",
                    type: 'bar',
                    stack: 'total',
                    itemStyle: {
                        normal: {
                            // barMaxWidth: '20%',
                            // barBorderRadius: 100,
                            color: '#00FFF6'
                        }
                    },
                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: '#0D1641',
                            fontSize: 10
                        }
                    },
                    xAxisIndex: 0,
                    yAxisIndex: 0
                }, {
                    data: [{
                        name: '政府机关',
                        value: 1
                    }],
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        offset: [-15, 10],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    type: 'bar',
                    barGap: 0,
                    barWidth: '16.66666%',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    xAxisIndex: 1,
                    yAxisIndex: 1
                }, {
                    data: [{
                        name: '医疗卫生',
                        value: 1
                    }],
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        offset: [-15, 10],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    type: 'bar',
                    barGap: 0,
                    barWidth: '16.66666%',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    xAxisIndex: 1,
                    yAxisIndex: 1
                }, {
                    data: [{
                        name: '交通运输',
                        value: 1
                    }],
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        offset: [-20, 10],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    type: 'bar',
                    barGap: 0,
                    barWidth: '16.66666%',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    xAxisIndex: 1,
                    yAxisIndex: 1
                }, {
                    data: [{
                        name: '汽车工业',
                        value: 1
                    }],
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        offset: [-20, 10],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    type: 'bar',
                    barGap: 0,
                    barWidth: '18.1818%',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    xAxisIndex: 1,
                    yAxisIndex: 1
                }, {
                    data: [{
                        name: '钢铁制金',
                        value: 1
                    }],
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        offset: [-30, 10],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    type: 'bar',
                    barCategoryGap: 0,
                    barGap: 0,
                    barWidth: '16.66666%',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    xAxisIndex: 1,
                    yAxisIndex: 1
                }, {
                    data: [{
                        name: '政企云',
                        value: 1
                    }],
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        offset: [-30, 10],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    type: 'bar',
                    barCategoryGap: 0,
                    barGap: 0,
                    barWidth: '16.66666%',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    xAxisIndex: 1,
                    yAxisIndex: 1
                }]
            });
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