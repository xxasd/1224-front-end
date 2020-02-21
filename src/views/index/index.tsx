import React, { useRef } from 'react'
import LoginComponent from '@/components/login'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'antd'
import { iconFontUrl } from '@/config'
import './index.scss'

// 作者头像
const authorAvatar = "https://wx2.sinaimg.cn/mw690/c990b2b8ly8g5focjdx0jj20u00u0myy.jpg";

// IconFont
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: iconFontUrl,
});

// 首页-欢迎页
const IndexView: React.FC = () => {

    const childRef = useRef<any | null>(null);

    const updateChildState = () => {
        if (childRef.current) {
            childRef.current.changeShowLogin(true);
        }
    }

    return (
        <div className="index-panel">
            {/* 背景图 */}
            <div className="index-bg" />
            {/* 内容 */}
            <div className="index-content">
                <div className="author-avatar">
                    <img
                        src={authorAvatar}
                        alt="amile"
                    />
                </div>
                <h1>This project write by React Hooks TypeScript and Antd</h1>
                <h3>Author: A mile</h3>
                <p>welcome to give a star in my project</p>

                <Button 
                    className="index-btn btn-right" 
                    ghost 
                    onClick={updateChildState}
                >
                    log in
                </Button>
                <Link to="/home">
                    <Button className="index-btn btn-left" ghost>visit articles</Button>
                </Link>

            </div>
            {/* 作者链接 */}
            <div className="index-links">
                {links.map((item, index) => {
                    return (
                        <a
                            key={index}
                            className="link"
                            href={item.link ? item.link : '#'}
                            target={item.link ? '_blank' : ''}
                        >
                            {
                                item.iconType === 'antd'
                                    ? <Icon type={item.icon} />
                                    : <IconFont type={item.icon} />
                            }
                        </a>
                    ) 
                })}
            </div>

            {/* 登录组件 */}
            <LoginComponent cref={childRef} />
        </div>
    )
}

// 入口链接
const links = [
    {
        name: 'github',
        icon: 'github',
        link: 'https://github.com/xxasd/1224-front-end',
        iconType: 'antd'
    },
    {
        name: 'weibo',
        icon: 'weibo',
        link: 'https://weibo.com/u/3381703352/home',
        iconType: 'antd'
    },
    {
        name: 'wechat',
        icon: 'wechat',
        link: null,
        iconType: 'antd'
    },
    {
        name: 'juejin',
        icon: 'iconjuejin',
        link: 'https://juejin.im/user/5d4bbd9fe51d456201486de8',
        iconType: 'iconfont'
    }
]

export default IndexView