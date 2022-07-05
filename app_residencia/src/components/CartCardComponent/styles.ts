import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems:'center',
    padding: 5,
  },
  card: {
    justifyContent: 'space-evenly',
    width: '90%',
    height: 220,
    backgroundColor: '#000000',
    borderRadius: 15,
    alignItems: 'center',
    borderColor: '#fff700',
    borderWidth: 1,
    flexDirection:'row'
  },
  text: {
    textAlign: 'center',
    color: '#fff700',
    fontFamily: 'Starjout',
  
  },
  image: {
    width: 100,
    height: 100,
  },
});
