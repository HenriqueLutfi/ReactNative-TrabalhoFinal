import React, {useState} from 'react';
import {
    Alert,
    StyleSheet,
    View,
    ActivityIndicator,
    ImageBackground,
  } from 'react-native';
import {Input, Text, Button, Icon, Image} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import AlterarSenha from '../AlterarSenha';

const PerfilDoUsuario = () => {


  return (
    <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
          }}
          resizeMode="cover"
          style={styles.imageBack}>
          <ScrollView style={styles.containerScroll}>
            <View style={styles.containerItems}>
              <Text style={styles.titulo_perfil_usuario}>{'Perfil do Usuário'}</Text>
             
              <Image style={styles.imageUser} 
              source={{ uri: 'https://pt.quizur.com/trivia/adivinhe-o-filme-personagens-BDhR'}}/>

              <Text style={styles.nome_cliente}>Nome do Cliente</Text>
              <Text style={styles.nome_cliente}>Telefone do Cliente</Text>
              <Text style={styles.endereco_email}>Endereço Completo</Text>
              <Text style={styles.endereco_email}>E-mail</Text>
              <Text style={styles.endereco_email}>Pedidos</Text>

              <Button
                title="Alterar Senha"
                titleStyle={{
                  color: '#fff700',
                }}
                buttonStyle={{
                  backgroundColor: '#000000',
                  borderWidth: 2,
                  borderColor: '#fff700',
                  borderRadius: 3,
                  margin: 5,
                }}
                onPress={AlterarSenha}
              />
            </View>
          </ScrollView>
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
  containerScroll: {
    display: 'flex',
    alignContent: 'space-between',
    padding: 16,
  },
  containerItems: {
    borderWidth: 4,
    borderColor: '#fff700',
    borderRadius: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    marginBottom: 20,
  },
  titulo_perfil_usuario: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    color: '#fff700',
    borderStyle: 'solid',
  },
  nome_cliente:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color:'#fff700',
    borderStyle: 'solid',
  },
  endereco_email:{
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color:'#fff700',
    borderStyle: 'solid',
  },
  imageUser: {
    flex: 1,
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default PerfilDoUsuario;