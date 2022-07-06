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
    borderColor: '#f0D906',
    borderWidth: 1,
    flexDirection:'row'
  },
  text: {
    textAlign: 'center',
    color: '#f0D906',
    fontFamily: 'Starjout',
    },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textButton: {
    color: '#f0D906',
    fontFamily: 'Starjout',
  },
});
