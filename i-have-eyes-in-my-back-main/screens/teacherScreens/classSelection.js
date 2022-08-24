import React from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { BodyText } from '../../components/BodyText'
import { ClassList } from '../ClassList'

export const classSelection = (props) => {

   const selectionConfirmation = (item) => {
    Alert.alert(
        'האם הכיתה שאתה מלמד כעת היא ' + item,
        '',
       [
        { 
          text:'כן', 
          onPress: () => props.navigation.navigate('ProfessionsSelection' ,{ theSelectionClass: item }), 
        },
        { 
          text:'לא' 
        }
       ]
      )
    }

  return (
    <View style={style.container}>
    <BodyText style={style.header} >לחץ על הכיתה שאת/ה מלמד/ת כעת  </BodyText>
    <ClassList 
     MultipleSelection={false}
    onPress={ (item) => { item !== null ? selectionConfirmation(item): null
     
      } } 
    />
  </View>
  );
}

classSelection.navigationOptions = {
  headerTitle: 'בחירת כיתת לימוד'
};
  export default classSelection