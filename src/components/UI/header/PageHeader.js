import React from 'react'
import { Col, Row } from 'antd'
import NavBar from './NavBar'
import './PageHeader.css'



export default function PageHeader() {

    return <>
        <header >
            <Row >
                <Col span={16} offset={4} style={{textAlign:'right'}}>
                    Giải đáp thông tin về chuyên môn:<a href='tel:0966331010' className='header-phone'>0966331010</a>
                    &nbsp; Hỗ trợ kỹ thuật: <a href='tel:0966331010' className='header-phone'>0966331010</a></Col>
            </Row>


        </header>
        <NavBar />
    </>
}