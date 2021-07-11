import * as actionTypes from '../constants/productConstants'
import * as api from '../../api/index'

export const getProducts = () => async(dispatch) => {
  try {
    const { data } = await api.fetchProducts()
    dispatch({ 
      type: actionTypes.GET_PRODUCTS, 
      payload: data
    })
    
  } catch (error) {
    console.log(error)
  }
}


export const getProductById = (id) => async(dispatch) => {
  try {
    const { data } = await api.getProductById(id)
    dispatch({ 
      type: actionTypes.GET_PRODUCT_DETAILS, 
      payload: data
    })
    
  } catch (error) {
    console.log(error)
  }
}
