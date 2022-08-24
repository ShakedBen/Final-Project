import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, TouchableWithoutFeedback, Keyboard, Button, Alert } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { MainButton } from '../../components/MainButton'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { LinearGradient } from 'expo-linear-gradient';
import * as professions from '../../store/actions/professions';

export const AddProfession = (props) => {

  const [profession, SetProfession] = useState('')

  const submitData = async () => {
    
    try{  
  
      const resData = await professions.AddProfession(profession)
  
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
        <Card>
          <BodyText style={style.header} > הוסף מקצוע </BodyText>
          <BodyText style={style.Bodytext} >  הוסף מקצוע חדש למקצועות הלימוד הנלמדים בבית הספר </BodyText>
          <View style={{textAlign: "center", alignItems: 'center'}}>
          
            <BodyText style={style.Bodytext} > שם המקצוע: </BodyText>
            <Input
            onChangeText={(text) => {SetProfession(text)}}
            value={profession}
            /> 
            <View style={style.button}>
            <MainButton 
              styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
              styleMainButtonText={style.forgetPasswordButton}
              onPress={ submitData } 
              >
                הוסף
              </MainButton>
            </View>
          </View>
        </Card>
      </LinearGradient>
    </ TouchableWithoutFeedback>
  );
}

AddProfession.navigationOptions = {
  headerTitle: 'הוספת מקצוע לימוד'
};
  export default AddProfession