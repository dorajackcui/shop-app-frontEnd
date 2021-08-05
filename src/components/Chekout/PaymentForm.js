import React from 'react'
import { Typography, Divider, Button} from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import useStyle from './styles'

import Reviews from './Reviews'

export default function PaymentForm({backStep}) {

  const classes= useStyle() 
  const stripePromise = loadStripe('...')

  return (
    <>
      <Reviews/>
      <Divider className={classes.divider}/>
      <Typography variant="h6" gutterBottom style={{margin:"20px 0"}}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({elements, stripe})=> (
            <form>
              <CardElement />
              <br/><br/>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <Button variant="outlined" onClick={backStep}>Back</Button>
                <Button type="submit" variant="contained" color="primary" disabled={!stripe}> 
                  Pay
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  )
}
