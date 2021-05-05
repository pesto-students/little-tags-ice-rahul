import * as ACTIONS from '../constants/actionTypes'

const useAddAddressReducer = (state, action) => {

  switch(action.type){
    case ACTIONS.ADD_STATE: return {
      ...state,
      ...action.payload
    }
    default: return state;
  }

}

export default useAddAddressReducer;