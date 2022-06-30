import React, {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';

export const ButtonWipeCart = () => {
  const {setCart} = useContext(CartContext);
  
  return (
    <>
      <Button
        title="limpar carrinho"
        titleStyle={{
          color: '#fff700',
        }}
        buttonStyle={{
          backgroundColor: '#000000',
          borderWidth: 2,
          borderColor: '#fff700',
          borderRadius: 3,
        }}
        onPress={() => {
          setCart([]);
        }}
      />
    </>
  );
};
