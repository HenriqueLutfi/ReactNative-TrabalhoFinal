import React, {createContext, useState} from 'react';


export const LoadingContext = createContext({});


export const LoadingProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        // carregando,
        loading,
        setLoading,
      }}>
      {children}
    </LoadingContext.Provider>
  );
};