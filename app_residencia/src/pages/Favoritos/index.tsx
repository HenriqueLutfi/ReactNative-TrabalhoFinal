import React, {useContext, useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View, FlatList} from 'react-native';
// import {FavoritosContext} from '../../context/FavoritosContext';
import {CarrinhoContext} from '../../context/CarrinhoContext';
import FavoritosCard from '../../components/FavoritosCard/FavoritosCard.tsx';

const Favoritos = ({navigation}) => {
  const {listarFavoritos, isFetching, setIsFetching} =
    useContext(CarrinhoContext);

  const [favoritos, setFavoritos] = useState();

  useEffect(() => {
    getDadosFavoritos();
  }, []);

  const getDadosFavoritos = () => {
    setFavoritos(listarFavoritos());
  };

  const onRefresh = () => {
    getDadosFavoritos();
    // wait(2000).then(() => setIsFetching(false));
    setIsFetching(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.imageBack}>
        <Text style={styles.colorText}>Favoritos</Text>
        <FlatList
          data={favoritos}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={() => onRefresh()}
          refreshing={isFetching}
          extraData={favoritos}
          renderItem={({item, index}) => {
            return (
              <View>
                <FavoritosCard produto={item} />
              </View>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
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
    width: '80%',
  },
});

export default Favoritos;
