import React, { useContext } from 'react';
import {
  ViewBase,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { CartContext } from '../../context/CartContext';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import { ButtonAddCart } from '../../components/ButtonAddCart/ButtonAddCart';
import { Button } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { FavoritosContext } from '../../context/FavoritosContext';
import { ProdutosContext } from '../../context/ProdutosContext';

const Produto = ({ route, navigation }) => {
  const {
    id_produto,
    sku,
    nome_produto,
    descricao_produto,
    preco_produto,
    imagem_produto,
  } = route.params;

  const { adicionarProduto, adicionarFavorito } = useContext(CarrinhoContext)
  // const { adicionarProdutoFav } = useContext(FavoritosContext);
  const { produtos, setProdutos } = useContext(ProdutosContext);



  const handleAddProduto = () => {
    adicionarProduto(
      sku,
      nome_produto,
      descricao_produto,
      preco_produto,
      imagem_produto,
    );
  };
  
  const handleFav = () => {
    adicionarFavorito(
      sku,
      nome_produto,
      descricao_produto,
      preco_produto,
      imagem_produto,
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.imageBack}>
        <ScrollView style={styles.containerItems}>
          {/* <View style={styles.container_imagem}> */}
          <Image
            style={styles.image}
            source={{
              uri: imagem_produto,
            }}
          />
          {/* </View> */}
          <View style={styles.container_produto}>
            <Text style={styles.colorText}>{nome_produto}</Text>
            <Text>{nome_produto}</Text>
            <Text>{preco_produto}</Text>
            <TouchableOpacity >
              <Button
                onPress={() => handleAddProduto()}
                title="Comprar"
                titleStyle={{
                  color: '#fff700',
                }}
                buttonStyle={{
                  backgroundColor: '#000000',
                  borderWidth: 2,
                  borderColor: '#fff700',
                  borderRadius: 3,
                  marginTop: 8,
                  width: '70%',
                  marginLeft: 50
                }}

              />
            </TouchableOpacity>
            {/* <ButtonAddCart produto={route}/> */}
            
            <TouchableOpacity>
              <Button
                onPress={() => handleFav()}
                title="Favoritar"
                titleStyle={{
                  color: '#fff700',
                }}
                buttonStyle={{
                  backgroundColor: '#000000',
                  borderWidth: 2,
                  borderColor: '#fff700',
                  borderRadius: 3,
                  marginTop: 8,
                  width: '70%',
                  marginLeft: 50
                }}
              />
            </TouchableOpacity>
            <View style={styles.container_starts}>
              <Text style={styles.colorText}>Avalie:</Text>
              <AirbnbRating showRating={false} size={20} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container_imagem: {
    width: 70,





  },
  container_produto: {
    width: '100%',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff700',


  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },

  colorText: {
    color: '#fff700',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 25,
    width: '80%'

  },
  image: {
    width: '100%',
    height: 300,
    alignItems: 'center'



  },
  containerItems: {
    padding: 16,
  },
  container_starts: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',


  }
});
export default Produto;
