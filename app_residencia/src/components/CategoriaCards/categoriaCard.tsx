import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import { Icon } from 'react-native-elements';
import {styles} from './styles';


function CategoriasCard({categoria}) {
  
  return (
    <View  style={styles.container}>
      <View style={styles.card}>
        {/* <Image
          style={styles.image}
          source={{
            uri: categoria.nomeImagem,
          }}
        /> */}
        <Icon name= {categoria.nomeImagem} color="#f0D700" type="font-awesome-5" size={35} />
        <Text style={styles.text}>{categoria.nomeCategoria}</Text>
      </View>
    </View>
  );
}

export default CategoriasCard;
