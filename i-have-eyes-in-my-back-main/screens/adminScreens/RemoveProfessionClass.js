import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { MainButton } from '../../components/MainButton'
import { ClassList } from '../ClassList'
import { List } from '../../components/List'
import * as professions from '../../store/actions/professions';


export const RemoveProfessionClass = (props) => {

  const [isClass, setIsClass] = useState(false);
  const [data, setData] = useState([]);
  const[selectClass, setSelectClass] = useState("");
  const[professionListToDeleate, setProfessionListToDeleate] = useState([]);

  const getProfessionOfClass = async () => {

    try{
      const resData = await professions.getAllProfessionOfClass(selectClass)

      setData(resData.profession)

    }catch(error){
      console.log(error)
    }
  }

  

  const submitData = async () => {

    try{

      const resData = await professions.deleteProfessionFromClass(selectClass, professionListToDeleate)
    
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
              getProfessionOfClass()
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
      <BodyText style={style.header} >לחץ על המקצוע שתרצה למחוק  </BodyText>
      <List 
      Data={data} 
      type='Profession' 
      num={2} 
      MultipleSelection={true}
      key={(item) => item} 
      onPress={ (item) => { 
        item !== null ? setProfessionListToDeleate(item): null 
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

RemoveProfessionClass.navigationOptions = {
  headerTitle: 'מחיקת מקצוע לימוד מכיתה'
};
  export default RemoveProfessionClass