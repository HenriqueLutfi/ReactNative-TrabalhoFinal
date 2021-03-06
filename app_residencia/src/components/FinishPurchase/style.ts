import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    borderColor: '#fff700',
    borderRadius: 15,
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
  },
//   card: {
//     display: 'flex',
//     justifyContent: 'space-evenly',
//     width: 150,
//     height: 220,
//     backgroundColor: '#000000',
//     padding: 15,
//     borderRadius: 15,
//     alignItems: 'center',
//     marginVertical: 5,
//     flexDirection: 'column',
//     borderColor: '#fff700',
//     borderWidth: 1,
//   },
  textColor: {
    // textAlign: 'center',
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
    fontSize:15,
  },
  viewButtonsRow:{
    flexDirection:'row'
  },
  viewButtons:{
    width:'50%',
    justifyContent:'center',
    padding: 5,
  },
  viewText:{
    alignItems:'center'
  }
});
