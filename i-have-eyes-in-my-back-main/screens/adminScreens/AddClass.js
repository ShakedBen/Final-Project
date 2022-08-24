import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, TouchableWithoutFeedback, Keyboard, Button, Alert, ImageBackground } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { MainButton } from '../../components/MainButton'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import * as allClass from '../../store/actions/class';

export const AddClass = (props) => {
  
  const [newClassRoom, SetNewClassRoom] = useState('')
  const [newClassNumber, SetnewClassNumber] = useState('')
  const token = useSelector(state => state.authReducer.token);

  const submitData = async () => {
    

    try{

      const resData = await allClass.addClass(newClassRoom, newClassNumber)
  
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
  
    }catch(error){
      console.log(error)
    }
  
     
 
  }

  return (

    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss();}}>
      <LinearGradient colors={['#c8e8ca', '#8BC2C4']} style={style.gradient}>
        <Card style={ {backgroundColor: '#d9e6f2'}}>
          <BodyText style={style.header} > הוסף כיתה חדשה </BodyText>
          <View style={{textAlign: "center", alignItems: 'center'}}>
          
            <BodyText style={style.Bodytext} > כיתה: </BodyText>
            <Input
            onChangeText={(text) => {SetNewClassRoom(text)}}
            value={newClassRoom}
            /> 
            <BodyText style={style.Bodytext} > מספר כיתה: </BodyText>
            <Input
            onChangeText={(text) => {SetnewClassNumber(text)}}
            keyboardType='numeric'
            value={newClassNumber}
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

AddClass.navigationOptions = {
  headerTitle: 'הוספת כיתה'
};
  export default AddClass