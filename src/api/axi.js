import axios from 'axios'
import iview from 'view-design'
import config from '../config/config'

axios.defaults.baseURL = config.BaseURL
axios.defaults.timeout = config.Timeout
axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8"

// 添加请求拦截器
axios.interceptors.request.use(req => {
    // console.log(config.BaseURL);
    // if (req.method == "post") {
    //
    // }
    return req
}, error => {
    return Promise.reject(error);
})

// 响应拦截器
axios.interceptors.response.use(res => {
    if (typeof res.data == 'string') {
        alert(res.data)
    }

    switch (res.status) {
        case 200:
            return res.data
        case 300:
            break;
        case 401:
            // auth
            break;
        default:
            iview.$Message.error(res.data);
            break;
    }
}, error => {
    return Promise.reject(error)
})

export default axios;

