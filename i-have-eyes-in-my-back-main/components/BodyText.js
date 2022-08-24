import React from 'react';
import { Text } from 'react-native';

export const BodyText = (props) => {

  return (
       <Text style={props.style} >
         {props.children}
        </ Text>
       
  );
}

  export default BodyText