import React, { useEffect } from 'react'
import { Menu } from 'antd'

const { SubMenu } = Menu;

const MainMenu: React.FC = (prop) => {

    const handleClick = (e: any) => {
        console.log('click', e);
    }

    useEffect(() => {
        
    }, [prop]);

    return (
        <Menu
            onClick={handleClick}
            mode="inline">
                <Menu.Item key="1">
            <span>Option 1</span>
          </Menu.Item>
            <SubMenu 
                title={<span>asdq</span>}
                >
                <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    )
}

export default MainMenu;