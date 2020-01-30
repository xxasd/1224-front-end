import React, { useContext, useState } from 'react'
import { Switch } from 'antd'
import { ThemeContext, CHANGE_THEME } from '@/store/theme'
import './index.scss'

// 作者头像
const authorAvatar = "https://wx2.sinaimg.cn/mw690/c990b2b8ly8g5focjdx0jj20u00u0myy.jpg";

// 首页-欢迎页
const IndexPages: React.FC = () => {
    // 修改theme主题
    const { state, dispatch } = useContext(ThemeContext);
    const { theme } = state;

    // 主题的status
    const [isDark, setIsDark] = useState(false);

    // 修改主题function
    function onChange(checked: boolean) {
        setIsDark(checked);
        dispatch({
            type: CHANGE_THEME,
            theme: isDark ? 'dark' : 'light'
        })
    }

    return (
        <div className={`index-panel ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className="change-theme">
                <Switch onChange={onChange}></Switch>
            </div>
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
            </div>
        </div>
    )
}

export default IndexPages