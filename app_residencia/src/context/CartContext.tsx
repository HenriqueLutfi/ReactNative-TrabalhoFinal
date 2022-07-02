import React, {createContext, useState} from 'react';
import {ProdutoType} from '../models/ProdutoType';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState<ProdutoType[]>([]);

  const storeData = async (value: ProdutoType) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        // saving error
    }
}
const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
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
