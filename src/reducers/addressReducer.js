import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  address: []
}

function addressReducer(state = initialState, action){
  switch(action.type){
    case ACTIONS.ADD_ADDRESS :
      return {
        address: [...state.address.filter((val) => val && val.id !== action.address.id), action.address].sort((a, b) => a.id - b.id)
      }
    case ACTIONS.REMOVE_ADDRESS:
      return {
        address: [...state.address.filter((val) => val.id !== action.address.id)].sort((a,b) => a.id - b.id)
      }
    case ACTIONS.CLEAR_ADDRESS:
      return initialState
    default: return state
  }
}

export default addressReducer;