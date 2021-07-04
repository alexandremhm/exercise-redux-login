import { ADD_CLIENT } from "../actions/actionClient"
import { REMOVE_CLIENT } from "../actions/actionRemove"


const INITIAL_STATE = {
  clients: [],
}

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLIENT: 
      return { ...state, clients: [...state.clients, action.payload] };
    case REMOVE_CLIENT:
      const element = state.clients.splice(action.payload, 1)
      return { ...state, clients: [...state.clients.filter(e => e !== element)] };
    default: 
      return state;
  }
}

export default signUpReducer;
