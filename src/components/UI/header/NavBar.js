import { Menu, Button, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// import Cookies from 'js-cookie'
import cityLogo from '../../../logo/city-logo.jpg'
import Avatars from '../../avatar/Avatars';

import './NavBar.css'

// import { loginAuthenticated } from '../../../redux/reducers/LoginReducer';
import useAuth from '../../../hooks/useAuth';
import NotificationBell from '../../notification/NotificationBell';



export default function NavBar() {
    const [current, setCurrentSelect] = useState('Mail')
    const success = useAuth()
    console.log(success)
    // const {success} = useSelector(state => state.user)
    // let isAuth=localStorage.getItem('isLogin')||false
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     if(isAuth) {
    //         dispatch(loginAuthenticated)
    //     }
    // },[])


    const handleClick = e => {
        console.log('click ', e);
        setCurrentSelect(e.key)
    };

    return (

        <Row className='navRow'>
            <Col className='navCol' span={16} offset={4} >
                <nav>
                    <div className='logo'>
                        <img src={cityLogo} alt='Logo' width='50px' />
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
                            <>
                              {success?<NotificationBell />:<></>}  
                            </>
                            <Menu.Item key='avatar' >
                                {success ? <Avatars /> : <Button type='primary' shape='round'><Link to='/login'>Login</Link></Button>}

                            </Menu.Item>
                        </Menu>
                    </div>
                </nav>

            </Col>
        </Row>
    );
}