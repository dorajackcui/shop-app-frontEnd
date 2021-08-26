import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grow } from '@material-ui/core'
import useStyles from './styles'

import { useDispatch } from 'react-redux'
import { removeFromCart, updateItemQty } from '../../../redux/actions/cartActions'


export default function CartItem ({ item }){
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleRemove = (id)=> {
    dispatch(removeFromCart(id))
  }

  const handleItemQty = (id, qty)=> {
    dispatch(updateItemQty(id, qty))
  }

  return (
    <Grow  in > 
      <Card className={classes.card} elevation={4}>
        <CardMedia image={item.imageUrl} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="h6">${item.price}</Typography>
        </CardContent>
        <CardActions className={classes.cartActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small" onClick={()=> handleItemQty(item._id, item.qty-1)}>-</Button>
            <Typography>&nbsp;{item.qty}&nbsp;</Typography>
            <Button type="button" size="small" onClick={()=> handleItemQty(item._id, item.qty+1)}>+</Button>
          </div>
          <Button variant="contained" type="button" color="secondary" onClick={() => handleRemove(item._id)}>Remove</Button>
        </CardActions>
      </Card>
    </Grow>
  )
}

