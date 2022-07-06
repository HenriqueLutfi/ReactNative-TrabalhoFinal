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
  const {usuario} = useContext(AutenticacaoContext);

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
                  uri: 'https://scontent.fsdu26-1.fna.fbcdn.net/v/t1.6435-9/123476126_3694353370614755_1201532072358556248_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHbfBqzax1rmSysGbAgzzp577Y70MoBtZ_vtjvQygG1n6E_qfyA_iPpG64snbGzqoyTMDLFKCYC5GE1K-DEi3x8&_nc_ohc=OM8rakEQpLYAX8INm3q&_nc_ht=scontent.fsdu26-1.fna&oh=00_AT9wllw8xb3O0RwbXbN_YCanrfUAPkif-gD_7uhiVg6EtA&oe=62E6F342',
                }}
              />
            </View>
            <Text style={styles.containerText}>Nome do Usuário</Text>
            <Text style={styles.containerInput}>{usuario.name}</Text>
            <Text style={styles.containerText}>E-mail</Text>
            <Text style={styles.containerInput}>{usuario.email}</Text>
            <Button
              title="Alterar Senha"
              titleStyle={styles.textButton}
              buttonStyle={{
                backgroundColor: '#bdc55068',
                borderWidth: 2,
                borderColor: '#bdc55068',
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
    marginBottom: 40,
    color: '#f0D906',
    // borderStyle: 'solid',
  },
  containerScroll: {
    padding: 16,
  },
  // (conatiner inteiro)
  containerItems: {
    borderWidth: 80,
    borderColor: '#bdc55068',
    backgroundColor: '#bdc55068',
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
    borderColor: '#bdc55068',
    borderRadius: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    // (font imput usuario e email)
    fontWeight: 'bold',
    color: '##f0D906',
    textAlign: 'center',
    fontSize:20,
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
});

export default PerfilDoUsuario;
