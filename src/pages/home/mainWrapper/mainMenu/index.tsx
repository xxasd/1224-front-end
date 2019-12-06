import React from 'react'
import { Menu } from 'antd'

const { SubMenu } = Menu;

// 首页左侧栏
const MainMenu: React.FC = (props) => {
    const theme = props.children;

    const handleClick = (e: any) => {
        // console.log('click', e);
    }

    return (
        <Menu
            className={
                `${theme === "light"
                 ?''
                 :'ant-menu-dark'}`
            }
            onClick={handleClick}
            mode="inline"
        >
            <Menu.Item key="1">
                <span>图库</span>
            </Menu.Item>
            <SubMenu 
                key="sub1"
                title={<span>文章</span>}
            >
                <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="2">Option 1</Menu.Item>
                    <Menu.Item key="3">Option 2</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    )
}

export default MainMenu;