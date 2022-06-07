import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  
  const [details, setDetails] = useState({});
  
  return (
    <GlobalContext.Provider
      value={{
        details,
        setDetails,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
