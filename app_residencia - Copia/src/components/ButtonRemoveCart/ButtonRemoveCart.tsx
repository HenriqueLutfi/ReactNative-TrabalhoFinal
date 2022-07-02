import React, {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';

export const ButtonRemoveCart = ({produto}) => {
  const {cart} = useContext(CartContext);
  console.log('removendo ' + produto.nomeProduto);
  function RemoveItemToCart() {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i] === produto) {
        cart.splice(i, 1);
      }
    }
    console.log(cart);
  }

  return (
    <>
      <Button
        title="remove"
        titleStyle={{
          color: '#fff700',
        }}
        buttonStyle={{
          backgroundColor: '#000000',
          borderWidth: 2,
          borderColor: '#fff700',
          borderRadius: 3,
        }}
        onPress={() => RemoveItemToCart()}
      />
    </>
  );
};
