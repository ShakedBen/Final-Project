import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import style  from '../../styles/GlobalStyle'
import { Input } from '../../components/Input'
import { MainButton } from '../../components/MainButton'
import { BodyText } from '../../components/BodyText'
import { Card } from '../../components/Card'
import { ShowAlert } from '../../components/ShowAlert';
import { LinearGradient } from 'expo-linear-gradient';
import * as auth from '../../store/actions/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';
import { checkPassword, samePassword } from '../../functional/passwordValid'
import {PasswordNotTheSame, errorMessage, NotStrongPassword} from '../../alertData.json/alert.json'
export const SignUp = (props) => {
  
  const [firstName, SetfirstName] = useState('')
  const [lastName, SetLastName] = useState('')
  const [password, SetPassword] = useState('')
  const [verifyPassword, SetVerifyPassword] = useState('')
  const email = props.navigation.getParam('Email')
  const admin = props.navigation.getParam('Admin')
  const passwordVisibility = useTogglePasswordVisibility();
  const verifyPasswordVisibility = useTogglePasswordVisibility();

  const checkPassword1 = checkPassword(password) 
  const checkSamePassword = samePassword(password, verifyPassword)
  let MustInput = '* שדה חובה'
  const [hasFirstName, SetHasFirstName] = useState(false)
  const [hasLastName, SetHasLastName] = useState(false)
  const [hasPassword, SetHasPassword] = useState(false)

  const submitData =  async () => {
    try{

      if(!firstName || !lastName || !password){

        if(!firstName){
          SetHasFirstName(true)
        }
        if(!lastName ){
          SetHasLastName(true)
        }
        if(!password){
          SetHasPassword(true)
        }
      } 
      else if(!checkPassword1.isGoodPassword){
        ShowAlert(props, NotStrongPassword)
      }
      else if(checkSamePassword.checkSamePassword){
        const response = await auth.signup(firstName, lastName, email, admin, password)
        const resData = await response.json()
        
        if(response.status == 201 || response.status == 401 ){
          ShowAlert(props, resData)
        }else{ 
          ShowAlert(props, errorMessage)
        }
      }else{
        ShowAlert(props, PasswordNotTheSame)
      }
 
    }catch{
      (err) => {console.log(err)}

  }
   
  }

  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss();}}>
       <LinearGradient colors={['#c8e8ca', '#8BC2C4']} style={style.gradient}>
          
      <Card > 
        <View style={{textAlign: "center", alignItems: 'center'}}>
              <BodyText  style={{fontWeight: 'bold',fontSize: 22}}> הרשמה  </BodyText>
              <BodyText  style={style.Bodytext}> שם פרטי: </BodyText>
              <Input 
              style={style.input} 
              onChangeText={(text) => {
                text.charAt(text.length -1) === " " ? {} : SetfirstName(text)}
              }
              value={firstName}
              />
              <BodyText  style={{color: 'red',fontSize: 12}}>  {firstName === "" && hasFirstName ? MustInput : "" } </BodyText>
              <BodyText  style={style.Bodytext}> שם משפחה: </BodyText>
                <Input 
                style={style.input} 
                onChangeText={(text) => {
                  text.charAt(text.length -1) === " " ? {} : SetLastName(text)}
                }
                value={lastName}
                />
                <BodyText  style={{color: 'red',fontSize: 12}}>  {lastName === "" && hasLastName ? MustInput : "" } </BodyText>
              <BodyText style={style.Bodytext} > סיסמא:</BodyText>
              <View style={{...style.inputContainer, ...password === '' ? style.inputContainer : checkPassword1.color === 'red' ? style.noValid : checkPassword1.color === 'blue' ? style.mediumPasswordStyle : style.Valid }}>
                 <Pressable onPress={passwordVisibility.handlePasswordVisibility}
                  style={style.inputContainerPassword}
                  >
                    <MaterialCommunityIcons name={passwordVisibility.rightIcon} size={22} color="#232323" />
                  </Pressable>
                  <Input 
                  style={ style.input } 
                  onChangeText={(text) => {
                    text.charAt(text.length -1) === " " ? {} : SetPassword(text)}
                  }
                  textContentType='newPassword'
                  secureTextEntry={passwordVisibility.passwordVisibility}
                  value={password}
                  enablesReturnKeyAutomatically
                  />
                </View>
                <BodyText  style={{color: checkPassword1.color,fontSize: 12}}>  {password === ""  && hasPassword ? MustInput : password === "" ? "" : checkPassword1.passwordLevel} </BodyText>
              <BodyText style={style.Bodytext} > וידוי סיסמא:</BodyText>
              <View
                style={ {...style.inputContainer, ...verifyPassword === '' ? style.inputContainer : checkSamePassword.checkSamePassword ? style.Valid : style.noValid}} >
                <Pressable onPress={verifyPasswordVisibility.handlePasswordVisibility}
                style={style.inputContainerPassword}
                >
                  <MaterialCommunityIcons name={verifyPasswordVisibility.rightIcon} size={22} color="#232323" />
                </Pressable>
                <Input 
                style={ style.input } 
                onChangeText={(text) => 
                  text.charAt(text.length -1) === " " ? {} : SetVerifyPassword(text)}
                secureTextEntry={verifyPasswordVisibility.passwordVisibility}
                value={verifyPassword}
                /> 
              
              </View>
              <View style={style.button}>
                <MainButton
                styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
                styleMainButtonText={style.homePageButton}
                onPress={submitData} 
                >
                  הירשם
                </MainButton>
              </View>
            
          </View>
        </Card>
      </LinearGradient>
    </TouchableWithoutFeedback>
       
  );
}

SignUp.navigationOptions = {
  headerTitle: 'הרשמה למערכת'
};


export default SignUp