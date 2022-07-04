import React, {useEffect, useContext, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import {CartContext} from '../../context/CartContext';
import CartCard from '../../components/CartCardComponent/CartCardComponent';
import {FinishPurchase} from '../../components/FinishPurchase/FinishPurchase';
import {CarrinhoContext} from '../../context/CarrinhoContext';

const Cart = () => {
  const {cart} = useContext(CartContext);
  const {listarProdutos} = useContext(CarrinhoContext);

  const {usuario} = useContext(AutenticacaoContext);
  const [carrinho, setCarrinho] = useState();

  useEffect(() => {
    getDadosCarrinho();
  }, []);

  const getDadosCarrinho = () => {
    setCarrinho(listarProdutos());
  };
  var soma = 0;
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
      }}
      resizeMode="cover"
      style={styles.imageBack}>
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => index.toString()}
        extraData={carrinho}
        renderItem={({item, index}) => {
          return (
            <View>
              <CartCard produto={item} />
            </View>
          );
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
