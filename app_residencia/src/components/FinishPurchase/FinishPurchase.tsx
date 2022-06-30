import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';
import {ButtonWipeCart} from '../ButtonWipeCart/ButtonWipeCart';
import {styles} from './style';

export const FinishPurchase = () => {
  const {cart} = useContext(CartContext);
  const [somaTotal, setSomaTotal] = useState(0);
  console.log(cart);
  useEffect(() => {
    SomaProdutos();
  }, [cart]);
  function SomaProdutos() {
    let soma = 0;
    for (let i = 0; i < cart.length; i++) {
      soma += parseFloat(cart[i].precoProduto);
    }
    setSomaTotal(soma);
    console.log(soma);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textColor}>quantidade {cart.length}</Text>
        <Text style={styles.textColor}>Valor Total R${somaTotal},00</Text>
        <ButtonWipeCart />
      </View>
    </View>
  );
};
