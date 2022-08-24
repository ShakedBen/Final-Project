import React, { useEffect } from 'react';
import { View, Alert } from 'react-native';
import style from '../styles/GlobalStyle';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

export const LogOut = (props) => {

  const dispatch = useDispatch();

  useEffect( () => {
   
    Alert.alert(
      'האם אתה בטוח/ה שאת/ה רוצה להתנתק? ' ,
      '',
      [
      { 
        text:'כן', 
        onPress: () =>   dispatch(authActions.logout()), 
      },
      { 
        text:'לא' ,
        onPress: () => props.navigation.navigate('HomePage'),
      }
      ]
    )
  }, [])

  
 

  return(
  <View style={[style.container, style.logOutPage]}>

  </View> 
 );

 
}

export default LogOut