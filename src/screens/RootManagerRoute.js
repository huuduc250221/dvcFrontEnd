import React from 'react';
import { Switch, Route } from 'react-router';
import CreateEmployee from '../components/end user/manager/employee management/CreateEmployee';
import GeneralPage from '../components/end user/manager/general chart/GeneralPage';

const RootManagerRoute = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/managerHome'>
                    <GeneralPage />
                </Route>
                <Route exact path='/taonhanvien'>
                    <CreateEmployee />
                </Route>
            </Switch>
        </div>
    );
};

export default RootManagerRoute;