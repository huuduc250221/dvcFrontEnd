import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import {logoutActionMDW} from '../../redux/reducers/LoginReducer'

const LogOut = () => {
    const dispatch = useDispatch()

    function handleLogOut(e) {
        dispatch(logoutActionMDW())
        
    }
    return (
        <div>
            <Button htmlType='button' onClick={handleLogOut} >Đăng xuất</Button>
        </div>
    );
};

export default LogOut;