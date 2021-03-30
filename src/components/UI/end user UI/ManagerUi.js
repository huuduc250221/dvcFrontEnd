import React, { useState } from 'react';

import './ManagerUi.css'

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

function AdminMenu(props) {

  const [collapsedState, setCollapsedState] = useState(false)

  function toggleCollapsed() {
    setCollapsedState(!collapsedState)
  }

  return (<div>
    <nav>
      <Button type="primary" onClick={toggleCollapsed} >
        {React.createElement(collapsedState ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
    </nav>
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
            <Link to='/managerHome'>Tổng quan</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to='/managerHome/quanlythutuc'>Quản lý thủ tục</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Quản lý nhân viên">
            <Menu.Item key="5">
              <Link to='/managerHome/nhanvien'>Tổng quan</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to='/managerHome/taonhanvien'>Thêm mới nhân viên</Link>
            </Menu.Item>
            <Menu.Item key="7">Xóa nhân viên</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Quản lý phản hồi">
            <Menu.Item key="9"></Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Cá nhân">
            <Menu.Item key="13">
              <Link to='/personalpage'>Thông tin của tôi</Link>
            </Menu.Item>
            <Menu.Item key="14">Đăng xuất</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className='admin-main-content' style={{ border: '1px solid black' }}>
        {props.children}
      </div >
    </div>
  </div>
  );
}

export default AdminMenu;