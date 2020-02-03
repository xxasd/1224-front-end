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
            <Modal></Modal>
        </div>
    )
}

export default LoginComponent;