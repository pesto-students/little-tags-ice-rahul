import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  cartState: cartReducer,
})

export default rootReducer;