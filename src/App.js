import React from 'react'

import PageHeader from './components/UI/header/PageHeader'
import PageFooter from './components/UI/Footer'
import RootRouter from './screens/RootRouter'

import { BrowserRouter as Router } from 'react-router-dom'
import {Row, Col } from 'antd'

import 'antd/dist/antd.css';
import './App.css';


function App() {
  return (
      <Router >

        <PageHeader />
        <main>
          <Row>
            <Col span={16} offset={4}>
            <RootRouter />
            </Col>
          </Row>
          
        </main>
        <PageFooter />

      </Router>
  );
}

export default App;
