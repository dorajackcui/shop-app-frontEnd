import * as actionTypes from '../constants/productConstants'

export const getProductsReducer = (products=[], action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      
      return action.payload 
    
    default:
      return products
  }
}

export const getProductReducer = (product={}, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS:
      
      return action.payload 
    
    default:
      return product
  }
}