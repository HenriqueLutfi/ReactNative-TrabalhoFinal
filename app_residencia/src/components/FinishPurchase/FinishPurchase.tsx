import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';
import {ButtonWipeCart} from '../ButtonWipeCart/ButtonWipeCart';
import {styles} from './style';
import {CarrinhoContext} from '../../context/CarrinhoContext';

export const FinishPurchase = () => {
  // const {cart} = useContext(CartContext);
  const {contarQtdProdutos, listarProdutos} = useContext(CarrinhoContext);

  const [somaTotal, setSomaTotal] = useState(0);
  const [carrinho, setCarrinho] = useState();
  // console.log(cart);
  useEffect(() => {
    SomaProdutos();
  }, [carrinho]);

  useEffect(() => {
    getDadosCarrinho();
  }, []);

  const getDadosCarrinho = () => {
    setCarrinho(listarProdutos());
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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textColor}>
          quantidade de produtos {contarQtdProdutos()}
        </Text>
        <Text style={styles.textColor}>Valor Total R${somaTotal},00</Text>
        <ButtonWipeCart />
      </View>
    </View>
  );
};
