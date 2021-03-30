import { Col, Row, Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import Procedures from './option/Procedures';
import ProfilePage from './option/ProfilePage'

import './PersonalPage.css'

const { TabPane } = Tabs

const PersonalPage = () => {

    const { profile } = useSelector(state => state.user)

    return (
        <div>
            <Row>
                <Tabs defaultActiveKey="1" tabPosition='left'>
                    <TabPane tab="Tab 1" key="1">
                        <ProfilePage />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <Procedures />

                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Row>
        </div>
    );
};

export default PersonalPage;