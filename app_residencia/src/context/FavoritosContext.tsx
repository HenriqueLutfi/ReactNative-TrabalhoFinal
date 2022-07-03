import React, { createContext, useState } from 'react';


export const FavoritosContext = createContext({});

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState();

  const addFave = (props: any) => {
    const aux: any = favoritos
    aux.push(props)
    setFavoritos(aux)
    console.log(favoritos);
  }

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos,
        addFave

      }}>
      {children}
    </FavoritosContext.Provider>
  );
};
