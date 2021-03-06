import React, { useState } from 'react';

import './StaffMenu.css'

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
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

function AdminMenu(props) {

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
            <Link to='/staffHome'>
              Tổng quan
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to='/staffHome/tiepnhanhoso'>Tiếp nhận hồ sơ</Link>
          </Menu.Item>



          <SubMenu key="sub1" icon={<MailOutlined />} title="Cá nhân">
            <Menu.Item key="5"><Link to='/profilePage'>Thông tin cá nhân</Link></Menu.Item>
            <Menu.Item key="5"><Link to='/profilePage'>Thông tin cá nhân</Link></Menu.Item>

          </SubMenu>
        </Menu>
      </div>
      <div className='admin-main-content' style={{ padding: '2rem' }}>
        {props.children}
      </div >
    </div>
  </div>
  );
}

export default AdminMenu;