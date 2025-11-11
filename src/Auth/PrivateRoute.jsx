import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
const {user,loading}=use(AuthContext)
const location = useLocation()
if(loading){
    return <span className='loading loading-dots loading-xl flex justify-center items-center'></span>
}
if(user){
    return children
}
return <Navigate state={location.pathname} to='/logIn'></Navigate>
};

export default PrivateRoute;