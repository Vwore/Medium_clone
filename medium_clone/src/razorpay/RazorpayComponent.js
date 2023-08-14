import React, { useState } from 'react';
import Razorpay from 'razorpay';

const RazorpayComponent = () => {
  const [orderId, setOrderId] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [signature, setSignature] = useState('');

  
  const handlePayment = async () => {
    // Make a request to your backend to create an order
    const response = await fetch('/create-razorpay-order', {
      method: 'POST',
    });

    const data = await response.json();

    const options = {
      key: 'rzp_test_bcBvcsCAo0QnhI',
      order_id: 'order_MP7O7XxE7O7WpF',
      name: 'Your Company Name',
      description: 'Test Transaction',
      amount: data.amount,
      handler: (response) => {
        setOrderId(response.razorpay_order_id);
        setPaymentId(response.razorpay_payment_id);
        setSignature(response.razorpay_signature);
        
        // Handle payment confirmation on the server
        confirmPayment(response);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#F37254',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const confirmPayment = async (response) => {
    // Make a request to your backend to confirm the payment
    const confirmResponse = await fetch('/confirm-razorpay-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: response.razorpay_order_id,
        paymentId: response.razorpay_payment_id,
        signature: response.razorpay_signature,
      }),
    });

    const confirmData = await confirmResponse.json();

    if (confirmData.success) {
      // Payment confirmed
    } else {
      // Payment not confirmed
    }
  };

  return (
    <div>
      <h2>Razorpay Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default RazorpayComponent;
