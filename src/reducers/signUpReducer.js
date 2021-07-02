import { ADD_NAME } from "../actions/actionName"
import { ADD_AGE } from "../actions/actionAge"
import { ADD_EMAIL } from "../actions/actionEmail"
import { ADD_CLIENT } from '../actions/actionClient'

const INITIAL_STATE = {
  name: '',
  age: '',
  email: '',
  client: [],
}

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME: 
      return { ...state, name: action.payload };
    case ADD_AGE: 
      return { ...state, age: action.payload };
    case ADD_EMAIL: 
      return { ...state, email: action.payload };
    case ADD_CLIENT: 
      return { ...state, client: action.payload };
    default: 
      return state;
  }
}

export default signUpReducer;
