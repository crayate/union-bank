import React, { createContext, useState } from 'react'

export const LogInContext = createContext();

export const LogInProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(current => !current);
        console.log(`isLoggedIn era: ${isLoggedIn}`);
    }

    return (
        <LogInContext.Provider value={{ isLoggedIn, handleLogIn }}>
            {props.children}
        </LogInContext.Provider>
            
    )
}
