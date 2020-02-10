import React, { useState, useImperativeHandle } from 'react'
import { Modal, Form, Input } from 'antd'


interface LoginProps {
    cref: any
}

const LoginComponent: React.FC<LoginProps> = ({ cref }) => {

    const [showLogin, setShowLogin] = useState(false)

    useImperativeHandle(cref, ()=> ({
        changeShowLogin: (newVal: boolean) => {
            setShowLogin(newVal)
        }
    }));

    const changeShowLogin = () =>{
        setShowLogin(!showLogin)
    }

    return (
        <div className="login-component">
            <Modal 
                centered
                visible={showLogin}
                title="Login in"
                okText="login in"
                onCancel={changeShowLogin}
            >
                <Form layout="vertical">
                    <Form.Item>
                        <Input></Input>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default LoginComponent;