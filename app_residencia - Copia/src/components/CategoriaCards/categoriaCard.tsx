import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {styles} from './styles';


function CategoriasCard({categoria}) {
  
  return (
    <View  style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: categoria.nomeImagem,
          }}
        />
        <Text style={styles.text}>{categoria.nomeCategoria}</Text>
      </View>
    </View>
  );
}

export default CategoriasCard;
