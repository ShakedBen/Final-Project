import React from 'react';
import { TouchableOpacity  ,View  } from 'react-native';
import style  from '../styles/GlobalStyle'
import { BodyText } from '../components/BodyText'

export const MainButton = (props) => {

  return (
       <TouchableOpacity 
       activeOpacity={0.6} 
       style={{...style.mainButton, ...props.style,...props.styleMainButtonView, ...props.styleMainButton }} 
       onPress={props.onPress}>
         <View style={{...style.mainButton,...props.styleMainButton}}> 
          <BodyText style={{...style.mainButtonText,...props.styleMainButtonText}}> 
            {props.children} 
          </BodyText>
         </View>
       </TouchableOpacity> 
  );
}

  export default MainButton