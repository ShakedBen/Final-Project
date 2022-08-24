import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View, StatusBar, StyleSheet} from 'react-native';
import style from '../styles/GlobalStyle'
import { MainButton } from './MainButton'


  export const List = (props) => {

    const [selectedId, setSelectedId] = useState(null);
    const[selectedList, setSelectedList] = useState([]);
    
    const {Data, type, MultipleSelection} = props;

    useEffect(() => {

      if(MultipleSelection){
        props.onPress(selectedList);  // This is be executed when `loading` state changes
      }
      else{
        props.onPress(selectedId) // This is be executed when `loading` state changes
      }

    }, [MultipleSelection, selectedList, selectedId])
    

    
    const handleSelection = (title) => {
      var selected = selectedId
   
      if(selected === title)
        setSelectedId(null)
      else 
        setSelectedId(title)
     
   }
   
   const handleSelectionMultiple = (title) => {
      var selectedIds = [...selectedList] 
      if(selectedList.includes(title))
        selectedIds = selectedIds.filter( id => id !== title)
      else 
        selectedIds.push(title)
      setSelectedList(selectedIds)
   }

    const renderItem = ({ item }) => {

      let title
      let styleButton = style.adminButtons
      let styleButtonSelested = style.notSelected

      if(type == 'className' ){
        title = item.className
        styleButton = style.smallButton
      }
      else if(type == 'studenName'){
        title = item.studenName
        styleButton = style.smallButton
      }
      else if(type == 'Profession'){
        title = item.profession
        styleButton = style.smallButton
      }
      else if(type == 'Teacher'){
        title = item.email
      }
      else if(type == 'title'){
        title = item.title
      }
      else if(type == 'Student'){
        title = item.name
      }
      
      if(MultipleSelection){   
        styleButtonSelested = selectedList.includes(title) ? style.selected : style.notSelected  
      }
      else{
        styleButtonSelested = title === selectedId ? style.selected : style.notSelected
      }
   
      return(
        <View style>
            <MainButton 
            styleMainButton={{backgroundColor: styleButtonSelested.backgroundColor}}
            styleMainButtonText={{color: styleButtonSelested.color}}
            style={styleButton}
            onPress={ () => {
              if(MultipleSelection){
                handleSelectionMultiple(title) 
              }
              else{
                handleSelection(title)
              }
            }}
            >
              {title}
          </MainButton>
        </View>
      );
      
    }

  
    return (
      <View style={styles.container}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={props.num}
          extraData={
            () =>{
              if(MultipleSelection)
                {selectedList, Data}
              else
                {selectedId, Data}
            }
          }
        />
        
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      alignItems: 'center',
      justifyContent: 'center', 
      paddingTop: 20,
    },
    item: {
      // padding: 20,
      // marginVertical: 8,
      // marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
 
  export default List