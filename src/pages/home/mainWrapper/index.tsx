import React, { useContext, useEffect } from 'react'
import { ThemeContext, CHANGE_THEME } from '../../../store/theme'
import './index.scss'
import MainMenu from './mainMenu'
import MainContent from './mainContent'
import { Row, Col, Switch } from 'antd'

const MainWrapper: React.FC = () => {
    // 主题
    const { state, dispatch } = useContext(ThemeContext);
    const { theme } = state;
    
    useEffect(() => {
        console.log(state);
    });
    
    return (
        <div 
            className={`main-wrapper ${theme==="light"?'':'ant-menu-dark'}`}>
            <div className="switch-theme">
                <Switch
                    checked={theme==="light"}
                    onChange={(value) => {
                        console.log(value);
                        dispatch({
                            type: CHANGE_THEME,
                            theme: value?'light':'dark'
                        })
                    }}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
            </div>
            <div className="am-row">
                <Row>
                    {/* main-menu */}
                    <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={3}>
                        <MainMenu children={theme} />
                    </Col>
                    {/* content */}
                    <Col xs={0} sm={0} md={19} xl={19} xxl={21}>
                        <MainContent />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default MainWrapper;