import * as React from 'react'
import './index.scss'
import { Row, Col, Menu, Icon, Input } from 'antd'

const navBar: React.FC = () => {
    return (
        <header id="header" className="clearfix">
            <div className="am-row">
                <Row>
                    {/* logo */}
                    <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                        <a id="logo" href="/">
                            <img src="https://wx2.sinaimg.cn/mw690/c990b2b8ly8g5focjdx0jj20u00u0myy.jpg" alt="logo"/>
                            <img src={require('../../../assets/a-mile.svg')} alt="A mile"/>
                        </a>
                    </Col>
                    <Col xs={0} sm={24} md={19} lg={19} xl={19} xxl={20}>
                        {/* seach */}
                        <div id="search-box">
                            <Icon type="search" />
                            <Input placeholder="搜索" />
                        </div>
                        {/* nav */}
                        <Menu id="nav" mode="horizontal">
                            <Menu.Item>
                                <Icon type="appstore" />
                                跳转一
                            </Menu.Item>
                            <Menu.Item>
                                <Icon type="ant-design" />
                                跳转二
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        </header>
    )
};

export default navBar