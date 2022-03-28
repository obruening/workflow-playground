import React from 'react';
import AuthContextType from './authContextType';

const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
    return React.useContext(AuthContext);
}

export { AuthContext, useAuth };
