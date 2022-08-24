import React, { useState, useEffect } from 'react';
import { List } from '../components/List'
import * as auth from '../store/actions/auth'

export const TeacherList = (props) => {

  const [data, Setdata] = useState([])

  useEffect(() => {
    async function fetchMyAPI(){

      try{
        Setdata( await auth.getAllTeacher())

      }catch(error){
        console.log(error)
      }
    }
    fetchMyAPI()

  }, [])

  return (
    
    <List 
    Data={data} 
    type='Teacher' 
    num={1} 
    MultipleSelection={props.MultipleSelection}
    onPress={props.onPress}
    />
       
  );
}
  export default TeacherList