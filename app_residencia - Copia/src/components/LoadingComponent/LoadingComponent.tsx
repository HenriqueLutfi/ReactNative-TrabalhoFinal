import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {LoadingContext} from '../../context/LoadingContext';

function LoadingComponent() {

  const {loading} = useContext(LoadingContext);
  if(loading){
    return (
        <View >
          <ActivityIndicator animating={loading} size={'large'} color="#fff700" />
        </View>
      );
  }else{
    return null
  }
  
}
export default LoadingComponent;
