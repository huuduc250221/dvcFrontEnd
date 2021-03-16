import { Menu, Button, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import cityLogo from '../../../logo/city-logo.jpg'
import './NavBar.css'

export default function NavBar() {

    const [current, setCurrentSelect] = useState('Mail')

    const handleClick = e => {
        console.log('click ', e);
        setCurrentSelect(e.key)
    };

    return (

        <Row className='navRow'>
            <Col className='navCol' span={16} offset={4} >
                <nav>
                    <div className='logo'>
                        <img src={cityLogo} alt='Logo' width='50px'/>
                    </div>
                    <div className='rightMenu'>
                        <Menu onClick={handleClick} selectable='false' selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="TrangChu" >
                                <Link to='/'>TRANG CHỦ</Link>
                            </Menu.Item>
                            <Menu.Item key="question" >
                                <Link to='/huongdan'>HƯỚNG DẪN</Link>
                            </Menu.Item>

                            <Menu.Item key="contact">
                                <Link to='/lienhe'>LIÊN HỆ</Link>
                            </Menu.Item>
                            <Menu.Item key="nopthutuc">
                                <Button type='primary' shape='round'><Link to='/tiepnhanhoso'>NỘP THỦ TỤC</Link></Button>
                            </Menu.Item>
                        </Menu>
                    </div>
                </nav>
            </Col>
        </Row>




    );
}