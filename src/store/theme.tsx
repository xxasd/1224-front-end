import React, { createContext, Context, useReducer } from 'react'

// 定义主题色的接口
interface ITheme {
    theme: string
}
// 初始化
export const initialTheme: ITheme = {
    theme: 'light'
}

// 创建Context状态实例
export const ThemeContext: Context<any> = createContext(initialTheme);

// 初始化store的类型、初始化值、reducer
export const CHANGE_THEME: string = 'CHANGE_THEME';

export const reducer = (state: ITheme, action: any) => {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, theme: action.theme }
        default:
            throw new Error();
    }
}


/**
 * 创建一个 Theme 组件
 * Theme 组件包裹的所有子组件都可以通过调用 ThemeContext 访问到 value
 */
export const Theme: React.FC = (props) => {
    const [state, dispatch] = useReducer(reducer, initialTheme);
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}