import React from 'react';
import { Switch, Route } from 'react-router';
import GeneralPage from '../components/end user/manager/general chart/GeneralPage';
import DetailRecord from '../components/end user/staff/DetailRecord';

import StaffHome from '../components/end user/staff/StaffHome'
import UnapproveProcedure from '../components/end user/staff/UnapproveProcedure';

function RootStaffRoute(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/staffHome'>
                    <GeneralPage />
                </Route>
                <Route exact path='/staffHome/tiepnhanhoso'>
                    <UnapproveProcedure />
                </Route>
                <Route exact path='/staffHome/chitietthutuc'>
                    <DetailRecord />
                </Route>
            </Switch>
        </div>
    );
}

export default RootStaffRoute;