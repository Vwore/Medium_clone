import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe("pk_test_51NfLtFSDKgByOg5mqVmroVaXOoiIwKrGrMsNKlRdXYr0Peq3bGZfd1i8vyZQEAhw7IdwA6kzROETvkmjt8eQJium00T0WIQg23")

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
    <PaymentForm />
</Elements>
   )
}

export default Stripe