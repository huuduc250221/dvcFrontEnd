import React from 'react'

import {Row,Col} from 'antd'
import mail from '../../logo/mail.svg'
import google from '../../logo/google.svg'
import facebook from '../../logo/facebook.svg'
import phone from '../../logo/telephone.svg'
import './AssistanceElement.css'

export default function AssistanceElement() {
    return <div className='assistanceElement'>
        <h2>Liên Hệ và Hỗ Trợ</h2>
        <Row justify='space-around'>
            <Col xl={5} sm={10}>
                <div className='supportBox'>
                    <img src={google} width='100%%' alt='icon gì đó' className='svg-logo'/>
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
            <Col xl={5} sm={10}>
                <div className='supportBox' >
                    <img src={facebook} width='100%' alt='icon gì đó'className='svg-logo'/>
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
            <Col xl={5} sm={10}>
                <div className='supportBox' >
                    <img src={phone} width='100%' alt='icon gì đó' className='svg-logo'/>
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
            <Col xl={5} sm={10}>
                <div className='supportBox' >
                    <img src={mail} width='100%' alt='icon gì đó' className='svg-logo'/>
                    <span>Hỗ trợ kĩ thuật</span>
                    <a href='#' >Bấm vào đây</a>
                </div>
            </Col>
        </Row>
    </div>
}