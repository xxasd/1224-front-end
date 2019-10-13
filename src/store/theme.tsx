/**
 * 通过useContext + useReducer 替代redux管理全局状态
 * 具体篇幅参考https://juejin.im/post/5ceb37c851882520724c7504
 */

import React, { createContext, useReducer } from 'react'

interface IAction {
    type: string,
    theme: string
}

const initialAction: IAction = {
    type: 'DEFAULT_THEME',
    theme: 'light'
}

// 创建主题色 themeContext
export const ThemeContext = createContext({theme: "dk", dispatch: {}});

/**
 * reducer
 */
export const CHANGE_THEME: string = "CHANGE_THEME"

const reducer = (state: string, action: IAction) => {
    switch(action.type) {
        case CHANGE_THEME:
            return action.theme
        default:
            return state
    }
}

/**
 * 创建一个 Theme 组件
 * Theme 组件包裹的所有子组件都可以通过调用 themeContext 访问 value
 */
export const Theme: React.FC = props => {
    const [theme, dispatch] = useReducer(reducer, initialAction.theme);
    return (
        <ThemeContext.Provider 
            value={{theme, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}