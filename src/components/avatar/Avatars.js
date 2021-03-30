import { Avatar, Dropdown, Menu } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import LogOut from '../logout/LogOut';
import Cookie from 'js-cookie'
import { fetchUser } from '../../redux/reducers/FetchUserReducer';

const Avatars = () => {
    const { user, fetchSuccess } = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        if(Cookie.get('token') && !fetchSuccess) {
            dispatch(fetchUser())
        }
    },[])

    const dropDownMenu = (<Menu>
        <Menu.Item>
            avatar
        </Menu.Item>
        <Menu.Item>
            avatar
        </Menu.Item>
        <Menu.Item>
            <LogOut />
        </Menu.Item>
    </Menu>)
    return (
        <div>
            <Dropdown overlay={dropDownMenu}  >
                <div>
                    <Link to='/profilePage'>
                        {
                            fetchSuccess ? <Avatar src={user.avatar} size={32} /> : <Avatar size={32} icon={<UserOutlined />} />
                        }
                    </Link>
                </div>
            </Dropdown>


        </div>
    );
};

export default Avatars;