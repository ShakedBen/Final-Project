

  export const checkPassword = (password) => {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    let color = "red"
    let isGoodPassword = false
    let passwordLevel = 'סיסמה חלשה'
      if(strongPassword.test(password)  === true) {
        color = "green"
        isGoodPassword = true
        passwordLevel = 'סיסמה חזקה'
      } else if(mediumPassword.test(password)  === true){
        color = 'blue'
        isGoodPassword = false
        passwordLevel = 'סיסמה בינונית'
      } else{
        color = 'red'
        isGoodPassword = false
        passwordLevel = 'סיסמה חלשה'
      }
      return {color: color, isGoodPassword: isGoodPassword, passwordLevel: passwordLevel}
  }

  export const samePassword = (password, verifyPassword) => {
    let color = "red"
    let checkSamePassword = false
  
    if(password === verifyPassword){
      checkSamePassword = true
      color = "green"
    }else{
      checkSamePassword = false
      color = "red"
    }
    return {color: color, checkSamePassword: checkSamePassword}
  }


