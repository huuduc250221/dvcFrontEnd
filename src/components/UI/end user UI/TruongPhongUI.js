import React, { useState } from 'react';

import './TruongPhongUI.css'

import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

function TruongPhongMenu(props) {

  const [collapsedState, setCollapsedState] = useState(false)

  function toggleCollapsed() {
    setCollapsedState(!collapsedState)
  }

  return (<div>
    {/* <nav>
      <Button type="primary" onClick={toggleCollapsed} >
        {React.createElement(collapsedState ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
    </nav> */}
    <div className='admin-main'>
      <div className='admin-main-menu' >

        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsedState}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to='/truongphongHome'>Tổng quan</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to='/truongphongHome/phanchiacongviec'>Phân chia hồ sơ</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <Link to='/truongphongHome/quanlynhanvien'>Quản lý nhân viên</Link>
          </Menu.Item>

          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Cá nhân">
            <Menu.Item key="13">
              <Link to='/profilePage'>Thông tin của tôi</Link>
            </Menu.Item>
            <Menu.Item key="14">Đăng xuất</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className='admin-main-content' style={{ padding:'2rem' }}>
        {props.children}
      </div >
    </div>
  </div>
  );
}

export default TruongPhongMenu;