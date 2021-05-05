import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  cartState: cartReducer,
  addressState: addressReducer,
})

export default rootReducer;