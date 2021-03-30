import React from 'react';
import { useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = ({children, ...rest}) => {
    const {success} = useSelector(state => state.user)
    

    return (
        <Route {...rest}>
            {
                success ? children : <Redirect to='/login' />
            }
        </Route>
    );
};

export default ProtectedRoute;