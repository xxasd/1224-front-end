import React, { useContext, useState } from 'react'
import { ThemeContext, CHANGE_THEME } from '../../../../store/theme'
import './index.scss'

// 根据主题显示晴天还是夜晚
const WeatherLight: React.FC = () => {
    // 主题
    const { state, dispatch } = useContext(ThemeContext);
    const { theme } = state;
    // 判断使用什么主题
    const [ isLight, setIsLight ] = useState(true);

    const changeTheme = () => {
        setIsLight(!isLight);
        dispatch({
            type: CHANGE_THEME,
            theme: isLight?'light':'dark'
        })
    }

    return(
        <div 
            className={`weather ${theme === 'light'? 'sunny':'dark'}`}
            onClick={changeTheme}
        ></div>
    )
}

export default WeatherLight