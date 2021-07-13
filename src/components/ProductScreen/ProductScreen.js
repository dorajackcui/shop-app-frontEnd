import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyle from './styles'

import { addToCart } from '../../redux/actions/cartActions'
import { getProductById } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux' 


 
export default function ProductScreen() {
  const classes = useStyle()
  const dispatch = useDispatch()

  const {id} = useParams()
  const product = useSelector(state => state.getProduct)
  // console.log(id)

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch])
 

  const handleClick = ()=> {
    dispatch(addToCart(product._id, 1))
  }

  return (
    <Card className={classes.root}>
      <div className={classes.toolbar} />
      <CardMedia className={classes.media} image={product.imageUrl} src={product.name}/>
      <CardContent >
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price} 
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
  
      <CardActions disableSpacing className={classes.cardActions} >
        <IconButton aria-label="add to cart" onClick={handleClick} >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}
