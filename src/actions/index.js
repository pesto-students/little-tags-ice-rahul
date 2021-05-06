import * as ACTIONS from '../constants/actionTypes';

export const setAuthUser = (authUser) => ({
  type: ACTIONS.SET_AUTH_USER,
  authUser
})

export const addToCart = (cartItem) => ({
  type: ACTIONS.ADD_TO_CART,
  cartItem
})

export const removeFromCart = (cartItem) => ({
  type: ACTIONS.REMOVE_FROM_CART,
  cartItem
})

export const clearCart = () => ({
  type: ACTIONS.CLEAR_CART
})

export const addAddress = (address) => ({
  type: ACTIONS.ADD_ADDRESS,
  address
})

export const removeAddress = (address) => ({
  type: ACTIONS.REMOVE_ADDRESS,
  address
})

export const clearAddress = () => ({
  type: ACTIONS.CLEAR_ADDRESS
})

export const addAddressState = (payload) => ({
  type: ACTIONS.ADD_STATE,
  payload
})

export const placeOrder = (order) => ({
  type: ACTIONS.PLACE_ORDER,
  order
})

export const clearOrder = () => ({
  type: ACTIONS.CLEAR_ORDER
})