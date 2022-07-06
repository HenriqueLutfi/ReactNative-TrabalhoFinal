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
  const {listarProdutos, isFetching, setIsFetching} =
    useContext(CarrinhoContext);

  const {usuario} = useContext(AutenticacaoContext);
  const [carrinho, setCarrinho] = useState();

  useEffect(() => {
    getDadosCarrinho();
  }, []);

  const getDadosCarrinho = () => {
    setCarrinho(listarProdutos());
  };
  // const wait = (timeout) => {
  //   return new Promise(resolve => setTimeout(resolve, timeout));
  // }

  const onRefresh = () => {
    getDadosCarrinho();
    // wait(2000).then(() => setIsFetching(false));
    setIsFetching(false);
  };

  var soma = 0;

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
      }}
      resizeMode="cover"
      style={styles.imageBack}>
      <View style={styles.titulos}>
        <Text style={styles.colorText}>Carrinho</Text>
      </View>
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
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
  colorText: {
    color: '#fff700',
    fontFamily: 'Starjout',
    fontSize:35,
  },
  titulos:{
    alignItems:'center'
  }
});
export default Cart;
