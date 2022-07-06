import React, {useState, useEffect, useContext} from 'react';
import { Alert } from 'react-native';
import {Button} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';
import {CarrinhoContext} from '../../context/CarrinhoContext';
import { styles } from './styles';
export const ButtonWipeCart = () => {
  // const {setCart} = useContext(CartContext);
  const {LimparCarrinho} = useContext(CarrinhoContext);
  function showAlert() {
    Alert.alert('Carrinho', 'produtos foram excluidos do carrinho', [
      {text: 'OK', onPress: () => console.log('')},
    ]);
  }
  return (
    <>
      <Button
        title="limpar carrinho"
        titleStyle={styles.textButton}
        buttonStyle={{
          backgroundColor: '#000000',
          borderWidth: 2,
          borderColor: '#fff700',
          borderRadius: 3,
          padding: 5,
        }}
        // onPress={() => {
        //   setCart([]);
        onPress={() => {
          LimparCarrinho();
          showAlert();
        }}
      />
    </>
  );
};
