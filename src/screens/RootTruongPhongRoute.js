import React from 'react';
import { Switch, Route } from 'react-router';
import BangChiaCongViec from '../components/end user/truong-phong/BangChiaCongViec';
import GeneralPage from '../components/end user/manager/general chart/GeneralPage';
import ThongKe from '../components/end user/truong-phong/ThongKe'


const RootTruongPhongRoute = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/truongphongHome'>
                    <GeneralPage />
                </Route>
                <Route exact path='/truongphongHome/phanchiacongviec'>
                    <BangChiaCongViec />
                </Route>
                <Route exact path='/truongphongHome/quanlynhanvien'>
                    <ThongKe />
                </Route>
            </Switch>
        </div>
    );
};

export default RootTruongPhongRoute;