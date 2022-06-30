import React, {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';

export const ButtonAddCart = ({produto}) => {
  const {cart, setCart} = useContext(CartContext);

  function addItemToCart() {
    console.log("produto: " + produto.nomeProduto)
    const aux = cart;
    aux.push(produto);
    setCart(aux);
    console.log('carrinho: '+cart);
  }

  return (
    <>
      <Button
        title='add cart'
        titleStyle={{
          color: '#fff700',
        }}
        buttonStyle={{
          backgroundColor: '#000000',
          borderWidth: 2,
          borderColor: '#fff700',
          borderRadius: 3,
        }}
        onPress={() => addItemToCart()}
      />
    </>
  );
};
