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
export const loginApi = (loginData: ILogin) => {
    return http.post('/login/login', loginData);
}

// 文章列表
export const articleListApi = () => {
    return http.get('/article/list');
}

/**
 * 新建文章
 * @param {String} title    [文章标题]
 * @param {String} content  [文章内容] 
 */
interface IArticleCreate {
    title: string,
    content: string,
    logo?: string
}
export const articleCreate = (articleData: IArticleCreate) => {
    return http.post('/article/create', articleData);
}