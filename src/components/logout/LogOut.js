import { Button } from 'antd';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import { logoutActionMDW } from '../../redux/reducers/LoginReducer'

const LogOut = () => {
    const dispatch = useDispatch()
    function handleLogOut(e) {
        dispatch(logoutActionMDW())

    }
    return (
        <div>
            <span onClick={handleLogOut}>
                <Link to='/'>
                    Đăng xuất
                </Link>
            </span>
        </div>
    );
};

export default LogOut;