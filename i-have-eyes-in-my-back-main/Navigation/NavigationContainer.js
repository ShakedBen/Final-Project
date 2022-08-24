import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Navigator from './Navigator';

const NavigationContainer = props => {
  const navRef = useRef();
  const isAuth = useSelector(state => !!state.authReducer.token);
  const isAdmin = useSelector(state => state.authReducer.isAdmin);

  useEffect(() => {

    if (isAuth) {

      if(isAdmin){
    
        navRef.current.dispatch(
            NavigationActions.navigate({ routeName: 'AdminNavigator' })
          );
      }
      else{
        navRef.current.dispatch(
            NavigationActions.navigate({ routeName: 'TeacherNavigator' })
          );
      }

    }
    else{
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: 'HomePageNavigator' })
      );
    }
  }, [isAuth]);

  return <Navigator ref={navRef} />;
};

export default NavigationContainer;