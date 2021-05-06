import * as ACTIONS from '../constants/actionTypes';
import * as CONSTANT from '../constants';

const initialState = {
  position: CONSTANT.DRAWER.CLOSE
}

export default function sideDrawerReducer(state = initialState, action) {
  switch(action.type){
    case ACTIONS.DRAWER_STATE:
      return {
        ...state,
        position: action.position
      }
    default: return state;
  }
}
