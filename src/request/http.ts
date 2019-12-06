// https://juejin.im/post/5b55c118f265da0f6f1aa354
// 封装axios
import axios from 'axios'
import baseUrl from './baseUrl'
// import qs from 'qs'
import { notification, Modal } from 'antd'

const { confirm } = Modal;

const instance = axios.create({
    // 配置默认项
    baseURL: baseUrl,        // 请求地址url
    timeout: 10000,          // 请求超时时间
})

instance.interceptors.response.use(
    response => {
        // 成功
        if (response.data.status === 200) {            
            return Promise.resolve(response.data);        
        } else {
            notification['error']({
                message: response.data.message
            })
            return Promise.reject({
                message: response.data.message
            });        
        }

        // session 过期
        // 系统异常
    },
    // 服务器状态码不是2开头的的情况
    error => {
        try {
            notification['error']({
                message: error.response.data.message || '系统异常'
            })
            // 需要登录才能进行的操作
            if (error.response.status === 401) {
                confirm({
                    title: 'error',
                    content: error.response.data.message,
                    onOk() {
                        return new Promise((resolve, reject) => {
                            setTimeout(resolve ? resolve : reject, 1000);
                        }).then(() => 
                            window.location.host = '/login'
                        ).catch(() => 
                            notification['error']({
                                message: error.response.data.message || '系统异常'
                            })
                        );
                    },
                    onCancel() {}
                })
            }
        } catch (err) {
            console.log('[系统异常]', err);
            notification['error']({
                message: '系统异常，请稍后重试！'
            })
        }
        return Promise.reject({
            messageCode: 'sysError'
        });
    }
)

export default instance;