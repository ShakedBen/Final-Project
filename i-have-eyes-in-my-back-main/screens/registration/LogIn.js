import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import style from '../../styles/GlobalStyle'
import { Input } from '../../components/Input'
import { MainButton } from '../../components/MainButton'
import { Card } from '../../components/Card'
import { BodyText } from '../../components/BodyText';
import { ShowAlert } from '../../components/ShowAlert';
import * as authActions from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';
import { NoInput } from '../../alertData.json/alert.json'

export const LogIn = (props) => {
 
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  

  const submitData =  async  () => {
    if(email === ""){
      ShowAlert(props, NoInput)
      return;
    }
    let action;
    action = authActions.login( email, password);
    setIsLoading(true);
    try {
      await dispatch(action);
    } catch (err) {
      const error =  await err.message
      setIsLoading(false);
      printError(error);
      
    }

  }

  const printError = (error) => {
    if(error){
      let data = {
        message: error,
        text: '',
        textButton:'הבנתי',
        pageName: ""
      }
      ShowAlert(props, data)
    }
   
  };

  
  return (
      <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss();}} >
        <LinearGradient colors={['#c8e8ca', '#8BC2C4']} style={style.gradient}>
          
            <Card>
              <View style={{textAlign: "center", alignItems: 'center'}}>
                  <BodyText style={style.header} > כניסה למערכת</BodyText>
                  <BodyText style={style.Bodytext} > הכנס מייל:</BodyText>
                  <Input
                  onChangeText={(text) => 
                    text.charAt(text.length -1) === " " ? {} : SetEmail(text)
                  }
                  value={email}
                  />
                  <BodyText style={style.Bodytext} > הכנס סיסמא:</BodyText>
                  <View style={style.inputContainer}>
                    <Pressable onPress={handlePasswordVisibility}
                    style={style.inputContainerPassword}
                    >
                      <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                    </Pressable>
                    <Input 
                    onChangeText={(text) => 
                      text.charAt(text.length -1) === " " ? {} : SetPassword(text)
                    }
                    textContentType='newPassword'
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    />
        
                  </View>
                  <View style={{...style.buttonLogin,...{paddingTop:40}}}>
                    <MainButton
                    styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
                    styleMainButtonText={style.homePageButton}
                    onPress={submitData} 
                    >
                      היכנס
                    </MainButton>
                
                  </View>
                  <View style={style.buttonLogin}>
                    <MainButton
                      styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
                      styleMainButtonText={style.forgetPasswordButton}
                      onPress={() =>  props.navigation.navigate('ForgetPassword') } 
                      >
                        שכחתי סיסמה
                      </MainButton>
                    </View>
              </View>
            </Card>
         
        </ LinearGradient>
      </ TouchableWithoutFeedback>
  );
}

LogIn.navigationOptions = {
  headerTitle: 'התחברות'
};

export default LogIn