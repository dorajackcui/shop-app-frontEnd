import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import Product from './Product/Product'
import useStyle from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'


export default function Products() {
  const classes=useStyle()
  const dispatch = useDispatch()

  const products = useSelector(state => state.getProducts)
  // console.log(products)
  // products.length = 0

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const NoProduct = () => (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <CircularProgress />
    </main>
  )

  

  return (
    !products.length ? <NoProduct /> : (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map(product => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
            </Grid>
          ))}
        </Grid>
      </main>
  ))
}
