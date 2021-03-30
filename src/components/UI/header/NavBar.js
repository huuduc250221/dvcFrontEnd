import { Menu, Button, Row, Col } from 'antd';
import { useDebugValue, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// import Cookies from 'js-cookie'
import cityLogo from '../../../logo/city-logo.jpg'
import Avatars from '../../avatar/Avatars';
import './NavBar.css'
import { fetchUser } from '../../../redux/reducers/FetchUserReducer';
import Cookies from 'js-cookie';



export default function NavBar() {
    
    const { success } = useSelector(state => state.user)

    const [current, setCurrentSelect] = useState('Mail')

    const {fetchSuccess} = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(()=> {
        // console.log(Cookies.get())
        // console.log(Cookies.get('token'))
        // if(Cookies.get('token')) {
        //     console.log('get cookie')
        // }
        // if(Cookies.get('token')&&!success) {
        //     console.log('dispatch users')
        //     dispatch(fetchUser())
        // }
        if(!fetchSuccess) {
            dispatch(fetchUser())
        }
    },[])
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
                            <Menu.Item key='avatar' >
                                {success||fetchSuccess ? <Avatars /> : <Button type='primary' shape='round'><Link to='/login'>Login</Link></Button>}

                            </Menu.Item>
                        </Menu>
                    </div>
                </nav>

            </Col>
        </Row>




    );
}