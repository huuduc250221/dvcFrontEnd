import React from 'react'

import { Switch, Route } from 'react-router-dom'

import HomePage from '../components/trangchu/Banner'
import Tutorial from '../components/huong dan/Tutorial'
import ProcedureTable from '../components/tiep nhan ho so/ProcedureTable'
import FiledOption from '../components/tiep nhan ho so/FiledOption'
import OfflineFiled from '../components/tiep nhan ho so/OfflineFiled'
import OnlineFiled from '../components/tiep nhan ho so/OnlineFiled'
import NotFound from '../components/UI/404/404'
import LookUpFile from '../components/tra cuu ho so/LookUpFile'
import Contact from '../components/lien he/Contact'
import LoginPage from '../components/login page/LoginPage'
import PersonalPage from '../components/profile/PersonalPage'
import ProtectedRoute from '../components/protected route/ProtectedRoute'

export default function RootRouter() {

    return <>

        <Switch>

            <Route exact path='/'>
                <HomePage />

            </Route>
            <Route exaxt path='/login'>
                <LoginPage />
            </Route>
            <Route exact path='/huongdan'>
                <Tutorial />
            </Route>
            <Route path='/lienhe'>
                <Contact />
            </Route>


            <ProtectedRoute  path='/profilePage'>
                <PersonalPage />
            </ProtectedRoute>


            <Route exact path='/tiepnhanhoso'>
                <ProcedureTable />
            </Route>
            <Route exact path='/tiepnhanhoso/filedOption/:id'>
                <FiledOption />
            </Route>
            <Route path='/tiepnhanhoso/filedOption/:id/offline' >
                <OfflineFiled />
            </Route>
            <Route path='/tiepnhanhoso/filedOption/:id/:adress/online'>
                <OnlineFiled />
            </Route>

            <Route path='/tracuuhoso'>
                <LookUpFile />
            </Route>



            <Route exact path='*'>
                <NotFound />
            </Route>


        </Switch>

    </>
}