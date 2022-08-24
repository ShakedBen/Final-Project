import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import * as auth from '../../store/actions/auth'
import { MainButton } from '../../components/MainButton';


export const AddUser = (props) => {

  const [email, SetEmail] = useState('')
  const [valideEmail, SetValideEmail] = useState(false)
  const [newMessage, SetNewMessage] = useState('')
  const admin = props.navigation.getParam('admin')
  const token = useSelector(state => state.authReducer.token);
  
  let name  = "מורה"
  if(admin){
    name = "מנהל"
  }

  const submitData = async () => {
    try{
  
      const resData = await auth.addUserEmail(email, admin)

      Alert.alert(
        resData.message,
        '',
      [
        { 
          text: resData.list.textButton, 
          onPress: () => props.navigation.navigate(resData.list.pageName),     
        }
      ]
      )
    
    }
    catch{

    }
 
  }

  const validateEmail  = (text) => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      SetValideEmail(false)
      SetEmail(text)
    }
    else {
      SetValideEmail(true)
      SetEmail(text)
    }
  }

  return (

    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss();}}>
      <LinearGradient colors={['#c8e8ca', '#8BC2C4']} style={style.gradient}>
        <Card>
          <BodyText style={style.header} > הוספת משתמש {name} חדש למערכת</BodyText>
          <BodyText style={style.BodyText} > 
          
            ע״י הוספת הדואר האלקטרוני של ה{name},
           ה{name} יוכל להירשם לאפליקציה כמשתמש מסוג {name}
           </BodyText>
          <View style={{textAlign: "center", alignItems: 'center'}}>
          
            <BodyText style={style.Bodytext} > דואר אלקטרוני: </BodyText>
            <Input
            style={ email === '' ? style.input : valideEmail ? style.Valid : style.noValid} 
            onChangeText={(text) => {validateEmail(text)}}
            value={email}
            /> 
            <View style={style.button}>
              <MainButton
              styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
              styleMainButtonText={style.forgetPasswordButton}
              onPress={submitData}>
                הוסף  
              </MainButton>
            </View>
          </View>
        </Card>
      </LinearGradient>
    </ TouchableWithoutFeedback>
  
    
  );

}

AddUser.navigationOptions = {
  headerTitle: 'הוספת משתמש למערכת'
};
  export default AddUser