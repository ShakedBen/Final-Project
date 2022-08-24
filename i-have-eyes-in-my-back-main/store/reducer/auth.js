import { AUTHENTICATE, LOGOUT } from '../actions/auth';


const initialState = {
    userId: null,
    token: null,
    isAdmin: false,
}


const authReducer = (state = initialState, action) => {
  
    switch(action.type){
        case AUTHENTICATE:
            return {
                userId: action.userId,
                token: action.token,
                isAdmin: action.isAdmin
            }
        case LOGOUT:
            return initialState;
        default:
            return state
    }
    
}

export default authReducer