import React from 'react'
import { Button, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import homeBackgound from '../../logo/home-backgound.jpeg'
import search from '../../logo/search.svg'

import ggDown from '../../logo/gg-dowload.svg'
import appStoreDown from '../../logo/appStore-dowload.svg'

import './Banner.css'
import AssistanceElement from './AssistanceElement'

export default function Banner({ srcBackground }) {

    return <div >
        <div className='homeBanner' style={{ backgroundImage: `url('${homeBackgound}')` }}>
            <div className='onHomeBanner'>
                <h2>Nộp hồ sơ trực tuyến tại <br /> <strong>Dịch vụ công TP Thủ Đức</strong></h2>
                <Button className="buttonBanner" type='primary' shape='round'><Link to='/tiepnhanhoso'>Tiếp nhận hồ sơ</Link></Button>
                <Button className="buttonBanner" type='primary' shape='round'><Link to='tracuuhoso'>Tra cứu hồ sơ</Link></Button>
                <Button className="buttonBanner" type='primary' shape='round'><Link to='/nothing'>Làm gì đó</Link></Button>
                <Button className="buttonBanner" type='primary' shape='round'><Link to='/nothing'>làm gì đó</Link></Button>

            </div>
        </div>

        <div className='homeSearch' style={{ paddingTop: '3rem' }}>
            <h2>Tra cứu </h2>
            <Row gutter={16}>
                <Col span={12}>
                    <div className='clickBoxHome' >
                        <img src={search} alt='icon tìm kiếm' width='50px' />
                        <div className='content'>
                            <h3>Tra cứu các thủ tục</h3>

                        </div>
                        <Button type='primary' >
                            <Link to='/tiepnhanhoso'>Tra cứu</Link>
                        </Button>

                    </div>
                </Col>

                <Col span={12}>
                    <div className='clickBoxHome' >
                        <img src={search} alt='icon tìm kiếm' width='50px' />
                        <div className='content'>
                            <h3>Tra cứu hồ sơ</h3>
                        </div>
                        <Button type='primary' >
                            <Link to='/tracuuhoso'>Tra cứu</Link>

                        </Button>
                    </div>
                </Col>
            </Row>

        </div >
        <div className='homeDownload' style={{ paddingTop: '3rem' }}>
            <h2>Tải Ứng dụng Dịch vụ công thành phố Thủ Đức</h2>
            <Row style={{ marginTop: '3rem' }} justify='center' gutter={16}>
                <Col span={6}>
                    <img src={ggDown} alt='tải từ playStore' />
                </Col>
                <Col span={6}>
                    <img src={appStoreDown} alt='tải từ appStore' />
                </Col>
            </Row>
        </div>
        <div style={{ marginTop: '3rem' }}>

            <AssistanceElement />
        </div>
    </div>
}