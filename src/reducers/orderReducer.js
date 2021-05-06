import * as ACTIONS from '../constants/actionTypes'

const initialState = {
  order: []
}

function orderReducer(state = initialState, action){
  switch(action.type){
    case ACTIONS.PLACE_ORDER:
      return {
        order: [...state.order, action.order]
      }
    default: return state;
  }
}

export default orderReducer;