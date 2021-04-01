import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'
// import { fetchUser } from '../../redux/reducers/FetchUserReducer';

const ProtectedRoute = ({ children, ...rest }) => {

    const isAuth = localStorage.getItem('isLogin')


    return (
        <Route {...rest}>
            {
                isAuth ? children : <Redirect to='/login' />
            }
        </Route>
    );
};


export default ProtectedRoute;

