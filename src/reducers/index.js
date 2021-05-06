import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  cartState: cartReducer,
  addressState: addressReducer,
  orderState: orderReducer,
})

export default rootReducer;