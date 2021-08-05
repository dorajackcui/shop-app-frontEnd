import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function Reviews() {
  const cartItems = useSelector(state => state.cart)
  const subtotal = cartItems.reduce((subtotal,item) => (item.price*item.qty)+subtotal, 0)  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Orders Summary
      </Typography>
      <List>
        {cartItems.map(i => (
          <ListItem key={i.name}>
            <ListItemText primary={i.name} secondary={`Quantity: ${i.qty}`} />
            <Typography variant="body2">${i.price}</Typography>
          </ListItem>
        ))}
        <ListItem>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          $ {subtotal}
        </Typography>
      </ListItem>
      </List>
    </>
  )
}
