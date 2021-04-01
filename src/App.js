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
        <ProtectedRoute path='/managerHome'>
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
            <BackToTop />
          </main>
          <PageFooter />

        </Route>



      </Switch>




    </Router>
  );
}

export default App;
