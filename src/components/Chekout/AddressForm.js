import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CustomTextField/CustomTextField'

export default function AddressForm({onSubmit}) {
  const methods = useForm()


  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name"  />
            <FormInput required name="lastName" label="Last Name"  />
            <FormInput required name="address1" label="Address"  />
            <FormInput required name="email" label="Email"  />
            <FormInput required name="city" label="City"  />
            <FormInput required name="zip" label="Postal Code"  />
          </Grid>
          <br/>
          <br/>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button component={Link} to="/cart" variant="outlined" color="secondary">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary" >Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}
