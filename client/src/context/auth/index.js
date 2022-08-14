import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [isSignup, setIsSignup] = useState(true);
    
    return ( 
        <AuthContext.Provider value={
            {   isSignup,
                setIsSignup,
            }}>
            { children }
        </AuthContext.Provider>
     );
}

export { AuthContext, AuthProvider};