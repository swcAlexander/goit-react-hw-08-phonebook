import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "redux/selectors";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    let user = useSelector(selectUserData);

    const signIn = (newUser, cb) => {
        user = newUser;
        cb();
        
    }
    const signOut = (cb) => {
        user = null;
        cb();
        
    }
    const value = { user, signIn, signOut };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>

}