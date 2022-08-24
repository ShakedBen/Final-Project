import React, { useState } from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { ClassList } from '../ClassList'
import { ProfessionList } from '../ProfessionList'
import { BodyText } from '../../components/BodyText'
import { MainButton } from '../../components/MainButton'
import * as allClass from '../../store/actions/class';

export const BelongsProfessionClass = (props) => {

  const [classSelected, setClassSelected] = useState(false)
  const[classList, setClassList] = useState([]);
  const[professionList, setProfessionList] = useState([]);

  const submitData = async () => {

    try{

      const resData = await allClass.AddProfessionToClassList(classList, professionList)

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

    let message = ' הכיתות שנבחרו הם: '
    let text1 = 'שנה בחירה'
    let text2 = 'המשך'
    
    
    if(classList.length === 0){
      message = ' לא נבחרה אף כיתה'
      text1 = ' חזור '
      text2 = ''

    }else if(classList.length === 1){
      message = ' הכיתה שנבחרה: '

    }


    if(bool){

      Alert.alert(
        message,
        classList.join(),
  
      [
        { 
          text: text1, 
          onPress: () => {},     
        },
        { 
          text: text2, 
          onPress: () => setClassSelected(true),     
        },
      ]
      )

    }else{

      let profession = null
      let message2 = ' המקצועות שנבחרו: '
      if(professionList.length === 0){
        message2 = ' לא נבחר מקצוע '
        text1 = ' חזור '
        text2 = ''
  
      }else if(professionList.length === 1){
        message2 = ' המקצוע שנבחר: '
  
      }

      Alert.alert(
        message + classList.join(),
        message2 + professionList.join(),
  
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

  if(!classSelected){
    return (

      <View style={style.container}>
        <BodyText style={style.header} >בחר כיתה / כיתות  שתרצה להוסיף לה/ם מקצועות. </BodyText>
        <ClassList 
        MultipleSelection={true}
        onPress={ (items) => {setClassList(items)
        } } 
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
      <BodyText style={style.header} >בחר מקצועות שכיתה לומדת  </BodyText>
      <ProfessionList 
      MultipleSelection={true}
      onPress={ (items) => setProfessionList(items) } 
      />

      <View style={style.containerButtonRow}>
        
    
        <MainButton 
        styleMainButtonView={style.myButtonStyle}
        styleMainButtonText={style.forgetPasswordButton}
        onPress={ () => Selected(false) } 
        >
          בחר
        </MainButton>
      
    
        <MainButton 
        styleMainButtonView={ style.myButtonStyle}
        styleMainButtonText={style.forgetPasswordButton}
          onPress={ () => setClassSelected(false) } 
          >
            חזור
        </MainButton>
  

      </View>

 
    </View>
    
  );
}

BelongsProfessionClass.navigationOptions = {
  headerTitle: 'הוספת מקצוע לימוד לכיתה'
};
  export default BelongsProfessionClass