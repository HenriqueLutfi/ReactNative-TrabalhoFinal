import React, {useState, useContext} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import {Input, Text, Button, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import {LoadingContext} from '../../context/LoadingContext';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import Cadastro from '../Cadastro';
import storewars from '../../assets/storewars.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {login} = useContext(AutenticacaoContext);
  const {loading, setLoading} = useContext(LoadingContext);

  const handleLogin = async (email: string, senha: string) => {
    console.log(`handleLogin - Email: ${email} - Senha: ${senha}`);
    showLoading();
    setLoading(true);

    const respostaLogin = await login(email, senha);

    if (!respostaLogin) {
      Alert.alert('erro', '', [
        {text: 'OK'},
        {text: 'nao foi possivel realizar login'},
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
            style={{color: '#f0D906'}}
            leftIcon={
              <Icon name="user" color="#f0D906" type="font-awesome" size={24} />
            }
          />
          <Input
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            style={{color: '#f0D906'}}
            leftIcon={
              <Icon name="key" color="#f0D906" type="font-awesome" size={24} />
            }
            secureTextEntry
          />
          <Button
            title="Entrar"
            titleStyle={{
              color: '#f0D906',
            }}
            buttonStyle={{
              backgroundColor: '#BDC55068',
              borderWidth: 2,
              borderColor: '#BDC55068',
              borderRadius: 3,
            }}
            onPress={() => handleLogin(email, senha)}
          />
          <Button
            title="Cadastre-se"
            titleStyle={{
              color: '#f0D906',
            }}
            buttonStyle={{
              backgroundColor: '#BDC55068',
              borderWidth: 2,
              borderColor: '#f0D906',
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
    borderColor: '#BDC55068',
    borderRadius: 15,
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
  },
  texto_entrada: {
    textAlign: 'center',
   
    fontFamily:'Starjout',
    marginBottom: 10,
    color: '#f0D906',
    borderStyle: 'solid',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container_logo: {
    width: 200,
    height: 80,
    marginBottom: 50,
    alignContent: 'center',
  },
  image_store: {
    width: 300,
    height: 300,
    marginLeft: '5%',
  },
});

export default Login;
