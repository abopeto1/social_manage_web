import React from 'react'
import { Row, Col } from 'antd'
import FacebookLogin from 'react-facebook-login'

export const Login = ({setName}) => {
    const responseFacebook = (response) => {
        console.log(response);
        sessionStorage.name = response.name
        sessionStorage.userID = response.userID
        sessionStorage.accessToken = response.accessToken
        sessionStorage.picture = response.picture.url
        setName(response.name)
    }

    return (
        <Row>
            <Col span={24}>
                <FacebookLogin
                    appId="579661269392331"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook} />
            </Col>
        </Row>
    )
}