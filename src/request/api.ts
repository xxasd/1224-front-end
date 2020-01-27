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
const register = (registerData: IRegister) => {
    return http.post('/login/register', registerData);
}

exports.register = register;