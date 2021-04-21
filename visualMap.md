visualMap=[                                     //视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素。视觉元素可以是：symbol: 图元的图形类别。symbolSize: 图元的大小。color: 图元的颜色。
                                                 // colorAlpha: 图元的颜色的透明度。opacity: 图元以及其附属物（如文字标签）的透明度。colorLightness: 颜色的明暗度。colorSaturation: 颜色的饱和度。colorHue: 颜色的色调。
    {
        show:true,                              //是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
        type: 'continuous',                     // 定义为连续型 viusalMap
        min:10,                                  //指定 visualMapContinuous 组件的允许的最小值
        max:100,                                 //指定 visualMapContinuous 组件的允许的最大值
        range:[15, 40],                          //指定手柄对应数值的位置。range 应在 min max 范围内
        calculable:true,                        //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
        realtime:true,                          //拖拽时，是否实时更新
        inverse:false,                          //是否反转 visualMap 组件
        precision:0,                            //数据展示的小数精度，默认为0，无小数点
        itemWidth:20,                           //图形的宽度，即长条的宽度。
        itemHeight:140,                         //图形的高度，即长条的高度。
        align:"auto",                           //指定组件中手柄和文字的摆放位置.可选值为：'auto' 自动决定。'left' 手柄和label在右。'right' 手柄和label在左。'top' 手柄和label在下。'bottom' 手柄和label在上。
        text:['High', 'Low'],                   //两端的文本
        textGap:10,                              //两端文字主体之间的距离，单位为px
        dimension:2,                            //指定用数据的『哪个维度』，映射到视觉元素上。『数据』即 series.data。 可以把 series.data 理解成一个二维数组,其中每个列是一个维度,默认取 data 中最后一个维度
        seriesIndex:1,                          //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
        hoverLink:true,                         //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
        inRange:{                               //定义 在选中范围中 的视觉元素
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        },
        outOfRange:{  //定义 在选中范围外 的视觉元素。
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        },
        zlevel:0,                                   //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
        z:2,                                         //所属组件的z分层，z值小的图形会被z值大的图形覆盖
        left:"center",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
        top:"top",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
        right:"auto",                               //组件离容器右侧的距离,'20%'
        bottom:"auto",                              //组件离容器下侧的距离,'20%'
        orient:"vertical",                         //图例排列方向
        padding:5,                                   //图例内边距，单位px  5  [5, 10]  [5,10,5,10]
        backgroundColor:"transparent",            //标题背景色
        borderColor:"#ccc",                         //边框颜色
        borderWidth:0,                               //边框线宽
        textStyle:mytextStyle,                      //文本样式
        formatter: function (value) {                 //标签的格式化工具。
            return 'aaaa' + value;                    // 范围标签显示内容。
        }
    },
    {
        show:true,                          //是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
        type: 'piecewise',                  // 定义为分段型 visualMap
        splitNumber:5,                      //对于连续型数据，自动平均切分成几段。默认为5段
        pieces: [                           //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
            {min: 1500},                     // 不指定 max，表示 max 为无限大（Infinity）。
            {min: 900, max: 1500},
            {min: 310, max: 1000},
            {min: 200, max: 300},
            {min: 10, max: 200, label: '10 到 200（自定义label）'},
            {value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
            {max: 5}                        // 不指定 min，表示 min 为无限大（-Infinity）。
        ],
        categories:['严重污染', '重度污染', '中度污染', '轻度污染', '良', '优'],  //用于表示离散型数据（或可以称为类别型数据、枚举型数据）的全集
        min:10,                             //指定 visualMapContinuous 组件的允许的最小值
        max:100,                             //指定 visualMapContinuous 组件的允许的最大值
        minOpen:true,                       //界面上会额外多出一个『< min』的选块
        maxOpen:true,                       //界面上会额外多出一个『> max』的选块。
        selectedMode:"multiple",           //选择模式，可以是：'multiple'（多选）。'single'（单选）。
        inverse:false,                      //是否反转 visualMap 组件
        precision:0,                        //数据展示的小数精度，默认为0，无小数点
        itemWidth:20,                       //图形的宽度，即长条的宽度。
        itemHeight:140,                     //图形的高度，即长条的高度。
        align:"auto",                       //指定组件中手柄和文字的摆放位置.可选值为：'auto' 自动决定。'left' 手柄和label在右。'right' 手柄和label在左。'top' 手柄和label在下。'bottom' 手柄和label在上。
        text:['High', 'Low'],               //两端的文本
        textGap:10,                          //两端文字主体之间的距离，单位为px
        showLabel:true,                     //是否显示每项的文本标签
        itemGap:10,                          //每两个图元之间的间隔距离，单位为px
        itemSymbol:"roundRect",             //默认的图形。可选值为： 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        dimension:2,                          //指定用数据的『哪个维度』，映射到视觉元素上。『数据』即 series.data。 可以把 series.data 理解成一个二维数组,其中每个列是一个维度,默认取 data 中最后一个维度
        seriesIndex:1,                        //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
        hoverLink:true,                      //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
        inRange:{                             //定义 在选中范围中 的视觉元素
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        },
        outOfRange:{                            //定义 在选中范围外 的视觉元素。
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        },
        zlevel:0,                                   //所属图形的Canvas分层，zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
        z:2,                                         //所属组件的z分层，z值小的图形会被z值大的图形覆盖
        left:"center",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
        top:"top",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
        right:"auto",                               //组件离容器右侧的距离,'20%'
        bottom:"auto",                              //组件离容器下侧的距离,'20%'
        orient:"vertical",                        //图例排列方向
        padding:5,                                   //图例内边距，单位px  5  [5, 10]  [5,10,5,10]
        backgroundColor:"transparent",            //标题背景色
        borderColor:"#ccc",                         //边框颜色
        borderWidth:0,                               //边框线宽
        textStyle:mytextStyle,                      //文本样式
        formatter: function (value) {                //标签的格式化工具。
            return 'aaaa' + value;                   // 范围标签显示内容。
        }
    }
];