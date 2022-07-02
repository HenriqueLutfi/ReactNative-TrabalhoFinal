import React, {useContext} from 'react';
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
import {CartContext} from '../../context/CartContext';
import {ButtonAddCart} from '../../components/ButtonAddCart/ButtonAddCart';

const Produto = ({route, navigation}) => {
  const {
    id_produto,
    sku,
    nome_produto,
    descricao_produto,
    preco_produto,
    imagem_produto,
  } = route.params;

  const handleAddProduto = () => {
    // adicionarProduto(
    //   sku,
    //   nome_produto,
    //   descricao_produto,
    //   preco_produto,
    //   imagem_produto,
    // );
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
          <View style={styles.container_imagem}>
            <Image
              style={styles.image}
              source={{
                uri: imagem_produto,
              }}
            />
          </View>
          <View style={styles.container_produto}>
            <Text style={styles.colorText}>{nome_produto}</Text>
            <Text>{nome_produto}</Text>
            <TouchableOpacity onPress={() => handleAddProduto()}>
              <Text style={styles.colorText}>Comprar</Text>
            </TouchableOpacity>
            {/* <ButtonAddCart produto={route}/> */}
            <TouchableOpacity>
              <Text>Favoritar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container_imagem: {
    width: '50%',
  },
  container_produto: {
    width: '50%',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 1,
    borderRadius: 15,
    margin: 5,
  },
  colorText: {
    color: '#fff700',
  },
  image: {
    width: 100,
    height: 100,
  },
  containerItems: {
    padding: 16,
  },
});
export default Produto;
