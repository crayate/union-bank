import React, { createContext, useState } from 'react'

export const LogInContext = createContext();

export const LogInProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    return (
        <LogInContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser}}>
            {props.children}
        </LogInContext.Provider>
            
    )
}
