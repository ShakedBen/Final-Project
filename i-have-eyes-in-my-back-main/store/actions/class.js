import { getToken, baseUrl } from './auth'

export const getAllClasses = async () => {
    
    try{

      let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/getClasses`,
      {
        method:"GET",
        headers:{
          'Content-Type':'application/json',
          'authorization': 'JWT '+ await getToken() 
        }
      })
     
      const resData = await response.json()
      return resData.classRoom

     
    }catch(error){
      console.log(error)
    }
}

export const addClass = async (newClassRoom, newClassNumber) => {

  try{

    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/AddClassRoom`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      },
      body:JSON.stringify({
        newClassRoom,
        newClassNumber
      })
    })
  
    
    return await response.json()
 
  }catch(error){
    console.log(error)
  }

}

export const deleteClass = async (classListToDeleate) => {
  
  try{
    
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/deleteClassRoom`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken()
      },
      body:JSON.stringify({
        classListToDeleate,
      })
    })   

    return await response.json()
 
  }catch(error){
    console.log(error)
  }

}

export const AddProfessionToClassList = async (classList, professionList) => {
  try{

    
    
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/addProfessionsToClasses`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken() 
      },
      body:JSON.stringify({
        classList,
        professionList
      })
    })

    return await response.json()

  }catch(error){
    console.log(error)
  }
}
