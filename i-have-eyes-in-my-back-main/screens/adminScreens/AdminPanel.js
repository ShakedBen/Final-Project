import React from 'react';
import style from '../../styles/GlobalStyle'
import { List } from '../../components/List'

export const AdminPanel = (props) => {

  const data = [
      {_id: 0, title: 'הוספת כיתה' , pageName: 'AddClass'},
      {_id: 1, title: 'מחיקת כיתה' , pageName: 'DeleteClass'},
      {_id: 2, title: 'הוסף מקצוע', pageName: 'AddProfession' },
      {_id: 3, title: 'הסר מקצוע', pageName: 'DeleteProfession' },
      {_id: 4, title: 'שייך מקצוע לכיתה', pageName: 'BelongsProfessionClass' },
      {_id: 5, title: 'הסר מקצוע מכיתה', pageName: 'RemoveProfessionClass' },
      {_id: 6, title: 'שייך תלמיד לכיתה' , pageName: 'BelongsStudentClass'},
      {_id: 7, title: 'הסר תלמיד מכיתה' , pageName: 'RemoveStudentClass'}, 
      {_id: 8, title: 'הוספת מורה למערכת' , pageName: 'AddUser', admin: false},
      {_id: 9, title: 'מחיקת מורה' , pageName: 'DeleteTeacher'},
      {_id: 10, title: 'הוסף אדמין', pageName: 'AddUser' , admin: true },
  ]

 
  return (
    
    <List 
    Data={data} 
    type='title' 
    num={1}
    MultipleSelection={false}
    onPress={ (item) => {
      if(item){
        let nextPage = data.filter(obj => {return obj.title === item})
        if(nextPage){
          if(nextPage[0].pageName == 'AddUser' ){
            props.navigation.navigate(nextPage[0].pageName,{admin: nextPage[0].admin})
          }
          else{
            props.navigation.navigate(nextPage[0].pageName)
          }
        }

         
      }
   
    } } 
    styleButton={style.adminButtons}/>
       
  );
}

AdminPanel.navigationOptions = {
  headerTitle: 'I have eyes in my back'
};
  export default AdminPanel