import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import CartItem from './CartItem/CartItem'

import useStyle from './styles'
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../../redux/constants/cartConstants'

export default function Cart() {

  const classes = useStyle() 
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart)

  const handleEmptyCart = () => {
    dispatch(
      {
        type: actionTypes.CART_RESET
      }
    )
    localStorage.clear()
  }

  const EmptyCard = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart, buy something !!</Typography>

  )

  const FilledCard = () => (
    <>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={4} key={item._id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal:</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          {/* <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button> */}
        </div>
      </div>
    </>
  )

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom >
        Your Shopping Cart
      </Typography>
      { !cartItems.length ? <EmptyCard /> : <FilledCard /> }
    </Container>
  )
}
