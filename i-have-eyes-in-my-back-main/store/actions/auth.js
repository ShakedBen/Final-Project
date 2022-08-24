export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//export const baseUrl = Platform.OS === 'android' ? '10.0.0.10' : 'localhost';

let timer;

export const getToken = async () => {
  const userData = await AsyncStorage.getItem('userData');
  if (!userData) {
    return;
  }
  const transformedData = JSON.parse(userData);
  const { token } = transformedData;
  return token
}

export const getUserId = async () => {
  const userData = await AsyncStorage.getItem('userData');
  if (!userData) {
    return;
  }
  const transformedData = JSON.parse(userData);
  const { userId } = transformedData;
  return userId
}


export const authenticate = (userId, token, isAdmin, expiryTime) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, userId: userId, token: token, isAdmin: isAdmin }, setLogoutTimer(expiryTime));
  };
};

const saveDataToStorage = async (userId, token, isAdmin, expirationDate) => {

  try{

    AsyncStorage.setItem(
      'userData', 
      JSON.stringify({
        userId: userId,
        token: token,
        isAdmin: isAdmin.toString(),
        expiryDate: expirationDate.toISOString()
      })
    );

  }catch(e){
    console.log(e)

  }

};


export const login = (email, password) => {
    
    try{
      return async dispatch => {
        let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/login`,
        {
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            email,
            password
          })
        })  
        const resData = await response.json()
        if(response.status != 201){
          throw await resData 
        }
        const expirationDate = new Date(
          new Date().getTime() + parseInt(resData.expiresIn) * 1000
        );
      
        dispatch(authenticate(resData.user._id, resData.token, resData.user.admin, expirationDate));
        saveDataToStorage(resData.user._id, resData.token, resData.user.admin, expirationDate);
    };

    }catch(e){
      console.log(e)
    }
   

};


export const logout = () => {
  
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return async dispatch => {
    dispatch({ type: LOGOUT });
  }

};
const clearLogoutTimer = () => {
  // console.log('timer')
  // console.log(timer)
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};





export const checkEmail = async (email) => {
  try{
   
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/EmailCheck`,
    {
    method:"POST",
    headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email,
        })
    })
   
    return response

  }catch(error){
    console.log(error)
  }
}


export const signup = async (firstName, lastName, email, admin, password) => {
  try{
   
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/signup`,
      {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          firstName,
          lastName,
          email,
          admin,
          password
        })

      })
    return response

  }catch(error){
    console.log(error)
  }
}


export const getAllTeacher = async () => {
  try{

    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/getAllTeacher`,
    {
      method:"GET",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      }
    })

    const resData = await response.json()
    return resData.teacherArr

  }catch(error){
    console.log(error)
  }
}



export const deleteTeacher = async (teacherListToDeleate) => {
  try{

    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/deleteTeacher`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      },
      body:JSON.stringify({
        teacherListToDeleate: teacherListToDeleate,
      })
    })   
    return await response.json()
    
  }catch(error){
    console.log(error)
  }
}


export const addUserEmail = async (email, admin) => {
  try{
      
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/addUserEmail`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      },
      body:JSON.stringify({
        email,
        admin
      })
    })
    return await response.json()
    
  }catch(error){
    console.log(error)
  }
}


export const getUser = async (email, admin) => {
  try{
      
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/getUser`,
    {
      method:"GET",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken(),
      }
    })

    const resData = await response.json()
    return resData.user
    
  }catch(error){
    console.log(error)
  }
}


export const updateUser = async (user, firstName, lastName, password, newPassword, validnewPassword) => {
  try{

    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/updateUser`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      },
      body:JSON.stringify({
        user,
        firstName,
        lastName,
        password,
        newPassword,
        validnewPassword
      })
    })
   
    return await response.json()
    
  }catch(error){
    console.log(error)
  }
}


export const verifyEmailUser = async (email) => {
  try{

    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/password-reset-request`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      },
      body:JSON.stringify({
        email
      })
    })
   
    return await response.json()
    
  }catch(error){
    console.log(error)
  }
}

export const ResetPassword = async (email, password) => {
  try{

    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/reset-password`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      },
      body:JSON.stringify({
        email,
        password
      })
    })

    return await response.json()
    
  }catch(error){
    console.log(error)
  }
}