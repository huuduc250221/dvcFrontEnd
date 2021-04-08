import React, { useState } from 'react';
import { BellOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Button, Dropdown, Space } from 'antd';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames'

import './NotificationBell.css'

const NotificatioinBell = () => {
    // số thông báo chưa đọc
    const [countNoti, setCountNoti] = useState(3)
    // const [readed, setReaded] = useState(false)
    const history = useHistory()
    // const location = useLocation()
    // const {avatar, noti} = useSelector(state =>state.notic)
    const fakeNoti = [
        { notication: 'Day la thong bao 1', readed: false },
        { notication: 'Day la thong bao 2', readed: true },
        { notication: 'Day la thong bao 3', readed: false },
    ]
    // form của 1 thông báo

    const notiElement = (item, index) => {
        return <div
            key={index}
            className={classNames('notification-item', { unread: !item.readed })}
            onClick={e => readedElement(e, item)}>
            <Space>
                <>
                    <Avatar icon={<UserOutlined />} size={32} />
                    <span>{item.notication}</span>
                </>
            </Space>
        </div>
    }

    const notiBoard = <div className='notification-board'>
        {
            fakeNoti.map((item, index) => {
                return notiElement(item, index)
            })}
    </div>


    function readedElement(element, item) {
        console.log(element)
        console.log(item)
        history.push('/')
    }


    return (
        <Badge count={countNoti} size={'small'} >
            <Dropdown overlay={notiBoard} trigger={['click']} >
                <div style={{ fontSize: '1rem' }}>
                    <BellOutlined style={{ cursor: 'pointer' }} />
                </div>
            </Dropdown>
        </Badge>
    );
};

export default NotificatioinBell;