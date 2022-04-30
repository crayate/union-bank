import React, { createContext, useState } from 'react'

export const OperationContext = createContext();

const OperationProvider = (props) => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(2000);
    return (
        <OperationContext.Provider value={{transactions, setTransactions, balance, setBalance}}>
            {props.children}    
        </OperationContext.Provider>
    )
}

export default OperationProvider