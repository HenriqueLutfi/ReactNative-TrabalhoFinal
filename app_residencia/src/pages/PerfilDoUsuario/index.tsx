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

const PerfilDoUsuario = ({navigation}) => {
  const {usuario, setUsuario} = useContext(AutenticacaoContext);
  console.log('usuario' + JSON.stringify(usuario.fotoPerfil));
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.imageBack}>
        <View style={styles.titulos}>
          <Text style={styles.tituloText}>Perfil</Text>
        </View>
        <ScrollView style={styles.containerScroll}>
          <View style={styles.containerItems}>
            <Text style={styles.titulo_perfil_usuario}>
              {'informações do Usuário'}
            </Text>
            <View style={styles.containerFotoPerfil}>
              <Image
                style={styles.imageUser}
                source={{
                  uri: usuario.fotoPerfil,
                }}
              />
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.containerText}>Nome: </Text>
              <Text style={styles.containerInput}>{usuario.name}</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.containerText}>E-mail:</Text>
              <Text style={styles.containerInput}>{usuario.email}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Alterar Senha"
                titleStyle={styles.textButton}
                buttonStyle={{
                  backgroundColor: '#000000',
                  borderWidth: 1,
                  borderColor: '#fff700',
                  borderRadius: 7,
                  margin: 5,
                }}
                onPress={() => navigation.navigate('AlterarSenhaScreen')}
              />
              <Button
                title="Logout"
                titleStyle={styles.textButton}
                buttonStyle={{
                  backgroundColor: '#000000',
                  borderWidth: 1,
                  borderColor: '#fff700',
                  borderRadius: 7,
                  margin: 5,
                  marginBottom: 10,
                }}
                onPress={() => {
                  setUsuario({
                    id: 0,
                    name: '',
                    fotoPerfil: '',
                    email: '',
                    token: '',
                  });
                  console.log(usuario);
                  navigation.navigate('LoginScreen');
                }}
              />
            </View>
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
    alignContent: 'center',
  },
  // (botao alterar senha)
  textButton: {
    color: '#f0D906',
    fontFamily: 'Starjout',
  },
  // (informacoes do usuario)
  titulo_perfil_usuario: {
    textAlign: 'center',
    fontFamily: 'Starjout',
    fontSize: 18,
    marginBottom: 40,
    color: '#f0D906',
    // borderStyle: 'solid',
  },
  containerScroll: {
    padding: 16,
  },
  // (conatiner inteiro)
  containerItems: {
    borderWidth: 3,
    borderColor: '#f0D906',
    backgroundColor: '#000000',
    // padding: 1.5rem
    borderRadius: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    marginBottom: 20,
    color: '#f0D906',
    textAlign: 'center',
    fontSize: 22,
  },
  // (container imput usuario e email)
  containerInput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    // (font imput usuario e email)
    fontWeight: 'bold',
    color: '#f0D906',
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
  },
  // (titulo nome usuario e email)
  containerText: {
    textAlign: 'left',
    fontFamily: 'Starjout',
    marginTop: 10,
    marginLeft: 20,
    color: '#f0D906',
    borderStyle: 'solid',
  },
  containerFotoPerfil: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUser: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 70,
    borderColor:'#f0D906',
    borderWidth:1,
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  titulos: {
    alignItems: 'center',
  },
  // (titulo perfil)
  tituloText: {
    color: '#f0D906',
    fontFamily: 'Starjout',
    fontSize: 35,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  viewRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default PerfilDoUsuario;
