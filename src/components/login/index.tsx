import React, { useState, useImperativeHandle, } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Form, Input, AutoComplete, message } from 'antd'

import { loginApi } from '@/request/api'

const InputGroup = Input.Group;

// 登录展示组件
interface LoginProps {
    cref: any
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

const LoginComponent: React.FC<LoginProps> = ({ cref }) => {
    // 浏览器
    const history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [dataSource, setAataSource] = useState()

    useImperativeHandle(cref, () => ({
        changeShowLogin: (newVal: boolean) => {
            setShowLogin(newVal)
        }
    }));

    const changeShowLogin = (): void => {
        setShowLogin(!showLogin)
    }

    const inputEmail = (value: any): void => {
        const source =
            !value || value.indexOf('@') >= 0
                ? []
                : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
        setEmail(value);
        setAataSource(source)
    }

    const inputPassword = (e: any): void => {
        const { value } = e.target;

        setPassword(value);
    }

    const login = async () => {
        if (!email) {
            message.error("email is required")
            return
        }
        if (!password) {
            message.error("password is required")
            return
        }
        const loginQuery: ILogin = {
            email: email,
            password: password
        }
        setConfirmLoading(true);
        try {
            const res = await loginApi(loginQuery);
            const { token } = res.data;
            localStorage.setItem("token", token);
            message.success("登录成功")

            // 隐藏登录组件
            setConfirmLoading(false)
            changeShowLogin()

            // 跳转至首页

            console.log(history)
            history.push('/home');
        } catch (error) {
            setConfirmLoading(false)
        }
    }

    return (
        <div className="login-component">
            <Modal
                centered
                visible={showLogin}
                title="Log in"
                okText="log in"
                confirmLoading={confirmLoading}
                onOk={login}
                onCancel={changeShowLogin}
            >
                <Form layout="vertical">
                    <Form.Item>
                        <InputGroup compact>
                            <AutoComplete
                                style={{ width: "100%" }}
                                dataSource={dataSource}
                                placeholder="email"
                                onChange={inputEmail}
                            />
                        </InputGroup>
                    </Form.Item>
                    <Form.Item>
                        <Input.Password
                            placeholder="password"
                            onChange={inputPassword}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    )
}

export default LoginComponent;