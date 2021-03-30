import React from 'react';
import { Switch, Route } from 'react-router';

import StaffHome from '../components/end user/staff/StaffHome'

function RootAdminPageRoute(props) {
    return (
        <div>
            <Switch>
                <Route path='/staffHome'>
                    <StaffHome />
                </Route>
            </Switch>
        </div>
    );
}

export default RootAdminPageRoute;