import http from './http'

/**
 * 用户注册
 * @param {String} email    [电子邮箱]
 * @param {String} password [登录密码] 
 */
interface IRegister {
    email: string,
    password: string
}

// 注册
export const registerApi = (registerData: IRegister) => {
    return http.post('/login/register', registerData);
}

/**
 * 用户登录
 * @param {String} email    [电子邮箱]
 * @param {String} password [登录密码] 
 */
interface ILogin {
    email: string,
    password: string
}

// 登录
export const loginApi = (loginData: ILogin) => {
    return http.post('/login/login', loginData);
}