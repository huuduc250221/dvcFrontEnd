import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
// import { fetchUser } from '../../redux/reducers/FetchUserReducer';

const ProtectedRoute = ({ children, roles, ...rest }) => {

    const isAuth = localStorage.getItem('isLogin') 
    const role = localStorage.getItem('role')
    const { profile } = useSelector(state => state.users)
    console.log(profile.role)
    return (
        <Route {...rest}>
            {
                
                !isAuth ? <Redirect to='/login' /> : roles && (roles.indexOf(role) === -1)  ? <Redirect to='/' /> : children
            }

        </Route>
    );
};


export default ProtectedRoute;

