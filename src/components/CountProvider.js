import React, { createContext } from 'react';

// This will provide our global data
const CountContext = createContext();

// THis provider will say who gets the data...
function CountProvider({ children }){
    return(
        <CountContext.Provider value={999} >
            { children }
        </CountContext.Provider>
    );
}

export { CountContext, CountProvider };