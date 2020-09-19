import React from 'react'
import { Layout as MainLayout } from 'antd'
import {Aside} from "./Aside/Aside";

export const Layout = props => {
    const { Header, Content } = MainLayout

    return (
        <MainLayout style={{ minHeight: "100vh"}}>
            <Aside />
            <MainLayout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0}} />
                <Content style={{ margin: '0 16px' }}>
                    {/*<Breadcrumb style={{ margin: "16px 0"}}>*/}
                    {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>Bills</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    Content
                </Content>
            </MainLayout>
        </MainLayout>
    )
}