import React from 'react'
import { Col, Layout, Row } from 'antd'
import NavBar from './NavBar'

const { Header } = Layout


export default function PageHeader() {

    return <>
        <header>
            <Row >
                <Col span={16} offset={4} style={{textAlign:'right'}}>
                    Giải đáp thông tin về chuyên môn:0966331010
                    Hỗ trợ kỹ thuật:1900.2267</Col>
            </Row>


        </header>
        <NavBar />
    </>
}