import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import ggDown from '../../logo/gg-dowload.svg'
import appStoreDown from '../../logo/appStore-dowload.svg'
import './Footer.css'


export default function PageFooter() {
    return <footer >
        <Row >
            <Col span={16} offset={4}>
                <Row gutter={16}>
                    <Col xl={8} md={12} xs={24}>
                        <div className='footerCol1'>
                        <h2> Thành phố Thủ Đức</h2>
                        <p>Cơ quan chủ quản: Ủy ban Nhân dân TP Thủ Đức <br />
                    Cơ quan thường trực: Sở Thông tin và Truyền thông Thành phố Thủ Đúc<br />
                    Ðịa chỉ: Thành phố Thủ Đức
                    </p>
                    </div>
                    </Col>
                    <Col xl={8} md={12} xs={24}>
                        <div className='footerCol2'>
                            <Link to='/dieukhoan'>Điều khoản</Link>
                            <Link to='/chinhsach'>Chính sách</Link>
                            <Link to='/quydinhvabaomat'>Quy định và bảo mật</Link>
                        </div>
                    </Col>
                    <Col xl={8} md={12} xs={24}>
                        <div className='footerCol3'>
                            <img src={appStoreDown} alt='download from appstore'/>
                            <img src={ggDown} alt='download from play store' />
                            

                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </footer>
}