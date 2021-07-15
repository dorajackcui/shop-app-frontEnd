import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function PaymentForm() {
  const cartItems = useSelector(state => state.cart)
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Orders Summary
      </Typography>
      <List>
        {cartItems.map(i => (
          <ListItem key={i.name}>
            <ListItemText primary={i.name} secondary={`Quantity: ${i.qty}`} />
            <Typography variant="body 2">${i.price}</Typography>
          </ListItem>
        ))}
        <ListItem>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {123}
        </Typography>
      </ListItem>
      </List>
    </>
  )
}
