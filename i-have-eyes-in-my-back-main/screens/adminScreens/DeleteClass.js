import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { ClassList } from '../ClassList'
import { MainButton } from '../../components/MainButton'
import * as allClass from '../../store/actions/class';

export const DeleteClass = (props) => {

  const[classListToDeleate, setClassListToDeleate] = useState([]);

  const submitData = async () => {

    try{

      const resData = await allClass.deleteClass(classListToDeleate)

      Alert.alert(
        resData.message,
        '',
      [
        { 
          text: resData.textButton,
          onPress: () => props.navigation.navigate(resData.pageName) 
        }
      ]
      )
      

    }catch(error){
      console.log(error)
    }
    
  }

  const deleteClassRoom = () => {

    let message = ' הכיתות שנבחרו הם: '
    let text1 = 'שנה בחירה'
    let text2 = 'מחק כיתות'
    
    
    if(classListToDeleate.length === 0){
      message = ' לא נבחרה אף כיתה'
      text1 = ' חזור '
      text2 = ''

    }else if(classListToDeleate.length === 1){
      message = ' הכיתה שנבחרה: '
      text1 = 'שנה בחירה'
      text2 = 'מחק כיתה'

    }

    Alert.alert(
      message + classListToDeleate,
      '',
     [
      { 
        text: text1, 
        onPress: () => {}, 
      },
      { 
        text: text2, 
        onPress: () => submitData(classListToDeleate), 
      }
     ]
    )

  }

  return (

    <View style={style.container}>
      <BodyText style={style.header} >לחץ על הכיתה שתירצי/ה למחוק  </BodyText>
      <ClassList 
      onPress={ (item) => { item !== null ? setClassListToDeleate(item): null }}
      MultipleSelection={true} 
    
      />

        <MainButton 
        styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
        styleMainButtonText={style.forgetPasswordButton}
        onPress={ () => deleteClassRoom() } 
        >
          אישור
        </MainButton>
      
    </View>

   
    
    
  );
}

DeleteClass.navigationOptions = {
  headerTitle: 'מחיקת כיתה מהמערכת'
};
  export default DeleteClass