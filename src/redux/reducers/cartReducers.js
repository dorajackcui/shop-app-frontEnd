import * as actionTypes from '../constants/cartConstants.js'

const CART_INITIAL_STATE = []

export const cartReducers = (cartItems = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload
      const exsitItem = cartItems.find( x => x._id === item._id )
      if(exsitItem){
        let {qty, ...rest} = exsitItem
        return cartItems.map(i => i._id === item._id 
          ? ({qty:++qty, ...rest})
          : i)
      }else{
        return [...cartItems, item]
      }

    case actionTypes.CART_RESET:
      return cartItems
      
    case actionTypes.REMOVE_FROM_CART:
      return cartItems
    default:
      return cartItems
  }
}

