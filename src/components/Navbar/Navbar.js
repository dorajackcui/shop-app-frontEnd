import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Badge, Menu, MenuItem } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import useStyle from './styles'
import logo from '../../assets/commerce.png'

import { useSelector } from 'react-redux'

export default function Navbar() {
  const classes =  useStyle()

  const cart = useSelector(state => state.cart)
  const itemsInCart = cart.reduce((qty,item) => Number(item.qty)+qty, 0) 

  return (
  <>
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Typography component={Link} to="/" variant="h6" color="inherit" className={classes.title}>
          <img src={logo} alt="MERN SHOP" height="25px" className={classes.image} />
          Mern Shop App 
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton component={Link} to="/cart" color="inherit" aria-label="cart">
            <Badge badgeContent={itemsInCart} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
 
  </>
  )
}
