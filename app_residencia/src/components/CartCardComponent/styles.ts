import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 5,
  },

  card: {
    justifyContent: 'space-evenly',
    width: '80%',
    height: 220,
    backgroundColor: '#000000',
    borderRadius: 15,
    alignItems: 'center',
    borderColor: '#fff700',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    color: '#fff700',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
  },
});
