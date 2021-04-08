import { Col, Row, Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ChangeProfile from './option/ChangeProfile';
import Procedures from './option/Procedures';
import ProfilePage from './option/ProfilePage'

import './PersonalPage.css'

const { TabPane } = Tabs

const PersonalPage = () => {

    const { profile } = useSelector(state => state.user)
    const role = localStorage.getItem('role')

    return (
        <div>
            <Row>
                <Tabs defaultActiveKey="1" tabPosition='left'>
                    <TabPane tab="Thông tin cá nhân" key="1">
                        <ProfilePage />
                    </TabPane>
                    <TabPane tab="Các thủ tục của tôi" key="2">
                        <Procedures />

                    </TabPane>
                    <TabPane tab="Chỉnh sửa thông tin" key="3">
                        <ChangeProfile />
                    </TabPane>
                    {role == 'AdminUBND' ?
                        <TabPane tab={<Link to='/managerHome'>Trang làm việc</Link>} key="4">
                        </TabPane>
                        : role == 'TruongPhong' ?
                            <TabPane tab={<Link to='/truongphongHome'>Trang làm việc</Link>} key="4"></TabPane>
                            : <TabPane tab={<Link to='/staffHome'>Trang làm việc</Link>} key="4"></TabPane>
                    }
                </Tabs>
            </Row>
        </div>
    );
};

export default PersonalPage;