import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import NavigationContainer from './Navigation/NavigationContainer'
import style  from './styles/GlobalStyle'
import authReducer from './store/reducer/auth'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';



export default function App() {

  const [isloading, setisloading] = useState(true);

  const rootReducer = combineReducers({
    authReducer: authReducer
  })
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  

  useEffect(() => {
    setTimeout(() => {
      setisloading(!isloading);
    }, 1000);
  }, []);

  if (isloading) {
    return (
      <SafeAreaView style={styles.container} >
        <Image
        style={style.image}
        source={require('./assets/logo.png')}
      />
      </SafeAreaView>
    )
} else {
    return (
      <Provider store={store}>
        < NavigationContainer/>
      </Provider>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BC2C4',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
 
  
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 35,
  }
});
