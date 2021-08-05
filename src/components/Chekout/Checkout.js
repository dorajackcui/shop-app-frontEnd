import React, { useState } from 'react'
import { Typography, Paper, Step, Stepper, StepLabel, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyle from './styles'

import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'


const steps = ['Shipping address', 'Payment details']


export default function Checkout() {
  const classes = useStyle()
  const [activeStep, setActiveStep] = useState(0)
  
  
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
  
  const onSubmit = (data)=> {
    console.log(data)
    nextStep()
  }

  const Confirmation = ()=> (
    <div>
      Confirmation
    </div>
  )
  
  const Form = () => activeStep === 0 
    ? <AddressForm  onSubmit={onSubmit} />
    : <PaymentForm backStep={backStep}/>

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center" gutterBottom>  
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  )
}
