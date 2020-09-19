import React from 'react'
import { Menu as MainMenu } from "antd";
import styled from 'styled-components'

const StyledMenu = styled(MainMenu)`
    background: transparent;
    margin-top: 24px;
`

export const Menu = ({children, ...props}) => {
    return (
        <StyledMenu { ...props }>
            { children }
        </StyledMenu>
    )
}