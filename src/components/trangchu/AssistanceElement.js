import React from 'react'

import {Row,Col} from 'antd'
import quobee from '../../logo/quobee.jpg'

import './AssistanceElement.css'

export default function AssistanceElement() {
    return <div className='assistanceElement'>
        <h2>Liên Hệ và Hỗ Trợ</h2>
        <Row justify='space-around'>
            <Col xl={5} sm={10}>
                <div className='supportBox'>
                    <img src={quobee} width='100%' alt='icon gì đó' />
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
            <Col xl={5} sm={10}>
                <div className='supportBox' >
                    <img src={quobee} width='100%' alt='icon gì đó'/>
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
            <Col xl={5} sm={10}>
                <div className='supportBox' >
                    <img src={quobee} width='100%' alt='icon gì đó'/>
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
            <Col xl={5} sm={10}>
                <div className='supportBox' >
                    <img src={quobee} width='100%' alt='icon gì đó'/>
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
        </Row>
    </div>
}