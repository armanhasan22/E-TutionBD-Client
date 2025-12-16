import React from 'react';
import { AuthContext } from '../Context/Authcontext/Authcontext';
import { use } from 'react';

const useAuth = () => {
;

const AuthInfo=use(AuthContext);


    return AuthInfo
};

export default useAuth;