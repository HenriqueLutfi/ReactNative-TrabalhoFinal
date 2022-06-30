import React, {createContext, useState} from 'react';
import {ProdutoType} from '../models/ProdutoType';

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState<ProdutoType[]>([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
