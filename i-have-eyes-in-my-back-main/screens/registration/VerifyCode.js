import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import style  from '../../styles/GlobalStyle'
import { Input } from '../../components/Input'
import { MainButton } from '../../components/MainButton'
import { BodyText } from '../../components/BodyText'
import { Card } from '../../components/Card'
import { LinearGradient } from 'expo-linear-gradient';
import * as auth from '../../store/actions/auth';
import { ShowAlert } from '../../components/ShowAlert';
import { NoInputCode, NoValidCode } from '../../alertData.json/alert.json'
 
export const VerifyCode = (props) => {

  const [code, SetCode] = useState('')
  const [codeInput, SetCodeInput] = useState('')
  const email = props.navigation.getParam('Email')
  const flag = false

  useEffect(() => {
    async function getCode(){
      try{

       const resData = await auth.verifyEmailUser(email)
       if(!(await resData.success)){
        resData.message = "אופסי, ישנה שגיאה, בבקשה תנסה מאוחר יותר."
        ShowAlert(props, resData)
       }
      
        SetCode(await resData.code)
   
      }catch(error){
        console.log(error)
      }
    }
    getCode()

  }, [flag])


  const submitData = async () => {
    try{

      if(codeInput === ""){
        ShowAlert(props,NoInputCode)
        return;
      }
      

      if(code === codeInput){
        props.navigation.navigate('ResetPassword', { Email: email })
      }
      else{
        ShowAlert(props,NoValidCode)
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
              <BodyText  style={{fontWeight: 'bold',fontSize: 22}}> שכחתי סיסמה?  </BodyText>
              <BodyText  style={{fontWeight: 'bold',fontSize: 16}}> הכנס את הקוד שקיבלת למייל  </BodyText>

              <BodyText  style={style.Bodytext}> קוד זיהוי: </BodyText>
              <Input 
              style={ style.input} 
              onChangeText={ (text) => 
                text.charAt(text.length -1) === " " ? {} : SetCodeInput(text) }
              value={codeInput}
              />
              
              <View style={style.button}>
                <MainButton
                styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
                styleMainButtonText={style.homePageButton}
                onPress={submitData} 
                >
                  המשך
                </MainButton>
            
              </View>
            
          </View>
        </Card>
      </LinearGradient>
    </TouchableWithoutFeedback>
       
  );
}
VerifyCode.navigationOptions = {
    headerTitle: 'קוד זיהוי'
    };
    
    
    export default VerifyCode