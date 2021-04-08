import React from 'react'

import PageHeader from './components/UI/header/PageHeader'
import PageFooter from './components/UI/Footer'
import RootRouter from './screens/RootRouter'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'antd'

import 'antd/dist/antd.css';
import './App.css';
import BackToTop from './components/BackToTop'
import StaffMenu from './components/UI/end user UI/StaffMenu'
import ManagerMenu from './components/UI/end user UI/ManagerUi'
import RootStaffRoute from './screens/RootStaffRoute'

import ProtectedRoute from './components/protected route/ProtectedRoute'
import RootManagerRoute from './screens/RootManagerRoute'
import TruongPhongMenu from './components/UI/end user UI/TruongPhongUI'
import RootTruongPhongRoute from './screens/RootTruongPhongRoute'



function App() {
  return (
    <Router >
      <Switch>

        <ProtectedRoute path='/staffHome'>
          <PageHeader />
          <StaffMenu >
            <RootStaffRoute />
          </StaffMenu>
          <PageFooter />
        </ProtectedRoute>

        <ProtectedRoute roles={['AdminUBND']} path='/truongphongHome'>
          <PageHeader />
          <TruongPhongMenu>
            <RootTruongPhongRoute />
          </TruongPhongMenu>
          <PageFooter />
        </ProtectedRoute>

        <ProtectedRoute roles={['AdminUBND']} path='/managerHome'>
          <PageHeader />
          <ManagerMenu >
            <RootManagerRoute />
          </ManagerMenu>
          <PageFooter />
        </ProtectedRoute>

        <Route path='/'>
          <PageHeader />
          <main>
            <Row>
              <Col span={16} offset={4}>
                <RootRouter />
              </Col>
            </Row>
          </main>
          <PageFooter />

        </Route>

      </Switch>
      <BackToTop />
    </Router>
  );
}

export default App;
