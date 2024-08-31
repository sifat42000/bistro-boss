import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
 const {user} = useContext(AuthContext);

 if(user){
    return children
 }

    return  <Navigate to='/loging'></Navigate>
    
};

export default PrivetRoute;