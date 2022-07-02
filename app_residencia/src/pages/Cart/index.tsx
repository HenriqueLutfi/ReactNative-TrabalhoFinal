import React, {useEffect, useContext} from 'react';
import {StyleSheet, FlatList, ImageBackground} from 'react-native';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import {CartContext} from '../../context/CartContext';
import CartCard from '../../components/CartCardComponent/CartCardComponent';
import {FinishPurchase} from '../../components/FinishPurchase/FinishPurchase';

const Cart = () => {
  const {cart} = useContext(CartContext);

  const {usuario} = useContext(AutenticacaoContext);
  useEffect(() => {}, [cart]);

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
      }}
      resizeMode="cover"
      style={styles.imageBack}>
      <FlatList
        data={cart}
        // contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={cart => {
          return <CartCard produto={cart.item} />;
        }}
      />
      <FinishPurchase />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default Cart;
