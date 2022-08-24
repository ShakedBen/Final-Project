import { getToken, baseUrl } from './auth'



export const getAllProfessions = async () =>{
    try{
    
      let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/getProfessions`,
      {
        method:"GET",
        headers:{
          'Content-Type':'application/json',
          'authorization': 'JWT '+ await getToken() 
        }
      })

      const resData = await response.json()
      return resData.profession


    }catch(error){
      console.log(error)
    }
}

export const AddProfession = async (profession) => {
  
  try{  
    
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/AddProfession`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken()
      },
      body:JSON.stringify({
        profession
      })
    })
    
    return await response.json()

    
  }catch(error){
    console.log(error)
  }
}



export const deleteProfession  = async (professionListToDeleate) => {
  try{
    
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/deleteProfession`,
      {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'authorization': 'JWT '+ await getToken()
        },
        body:JSON.stringify({
            professionListToDeleate: professionListToDeleate
        })
      })   

      return await response.json()

    }catch(error){
      console.log(error)
    }
}


export const getAllProfessionOfClass  = async (selectClass) => {
  try{
    
    
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/getProfessionsOfClass`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken()
      }, 
      body:JSON.stringify({
        theSelectionClass: selectClass
      })
    })

      return await response.json()

    }catch(error){
      console.log(error)
    }
}


export const deleteProfessionFromClass  = async (selectClass, professionListToDeleate) => {
  try{
    
    let response = await fetch(`https://i-have-eyes-in-my-back.herokuapp.com/deleteProfessionFromClass`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'authorization': 'JWT '+ await getToken()
      },
      body:JSON.stringify({
          selectClass: selectClass,
          professionListToDeleate: professionListToDeleate,
      })
    })   
      return await response.json()

    }catch(error){
      console.log(error)
    }
}