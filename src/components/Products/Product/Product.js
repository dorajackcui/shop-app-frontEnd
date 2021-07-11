import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyle from '../styles'

import { addToCart } from '../../../redux/actions/cartActions'
import { useDispatch } from 'react-redux' 

export default function Product({product}) {
  const classes = useStyle()
  const dispatch = useDispatch()

  const handleClick = ()=> {
    dispatch(addToCart(product._id, 1))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/product/${product._id}`} >
        <CardMedia className={classes.media} image={product.imageUrl} title={product.name} component="img" />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing className={classes.cardActions} >
        <IconButton aria-label="add to cart" onClick={handleClick} >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}
