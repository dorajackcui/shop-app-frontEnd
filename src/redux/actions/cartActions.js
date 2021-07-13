import * as actionTypes from '../constants/cartConstants'
import { getProductById } from '../../api/index'

export const addToCart = (id, qty) => async(dispatch, getState) => {
  const { data } = await getProductById(id)

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload:{...data, qty:1}
  })

  localStorage.setItem("cart",JSON.stringify(getState().cart))
}

export const removeFromCart = (id) => async(dispatch, getState) => {

  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  })

  localStorage.setItem("cart",JSON.stringify(getState().cart))

}

export const updateItemQty = (id, qty) => async(dispatch, getState) => {

  dispatch({
    type: actionTypes.UPDATE_QTY,
    payload: {id, qty}
  })

  localStorage.setItem("cart",JSON.stringify(getState().cart))

}
