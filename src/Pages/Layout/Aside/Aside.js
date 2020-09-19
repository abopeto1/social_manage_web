import React, {useState} from 'react'
import {Menu as MainMenu} from "antd";
import {Sider} from "../../../Components/Sider";
import {Logo} from "../../../Components/Logo";
import {Menu} from "../../../Components/Menu";

export const Aside = () => {
    const [collapsed, onCollapse] = useState()

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Logo />
            <Menu defaultSelectedKeys={[1]} mode={`inline`}>
                <MainMenu.Item key={1}>
                    Option 1
                </MainMenu.Item>
                <MainMenu.Item key={2}>
                    Option 2
                </MainMenu.Item>
                <MainMenu.Item key={3}>
                    Option 3
                </MainMenu.Item>
            </Menu>
        </Sider>
    )
}
