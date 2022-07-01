import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import {Input, Text, Button, Icon} from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';

const Cadastro = () => {
  const {usuario} = useContext(AutenticacaoContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [tel, setTel] = useState('');
  const [endereco, setEndereco] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');
  const [cliente, setCliente] = useState('');

  const InsertUsuario = async () => {
    AxiosInstance.post(`/usuario`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        console.log('Dados do cliente' + JSON.stringify(result.data));
        setCliente(result.data);
      })
      .catch(error => {
        console.log('Erro ao cadastrar cliente' + JSON.stringify(error));
      });
  };

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
            <Text style={styles.texto_entrada}>{'Cadastro'}</Text>
            <Input
              placeholder="Nome completo"
              onChangeText={nome}
              value={setNome}
              style={{color: '#fff700'}}
            />

            <Input
              placeholder="Data de nascimento"
              onChangeText={dataNasc}
              keyboardType="numeric"
              value={setDataNasc}
              style={{color: '#fff700'}}
            />
            <Input
              placeholder="Telefone"
              onChangeText={tel}
              keyboardType="numeric"
              value={setTel}
              style={{color: '#fff700'}}
            />
            <Input
              placeholder="Endereço"
              onChangeText={endereco}
              keyboardType="numeric"
              value={setEndereco}
              style={{color: '#fff700'}}
            />
            <Input
              placeholder="Email"
              onChangeText={email}
              value={setEmail}
              style={{color: '#fff700'}}
            />
            <Input
              placeholder="Defina uma senha"
              onChangeText={senha}
              value={setSenha}
              style={{color: '#fff700'}}
            />
            <Input
              placeholder="URL da foto"
              onChangeText={url}
              value={setUrl}
              style={{color: '#fff700'}}
            />
            <Button
              title="Cadastrar"
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
              onPress={() => console.log('cadastrado')}
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
  texto_entrada: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
    color: '#fff700',
    borderStyle: 'solid',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Cadastro;
