import { LOGIN } from "../actions/actionLogin"

const INITIAL_STATE = {
  login: '',
}

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, login: action.payload };
    default: 
      return state;
  }
}

export default signUpReducer;