// let baseUrl = "https://mock.zhaoly.cn/mock/5e5b8173a16073001fc14d28/bilibili"; //定义基本baseUrl
let baseUrl = "https://mock.zhaoly.cn/mock/5e5b8173a16073001fc14d28/bilibili"

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // NProgress.start()//开始加载进度条
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code !== 200) {
        ELEMENT.Message({
            message: res.msg || "Error",
            type: "error",
            showClose: true,
            duration: 3 * 1000,
        });
    } else {
        return res;
    }
}, function(error) {
    // 对响应错误做点什么
    // return Promise.reject(error);

    ELEMENT.Message({
        message: error.message,
        type: "error",
        showClose: true,
        duration: 3 * 1000,
    });
    return Promise.reject(error);
});

// service.interceptors.request.use(
//     config => {
//         //config.headers['Accept'] = 'application/json'
//         return config;
//     },
//     error => {
//         ELEMENT.Message({
//             message: "加载超时",
//             type: "error",
//             center: true
//         });
//         return Promise.reject(error);
//     }
// );

// // 添加响应拦截器
// service.interceptors.response.use(
//     response => {
//         return response.data;
//     },
//     error => {
//         ELEMENT.Message({
//             message: "加载失败",
//             type: "error",
//             center: true
//         });
//         return Promise.reject(error);
//     }
// );

const GET = (url, params) => {
    return axios.get(`${baseUrl}${url}`, { params: params }).then(data => data)
}

const POST = (url, params) => {
    return axios.post(`${baseUrl}${url}`, params).then(data => data)
}