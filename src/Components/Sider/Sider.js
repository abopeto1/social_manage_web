import React from 'react'
import styled from "styled-components";
import {Layout} from "antd";

const StyledSider = styled(Layout.Sider)`
    background: #f8f8fa;
    padding-left: 32px;
`

export const Sider = ({ children, ...props}) => {
    return (
        <StyledSider {...props}>
            { children }
        </StyledSider>
    )
}