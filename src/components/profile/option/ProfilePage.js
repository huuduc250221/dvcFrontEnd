import { Row, Image, Col } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons'

const ProfilePage = () => {
    const { profile } = useSelector(state => state.user)
    return (
        <div>
            <Row>
                <Col span={8}>

                    {profile.profileImage ? <Avatar  src={profile.Avatar} size={128} alt='day la avatar' /> : <Avatar icon={<UserOutlined />} size={128} />}
                </Col>
                <Col span={16}>
                    <p><span>Họ và tên:</span> {profile.HoVaTen}</p>
                    <p><span>Ngày sinh:</span> {profile.NgaySinh}</p>
                    <p><span>Giới tính:</span> {profile.GioiTinh}</p>
                    <p><span>Số điện thoại:</span> {profile.SDT}</p>
                    <p><span>Email:</span> {profile.Email}</p>
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePage;