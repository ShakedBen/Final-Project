import React, { useState, useEffect } from 'react';
import { List } from '../components/List'
import { useSelector } from 'react-redux';
import * as allClass from '../store/actions/class'


export const ClassList = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, Setdata] = useState([])
  const className = null
  const { navigation } = props
  const token = useSelector(state => state.authReducer.token);
  
const loadClasses = async () => {
    try{
      setIsLoading(true);
      const resData = await allClass.getAllClasses()
      Setdata(resData)
      setIsLoading(false);

     
    }catch(error){
      console.log(error)
    }
}

  useEffect( () => {
    loadClasses()
  }, [])

 
  // if (isLoading) {
  //   return (
  //     <View >
  //       <ActivityIndicator size="large" color={Colors.primary} />
  //     </View>
  //   );
  // }
  // if (!isLoading && data.length === 0) {
  //   return (
  //     <View >
  //       <Text>לא קיימות כיתות במערכת</Text>
  //     </View>
  //   );
  // }


  return (
    
    <List 
    Data={data} 
    type='className' 
    num={2} 
    MultipleSelection={props.MultipleSelection}
    onPress={props.onPress}/>
       
  );
}
  export default ClassList