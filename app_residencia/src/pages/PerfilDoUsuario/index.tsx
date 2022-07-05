import React, {useContext, useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import {Input, Text, Button, Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
// import AlterarSenha from '../AlterarSenha';

const PerfilDoUsuario = ({navigation}) => {
  const {usuario} = useContext(AutenticacaoContext);

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
            <Text style={styles.titulo_perfil_usuario}>
              {'Perfil do Usuário'}
            </Text>

            <Image
              style={styles.imageUser}
              source={{
                uri: 'https://scontent.fsdu26-1.fna.fbcdn.net/v/t1.6435-9/123476126_3694353370614755_1201532072358556248_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHbfBqzax1rmSysGbAgzzp577Y70MoBtZ_vtjvQygG1n6E_qfyA_iPpG64snbGzqoyTMDLFKCYC5GE1K-DEi3x8&_nc_ohc=OM8rakEQpLYAX8INm3q&_nc_ht=scontent.fsdu26-1.fna&oh=00_AT9wllw8xb3O0RwbXbN_YCanrfUAPkif-gD_7uhiVg6EtA&oe=62E6F342',
              }}
            />

            <Text style={styles.nome_cliente}>Nome do Usuário</Text>
            <Text style={styles.containerItems}>{usuario.name}</Text>
            <Text style={styles.email}>E-mail</Text>
            <Text style={styles.containerItems}>{usuario.email}</Text>

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
              onPress={() => navigation.navigate('AlterarSenhaScreen')}
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
    flex: 1,
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
    color: '#fff700',
    textAlign: 'center',
    fontSize: 25,
  },
  titulo_perfil_usuario: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    color: '#fff700',
    borderStyle: 'solid',
  },
  nome_cliente: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 20,
    color: '#fff700',
    borderStyle: 'solid',
  },
  email: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 20,
    color: '#fff700',
    borderStyle: 'solid',
  },
  pedidos: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 20,
    color: '#fff700',
    borderStyle: 'solid',
  },
  imageUser: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 70,
    marginLeft: 115,
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default PerfilDoUsuario;
