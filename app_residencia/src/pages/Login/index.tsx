import React, { useState, useContext } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import { Input, Text, Button, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { LoadingContext } from '../../context/LoadingContext';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import Cadastro from '../Cadastro';
import storewars from '../../assets/storewars.png'


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AutenticacaoContext);
  const { loading, setLoading } = useContext(LoadingContext);


  const handleLogin = async (email: string, senha: string) => {
    console.log(`handleLogin - Email: ${email} - Senha: ${senha}`);
    showLoading();
    setLoading(true);

    const respostaLogin = await login(email, senha);

    if (!respostaLogin) {
      Alert.alert('erro', '', [
        { text: 'OK' },
        { text: 'nao foi possivel realizar login' },
      ]);
      setLoading(false);
    } else {
      // setLoading(false);
      navigation.navigate('HomeScreen');
    }
  };


  const showLoading = () => {
    <LoadingComponent />;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.containerItems}>
          <View style={styles.container_logo}>
            <Image source={storewars} style={styles.image_store} />
          </View>

          <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
          <Input
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
            style={{ color: '#fff700' }}
            leftIcon={
              <Icon name="user" color="#fff700" type="font-awesome" size={24} />
            }
          />
          <Input
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            style={{ color: '#fff700' }}
            leftIcon={
              <Icon name="key" color="#fff700" type="font-awesome" size={24} />
            }
            secureTextEntry
          />
          <Button
            title="Entrar"
            titleStyle={{
              color: '#fff700',
            }}
            buttonStyle={{
              backgroundColor: '#000000',
              borderWidth: 2,
              borderColor: '#fff700',
              borderRadius: 3,
            }}
            onPress={() => handleLogin(email, senha)}
          />
          <Button
            title="Cadastre-se"
            titleStyle={{
              color: '#fff700',
            }}
            buttonStyle={{
              backgroundColor: '#000000',
              borderWidth: 2,
              borderColor: '#fff700',
              borderRadius: 3,
              marginTop: 8,
            }}
            onPress={() => navigation.navigate('CadastroScreen')}
          />
        </View>
        <LoadingComponent />
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
  containerItems: {
    borderWidth: 4,
    borderColor: '#fff700',
    borderRadius: 15,
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
  },
  texto_entrada: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
    color: '#fff700',
    borderStyle: 'solid',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container_logo: {
    width: 200,
    height: 80,
    marginBottom: 12
  },
  image_store: {
    width: 300,
    height: 300,
    marginLeft: 40,
  },
});

export default Login;
