import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { MainButton } from '../../components/MainButton'
import { ClassList } from '../ClassList'
import { List } from '../../components/List'
import * as students from '../../store/actions/student';


export const RemoveStudentClass = (props) => {

  const [isClass, setIsClass] = useState(false);
  const [data, setData] = useState([]);
  const[selectClass, setSelectClass] = useState("");
  const[studentListToDeleate, setStudentListToDeleate] = useState([]);

  const getStudentOfClass = async () => {

    try{

      setData( await students.getStudentOfClass(selectClass))
      
    }catch(error){
      console.log(error)
    }
  }

  

  const submitData = async () => {

    try{

      const resData =  await students.deleteStudentsFromClass(selectClass, studentListToDeleate)

      Alert.alert(
        resData.message,
        '',
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



  if(!isClass){
    
    return (
        
    <View style={style.container}>
      <BodyText style={style.header} > בחר כיתה </BodyText>
      <ClassList 
      MultipleSelection={false}
      onPress={ (item) => { 
        item !== null ? setSelectClass(item): null } } 
      />
             <MainButton 
             styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
             styleMainButtonText={style.forgetPasswordButton}
            onPress={ () => {
              getStudentOfClass()
              setIsClass(true)} 
            }            
           >
             בחר
         </MainButton>
    </View>
      
    );
  }


  return (

    <View style={style.container}>
      <BodyText style={style.header} >לחץ על התלמידים שתרצה למחוק  </BodyText>
      <List 
      Data={data} 
      type='Student' 
      num={1} 
      MultipleSelection={true}
      onPress={ (item) => { 
        item !== null ? setStudentListToDeleate(item): null 
      } }
      />
      <MainButton 
      styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
      styleMainButtonText={style.forgetPasswordButton}

          onPress={ () => 
            submitData()
          }            
          >
            בחר
        </MainButton>
  
    </View>
      
  );
}

RemoveStudentClass.navigationOptions = {
  headerTitle: 'מחיקת  תלמיד מכיתה'
};
  export default RemoveStudentClass