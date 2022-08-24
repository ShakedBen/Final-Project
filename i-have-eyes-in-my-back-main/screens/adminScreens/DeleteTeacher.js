import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { TeacherList } from '../TeacherList'
import { MainButton } from '../../components/MainButton'
import { useSelector } from 'react-redux';
import * as auth from '../../store/actions/auth'

export const DeleteTeacher = (props) => {


  const token = useSelector(state => state.authReducer.token);
  const[teacherListToDeleate, setTeacherListToDeleate] = useState([]);



  const submitData = async () => {

    try{

      const resData = await auth.deleteTeacher(teacherListToDeleate)
    
      Alert.alert(
        resData.message,
        resData.list.text,
      [
        { 
          text: resData.list.textButton,
          onPress: () => props.navigation.navigate(resData.list.pageName) 
        }
      ]
      )
      

    }catch(error){
      console.log(error)
    }
    
  }

  const deleteTeacher = () => {

    let message = 'המיילים של המורים:'
    let text1 = 'שנה בחירה'
    let text2 = 'מחק מורים'
    
    
    if(teacherListToDeleate.length === 0){
      message = ' לא נבחר אף מורה'
      text1 = ' חזור '
      text2 = ''

    }else if(teacherListToDeleate.length === 1){
      message = 'המייל שנבחר: '
      text1 = 'שנה בחירה'
      text2 = 'מחק מורה'

    }

    Alert.alert(
      message + teacherListToDeleate,
      '',
     [
      { 
        text: text1, 
        onPress: () => {}, 
      },
      { 
        text: text2, 
        onPress: () => submitData(), 
      }
     ]
    )

  }

  

  return (

   
    <View style={style.container}>
      <BodyText style={style.header} >לחץ על המייל שתירצי/ה למחוק  </BodyText>
      <TeacherList
      onPress={ (item) => { item !== null ? setTeacherListToDeleate(item): null }}
      MultipleSelection={true} 
    
      />

        <MainButton 
        styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
        styleMainButtonText={style.forgetPasswordButton}
        onPress={ () => deleteTeacher() } 
        >
          אישור
        </MainButton>
      
    </View>
    
  );
}

DeleteTeacher.navigationOptions = {
  headerTitle: 'מחיקת מורה מהמערכת'
};
  export default DeleteTeacher