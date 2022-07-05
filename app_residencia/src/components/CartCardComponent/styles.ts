import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
  card: {
    justifyContent: 'space-evenly',
    width: '90%',
    height: 220,
    backgroundColor: '#000000',

    alignItems: 'center',
    borderColor: '#fff700',
    borderWidth: 1,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Starjout',
    color: '#fff700',
    fontSize: 15,
    // fontWeight: 'bold',
  },
  textDescricao: {
    fontFamily: 'Starjout',
    color: '#fff700',
    fontSize: 10,
    // fontWeight: 'bold',
  },
  viewImage:{
    width: '30%',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  lista: {
    width: '98%',
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderColor: '#fff700',
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
  },
  textos:{
    width: '40%',
    padding: 5,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  remover: {
    width: '30%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
