import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import {logOutAction} from '../../redux/reducers/LoginReducer'

const LogOut = () => {
    const dispatch = useDispatch()

    function handleLogOut(e) {
        localStorage.removeItem('loggin')
        dispatch(logOutAction)
        
    }
    return (
        <div>
            <Button htmlType='button' onClick={handleLogOut} >Đăng xuất</Button>
        </div>
    );
};

export default LogOut;