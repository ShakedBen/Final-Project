import React, { useState, useEffect } from 'react';
import { List } from '../components/List'
import * as students from '../store/actions/student'



export const StudentList = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {

    const getStudent = async () => {
      try{
        setData(await students.getAllStudents())

      }catch(error){
        console.log(error)
      }
    }
    getStudent()

  }, [])

  return (
    
    <List 
    Data={data} 
    type='Student' 
    num={1} 
    MultipleSelection={props.MultipleSelection}
    onPress={props.onPress}
    />
       
  );
}
  export default StudentList