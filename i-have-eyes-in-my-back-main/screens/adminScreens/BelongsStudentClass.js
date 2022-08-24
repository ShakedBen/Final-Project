import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { StudentList } from '../StudentList'
import { BodyText } from '../../components/BodyText'
import { MainButton } from '../../components/MainButton'
import { ClassList } from '../ClassList'
import { useSelector } from 'react-redux';
import * as students from '../../store/actions/student';


export const BelongsStudentClass = (props) => {

  const token = useSelector(state => state.authReducer.token);
  const [studentsSelected, setStudentsSelected] = useState(false)
  const[ studentsList, setStudentsList] = useState([]);
  const[ classList, setClassList] = useState([]);

  const submitData = async () => {

    try{

      const resData = await students.addStudentsToClass(studentsList, classList)

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

  const Selected = (bool) => {

    let message = ' התלמידים שנבחרו הם: '
    let text1 = 'שנה בחירה'
    let text2 = 'המשך'
    
    
    if(studentsList.length === 0){
      message = ' לא נבחר אף תלמיד/ה'
      text1 = ' חזור '
      text2 = ''

    }else if(studentsList.length === 1){
      message = ' התלמיד שנבחר/ה: '

    }


    if(bool){

      Alert.alert(
        message,
        studentsList.join(),
  
      [
        { 
          text: text1, 
          onPress: () => {},     
        },
        { 
          text: text2, 
          onPress: () =>  setStudentsSelected(true),     
        },
      ]
      )

    }else{

      let message2 = ' הכיתות שנבחרו: '
      if(classList.length === 0){
        message2 = ' לא נבחרה כיתה '
        text1 = ' חזור '
        text2 = ''
  
      }else if(classList.length === 1){
        message2 = ' הכיתה שנבחרה: '
  
      }

      Alert.alert(
        message + studentsList.join(),
        message2 + classList.join(),
        
  
      [
        { 
          text: text1, 
          onPress: () => {},     
        },
        { 
          text: text2, 
          onPress: () => { submitData() },     
        },
      ]
      )


    }

  
  }


  if(!studentsSelected){
    return (

      <View style={style.container}>
        <StudentList
        MultipleSelection={true}
        onPress={ (items) => setStudentsList(items) } 
        />  
        <MainButton 
        styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
        styleMainButtonText={style.forgetPasswordButton}
        onPress={ () => Selected(true) } 
        >
          בחר
        </MainButton>
      </View>
  
    );
  }

  return (

    <View style={style.container}>
      <BodyText style={style.header} >בחר כיתה / כיתות  שתרצה להוסיף לה/ם את התלמידים שבחרת. </BodyText>
      <ClassList 
      MultipleSelection={true}
      onPress={ (items) => {setClassList(items)} } 
      />
        <MainButton 
        styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
        styleMainButtonText={style.forgetPasswordButton}
          onPress={ () => Selected(false) }            
        >
          בחר
      </MainButton>
          
    </View>
  );




}

BelongsStudentClass.navigationOptions = {
  headerTitle: 'הוספת תלמיד לכיתה '
};
  export default BelongsStudentClass