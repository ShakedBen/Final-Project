export const checkValidEmail = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let valideEmail = false
    if (reg.test(email) === false) {
        valideEmail = false
    }
    else {
        valideEmail = true
    }
      return { valideEmail: valideEmail}
  }

