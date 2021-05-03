import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  authUser: null
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type){
    case ACTIONS.SET_AUTH_USER:
      return {
        ...state,
        authUser: action.authUser
      }
    default: return state;
  }
}
