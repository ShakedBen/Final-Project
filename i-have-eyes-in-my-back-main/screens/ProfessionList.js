import React, { useState, useEffect } from 'react';
import { List } from '../components/List'
import { useSelector } from 'react-redux';
import * as profession from '../store/actions/professions'

export const ProfessionList = (props) => {

  const [data, Setdata] = useState([])
  const token = useSelector(state => state.authReducer.token);

  useEffect(() => {
    async function fetchMyAPI(){
      try{

        Setdata( await profession.getAllProfessions())

      }catch(error){
        console.log(error)
      }
    }
    fetchMyAPI()

  }, [])

  return (
    
    <List 
    Data={data} 
    type='Profession' 
    num={2} 
    MultipleSelection={props.MultipleSelection}
    onPress={props.onPress}
    />
       
  );
}
  export default ProfessionList