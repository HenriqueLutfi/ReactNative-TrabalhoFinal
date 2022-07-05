import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Input, Text, Button, Icon } from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import yoda from '../../assets/yoda.png'

const Cadastro = () => {
  const { usuario, setUsuario } = useContext(AutenticacaoContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [url, setUrl] = useState('');




  const InsertUsuario = async (nome: string, email: string, senha: string) => {
    console.log(nome, email, senha)
    const data = {

      nomeUsuario: nome,
      email: email,
      senha: senha,

    };

    try {
      const formData = new FormData();
      formData.append('usuario', JSON.stringify(data));
      formData.append('file', {
        uri: imageUser,
        type: 'image/jpeg',
        name: "imagename.jpg",
      });
      const config = {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }
      await AxiosInstance.post("/autenticacao/registro", formData, config);

      setNome("");
      setEmail("");
      setSenha("");

      Alert.alert("Cadastro realizado com sucesso!")
    } catch (err) {
      Alert.alert('deu ruim')

    }
  };
  const handleImageUser = () => {

    Alert.alert("Selecione", "informe de onde deseja pegar a foto", [
      {

        text: "Galeria",
        onPress: () => pickImageFromGalery(),
        style: 'default'

      }

    ]
    );

  };
  const [imageUser, setImageUser] = useState('https://thumbs.dreamstime.com/b/vetor-de-avatar-do-perfil-silhueta-masculino-desconhecido-pessoas-desconhecidas-masculina-175294833.jpg');
  const pickImageFromGalery = async () => {

    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    }
    const result = await launchImageLibrary(options);
    console.log(result);


    if (result?.assets) {
      setImageUser(result.assets[0].uri!)
    }

  }
  console.log("Imagem", imageUser);


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
            <View style={styles.container_foto}>
              <TouchableOpacity
                onPress={handleImageUser}
              >
                <Image style={styles.imgUser} source={{ uri: imageUser }} />
                <Icon name={"edit"} size={30} />

              </TouchableOpacity>
            </View>
            <Input
              placeholder="Nome completo"
              onChangeText={setNome}
              value={nome}
              style={{ color: '#fff700' }}
            />



            <Input
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
              style={{ color: '#fff700' }}
            />
            <Input
              placeholder="Defina uma senha"
              onChangeText={setSenha}
              value={senha}
              style={{ color: '#fff700' }}
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
              onPress={() => InsertUsuario(nome, email, senha)}
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
  container_foto: {
    display: 'flex',
    justifyContent: 'center'
  },
  imgUser: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginLeft: 75



  },
});

export default Cadastro;
