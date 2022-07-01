import React, {useState, useEffect, useContext} from 'react';
import {Text, Card, Icon, SearchBar} from 'react-native-elements';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import AxiosInstance from '../../api/AxiosInstance';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import CategoriasCard from '../../components/CategoriaCards/categoriaCard';
import CategoriaService from '../../services/CategoriaService';
import {CategoriaType} from '../../models/CategoriaType';
import {CartContext} from '../../context/CartContext';
import ProdutosCard from '../../components/ProdutoCards/ProdutosCards';
import CartCard from '../../components/CartCardComponent/CartCardComponent';
import {ButtonWipeCart} from '../../components/ButtonWipeCart/ButtonWipeCart';
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
      {/* <ButtonWipeCart /> */}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16A5A3',
    padding: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 2,
    borderRadius: 15,
    margin: 5,
  },
});
export default Cart;
