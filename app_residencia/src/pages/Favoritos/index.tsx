import React, { useContext } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { FavoritosContext } from "../../context/FavoritosContext";


const Favoritos = () => {

const  {adicionarProdutoFav, contarQtdProdutos} = useContext(FavoritosContext)


  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.imageBack}
      >
        <Text style={styles.colorText}>Favoritos</Text>

      </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  // container: {
  //   flex: 1,
  //   flexWrap: 'wrap',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   borderWidth: 1,
  //   borderColor: '#fff700',
  // },
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



})

export default Favoritos;