import { Row, Image, Col } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons'

import './ProfilePage.css'

const ProfilePage = () => {
    const { profile } = useSelector(state => state.users)
    if (!profile.avatar) profile.avatar = ''
    return (
        <div className='profile-page'>
            <Row>
                <Col className='avatar-col' span={8}>

                    {profile.avatar ? <Avatar src={profile.Avatar} size={128} alt='day la avatar' /> : <Avatar icon={<UserOutlined />} size={128} />}
                </Col>
                <Col span={16}>
                    <p><span>Tên đăng nhập:</span> {profile.username}</p>
                    <p><span>Họ và tên:</span> {profile.full_name}</p>
                    <p><span>Ngày sinh:</span> {profile.day_of_birth}</p>
                    <p><span>Giới tính:</span> {profile.gender}</p>
                    <p><span>CMND:</span> {profile.ic_number}</p>
                    <p><span>Số điện thoại:</span> {profile.telephone}</p>
                    <p><span>Email:</span> {profile.email}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePage;