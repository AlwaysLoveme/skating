import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import app from './main'
/* eslint-disable */
const Axios = axios.create({
    baseURL: '/api',
    timeout: 10000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});
//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    config => {
        // 在发送请求之前做某件事
        app.$Progress.start(); // for every request start the progress
        if (
            config.method === "post"
        ) {
            // 序列化
            config.data = qs.stringify(config.data);
            // 温馨提示,若是贵公司的提交能直接接受json 格式,可以不用 qs 来序列化的
        }
        return config;
    },
    error => {
        app.$Progress.fail(); //结束进度条
        return Promise.reject(error.data.error.message);
    }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        app.$Progress.finish(); // finish when a response is received
        return res.data;
    },
    error => {
        // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
        // 直接丢localStorage或者sessionStorage
        // 返回 response 里的错误信息
        app.$Progress.fail(); //结束进度条
        let errorInfo = error.data.error ? error.data.error.message : error.data;
        return Promise.reject(errorInfo);
    }
);
Vue.prototype.$post = (url, params, handle) => {
    Axios.post(url, params).then(res => {
        handle(res)
    }).catch(error => {
        console.log(error)
    });
}
Vue.prototype.$get = (url, params, handle) => {
    Axios.get(url, params).then((res) => {
        handle(res)
    }).catch(error => {
        console.log(error)
    });
}
Vue.prototype.$upload = (url, params, handle) => {
    axios.post('/api' + url, params, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {
        handle(res.data)
    }).catch(err => {
        console.log(err);
    })
}
Vue.prototype.$baseUrl = () => {
    return 'https://www.xiandandan.xyz/images'
}
Vue.prototype.$format = (time) => {
    var date = new Date(Number(time));
    var year = date.getFullYear(),
        month = date.getMonth() + 1, //月份是从0开始的
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    var newTime = year + '-' +
        (month < 10 ? '0' + month : month) + '-' +
        (day < 10 ? '0' + day : day) + ' ' +
        (hour < 10 ? '0' + hour : hour) + ':' +
        (min < 10 ? '0' + min : min) + ':' +
        (sec < 10 ? '0' + sec : sec);
    return newTime;
}
Vue.prototype.$deleteHtmlTag = (str) => {
    return str.replace(/<[^>]+>/g, "");
}
Vue.prototype.$url = () => {
    return '/api'
}