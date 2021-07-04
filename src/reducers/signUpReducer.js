import { ADD_CLIENT } from "../actions/actionClient"

const INITIAL_STATE = {
  clients: [],
}

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLIENT: 
      return { ...state, clients: [...state.clients, action.payload] };
    default: 
      return state;
  }
}

export default signUpReducer;
