import React from "react";
import { Typography} from "antd";
import styled from "styled-components"

const Container = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    & h4{
        line-height: 1;
        font-size: 14px;
    }
`

export const Logo = () => {
    return (
        <Container>
            <Typography.Title level={4}>
                Social <br />
                Manager.
            </Typography.Title>
        </Container>
    )
}