import React from 'react'
import { Button, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import homeBackgound from '../../logo/home-backgound.jpeg'
import ggDown from '../../logo/gg-dowload.svg'
import appStoreDown from '../../logo/appStore-dowload.svg'
import quobee from '../../logo/quobee.jpg'

import './Banner.css'

export default function Banner({ srcBackground }) {

    return <div >
        <div className='homeBanner' style={{ backgroundImage: `url('${homeBackgound}')` }}>
            <div className='onHomeBanner'>
                <h2>Nộp hồ sơ trực tuyến tại <br /> <strong>Dịch vụ công TP Thủ Đức</strong></h2>
                <Button className="buttonBanner" type='primary' shape='round'><Link to='/tiepnhanhoso'>Tiếp nhận hồ sơ</Link></Button>
                <Button className="buttonBanner" type='primary' shape='round'><Link to='tracuuhoso'>Tra cứu hồ sơ</Link></Button>
                <Button className="buttonBanner" type='primary' shape='round'><Link>Làm gì đó</Link></Button>
                <Button className="buttonBanner" type='primary' shape='round'><Link>làm gì đó</Link></Button>

            </div>
        </div>

        <div className='homeSearch' style={{paddingTop:'3rem'}}>
            <h3>Tra cứu </h3>
            <Row gutter={16}>
                <Col span={12}>
                    <div className='clickBoxHome' style={{padding:'20px'}}>
                        <img src='https://play-lh.googleusercontent.com/mLvvgUXJVZeu-GbqWZfr8ug74V7d8Od9yU2AOvUUptiki9wIH-BJHataFTJI_J0TlQ' width='100px'/>
                        Tra cứu thông tin
                        <Button style={{float:'right'}}>Tra cứu</Button>

                    </div>
                </Col>

                <Col span={12}>
                    <div className='clickBoxHome' style={{padding:'20px'}}>
                        <img  src='https://play-lh.googleusercontent.com/mLvvgUXJVZeu-GbqWZfr8ug74V7d8Od9yU2AOvUUptiki9wIH-BJHataFTJI_J0TlQ' width='100px'/>

                        <span>Tra cứu thông tin</span>
                        <Button style={{float:'right'}}>Tra cứu</Button>
                    </div>
                </Col>
            </Row>

        </div >
        <div className='homeDownload' style={{paddingTop:'3rem'}}>
            <h3>Tải Ứng dụng Dịch vụ công thành phố Thủ Đức</h3>
            <Row style={{marginTop:'3rem'}} justify='center' gutter={16}>
            <Col span={6}>
                <img src={ggDown} />
            </Col>
            <Col span={6}>
                <img src={appStoreDown} />
            </Col>
            </Row>
        </div>
        <div style={{marginTop:'3rem'}}>
            <h3>Liên Hệ và Hỗ Trợ</h3>
            <Row justify='space-around'>
                <Col xl={5} sm={10}>
                    <div className='supportBox'>
                        <img src={quobee} width='100%'/>
                        <span>Hỗ trợ kĩ thuật</span>
                        <a href='#' >Bấm vào đây</a>
                    </div>
                </Col>
                <Col xl={5} sm={10}>
                    <div className='supportBox'>
                        <img src={quobee} width='100%'/>
                        <span>Hỗ trợ kĩ thuật</span>
                        <a href='#' >Bấm vào đây</a>
                    </div>
                </Col>
                <Col xl={5} sm={10}>
                    <div className='supportBox'>
                        <img src={quobee} width='100%'/>
                        <span>Hỗ trợ kĩ thuật</span>
                        <a href='#' >Bấm vào đây</a>
                    </div>
                </Col>
                <Col xl={5} sm={10}>
                    <div className='supportBox'>
                        <img src={quobee} width='100%'/>
                        <span>Hỗ trợ kĩ thuật</span>
                        <a href='#' >Bấm vào đây</a>
                    </div>
                </Col>
                <Col xl={5} sm={10}>
                    <div className='supportBox'>
                        <img src={quobee} width='100%'/>
                        <span>Hỗ trợ kĩ thuật</span>
                        <a href='#' >Bấm vào đây</a>
                    </div>
                </Col>
            </Row>

        </div>
    </div>
}