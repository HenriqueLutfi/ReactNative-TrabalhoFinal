import React, {useState, useEffect, useContext} from 'react';
import {View, Alert} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';
import {ButtonWipeCart} from '../ButtonWipeCart/ButtonWipeCart';
import {styles} from './style';
import {CarrinhoContext} from '../../context/CarrinhoContext';
import {TouchableHighlight} from 'react-native-gesture-handler';

export const FinishPurchase = () => {
  // const {cart} = useContext(CartContext);
  const {contarQtdProdutos, listarProdutos, ValorTotalCarrinho, LimparCarrinho} =
    useContext(CarrinhoContext);

  const [somaTotal, setSomaTotal] = useState(0);
  const [carrinho, setCarrinho] = useState();
  const [qtd, setQtd] = useState();
  // console.log(cart);
  useEffect(() => {
    SomaProdutos();
  }, []);

  useEffect(() => {
    getDadosCarrinho();
  }, []);

  const getDadosCarrinho = () => {
    setCarrinho(listarProdutos());
    setQtd(contarQtdProdutos());
    setSomaTotal(ValorTotalCarrinho());
  };

  function SomaProdutos() {
    let soma = 0;
    // for (let i = 0; i < cart.length; i++) {
    //   soma += parseFloat(cart[i].precoProduto);
    // }
    // setSomaTotal(soma);
    // console.log(soma);
    //BANCO EMBARCADO
    // for (let i = 0; i < contarQtdProdutos(); i++){
    //   soma += parseFloat(cart[i].precoProduto);
    // }
  }
  function showAlert() {
    Alert.alert('Compra', 'Compra Finalizada com sucesso', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log(LimparCarrinho())},
    ]);
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <View style={styles.viewText}> */}
        <Text style={styles.textColor}>quantidade de produtos {qtd}</Text>
        <Text style={styles.textColor}>Valor Total R${somaTotal},00</Text>
        {/* </View> */}
        <View style={styles.viewButtonsRow}>
          <View style={styles.viewButtons}>
            <Button
              title="Finalizar Compra"
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
                showAlert();
              }}
            />
          </View>
          <View style={styles.viewButtons}>
            <ButtonWipeCart />
          </View>
        </View>
      </View>
    </View>
  );
};
