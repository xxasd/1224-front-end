// https://juejin.im/post/5b55c118f265da0f6f1aa354
// 封装axios
import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

// 环境的切换

const environment = process.env.NODE_ENV;

switch (environment) {
    case 'development':
        axios.defaults.baseURL = 'https://www.baidu.com';
        break;
    case 'test':
        axios.defaults.baseURL = 'https://www.test.com';
        break;
    case 'production':
        axios.defaults.baseURL = 'https://www.production.com';
        break;
    default:
        break;
}

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }
    },
    // 服务器状态码不是2开头的的情况
    error => {
        message.info('This is a normal message');
        return Promise.reject(error.response);
    }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: object) {    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
        })    
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url: string, params: object) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

/** 
 * put方法，对应put请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function put(url: string, params: object) {
    return new Promise((resolve, reject) => {
        axios.put(url, qs.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}

/** 
 * del方法，对应delete请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function del(url: string, params: object) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {            
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
        })
    });
}