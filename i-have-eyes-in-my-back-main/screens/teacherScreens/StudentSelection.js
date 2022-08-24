import React, {useEffect, useState} from 'react';
import style from '../../styles/GlobalStyle'
import { View, Alert } from 'react-native';
import { List } from '../../components/List'
import { MainButton } from '../../components/MainButton'
import * as students from '../../store/actions/student';

export const StudentSelection = (props) => {

  const theSelectionClass = props.navigation.getParam('theSelectionClass')
  const profession = props.navigation.getParam('profession')
  const [studentList, setStudentList] = useState([])
  const [studentArrived, setStudentArrived] = useState([])


  useEffect(() => {
    const getStudent = async () => {
      try{
        setStudentList(await students.getStudentOfClass(theSelectionClass))

      }catch(error){
        console.log(error)
      }
    }
    getStudent()
  }, [])

  const createNewLesson = async () => {

    try{

      const resData = await students.createLesson(theSelectionClass, profession, studentList, studentArrived)

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

  return (

    <View style={style.container}>
      <List 
      Data={studentList} 
      type='Student' 
      num={1} 
      MultipleSelection={true}
      onPress={ (item) => { item !== null ? setStudentArrived(item): null }  }
      />

      <MainButton 
      styleMainButtonView={{...style.homePageBorderButton, ...style.myButtonStyle}}
      styleMainButtonText={style.forgetPasswordButton}
        onPress={ () => {createNewLesson()} } 
        >
          אישור
        </MainButton>
    </View>

  
  );
}

StudentSelection.navigationOptions = {
  headerTitle: 'סימון נוכחות'
};
  export default StudentSelection