import * as ACTIONS from '../constants/actionTypes';

const initialState = {
  cartItem: []
}

export default function cartReducer(state = initialState, action){
  switch(action.type){
    case ACTIONS.ADD_TO_CART:
      return {
        cartItem : [...state.cartItem.filter((val) => val && val.id !== action.cartItem.id), action.cartItem].sort((a, b) => a.id - b.id)
      }
    case ACTIONS.REMOVE_FROM_CART:
      return {
        cartItem : [...state.cartItem.filter((val) => val.id !== action.cartItem.id)].sort((a,b) => a.id - b.id)
      }
    case ACTIONS.CLEAR_CART:
      return initialState;
    default: 
      return state;
  }
}