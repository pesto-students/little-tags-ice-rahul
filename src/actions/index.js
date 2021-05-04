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