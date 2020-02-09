import React, { useEffect } from 'react'
import { Modal, Form, Input } from 'antd'

interface loginTypes {
    IShowLogin: boolean
}

const LoginComponent: React.FC<loginTypes> = (props) => {
    
    const { IShowLogin } = props;

    useEffect(() => {
        console.log(IShowLogin);
    }, [IShowLogin]);

    return (
        <div className="login-component">
            <Modal 
                visible={IShowLogin}
                title="Login in"
                okText="login in"
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