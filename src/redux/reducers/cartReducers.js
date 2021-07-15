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

    case actionTypes.UPDATE_QTY:
      const {id, qty:newQty} = action.payload
      const itemToChange = cartItems.find(i => i._id === id)
      
      if(newQty > 0){
        let {qty, ...rest} = itemToChange
        
        return cartItems.map(i => i._id === id 
          ? ({qty:newQty, ...rest})
          : i)
      }else{
        return cartItems.filter(i => i._id !== id)
      }
      

    case actionTypes.CART_RESET:
      return CART_INITIAL_STATE
      
    case actionTypes.REMOVE_FROM_CART:
      return cartItems.filter((x) => x._id !== action.payload)
      
    default:
      return cartItems
  }
}

