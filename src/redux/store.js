import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducers } from './reducers/cartReducers'
import { getProductsReducer, getProductReducer } from './reducers/productsReducers'


const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProduct : getProductReducer,
  cart: cartReducers
})

const cartItemsInLocal = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

  const INITIAL_STATE = {
    cart: cartItemsInLocal
  }

const middleware = [thunk]

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store