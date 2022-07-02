import React, {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';
import { CarrinhoContext } from '../../context/CarrinhoContext';

export const ButtonAddCart = ({produto}) => {
  const {cart, setCart} = useContext(CartContext);
  const {
    id_produto,
    sku,
    nome_produto,
    descricao_produto,
    preco_produto,
    imagem_produto,
  } = produto.params;
  // function addItemToCart() {
  //   console.log("produto: " + produto.nomeProduto)
  //   const aux = cart;
  //   aux.push(produto);
  //   setCart(aux);
  //   console.log('carrinho: '+cart);
  // }
  const {adicionarProduto} = useContext(CarrinhoContext);

  const handleAddProduto = () => {
    console.log("produto sendo adicionado" + nome_produto)
    adicionarProduto(
      sku,
      nome_produto,
      descricao_produto,
      preco_produto,
      imagem_produto,
    );
  };

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
        // onPress={() => addItemToCart()}
        onPress={() => handleAddProduto()}
      />
    </>
  );
};
