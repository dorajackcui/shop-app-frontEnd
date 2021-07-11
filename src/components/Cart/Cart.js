import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyle from './styles'

export default function Cart() {

  const classes = useStyle() 
  const isEmpty = true

  const EmptyCard = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart, buy something !!</Typography>

  )

  const FilledCard = () => (
    <>
      <Grid container spacing={3}>
        
      </Grid>
    </>
  )

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" >
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCard /> : <FilledCard /> }
    </Container>
  )
}
