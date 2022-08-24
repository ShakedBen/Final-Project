import { Alert } from 'react-native';

export const ShowAlert = (props, resData, resData2 ) => {

  let array = []
  let text1 =  { 
    text: !resData.textButton ? "הבנתי" : resData.textButton, 
    onPress: () => resData.pageName === "" || !resData.pageName ? {} : props.navigation.navigate(resData.pageName, resData2),     
  }
  array.push(text1)
 
  if(!!resData2 && !!resData2.textButton){
    let text2 = { 
      text:  !resData2.textButton ? {} : resData2.textButton, 
      onPress: () => !resData2.pageName ? {} : props.navigation.navigate(resData2.pageName)  
    }
    array.push(text2)
  }


  Alert.alert(
    resData.message,
    resData.text,
    array
  )

}
  export default ShowAlert