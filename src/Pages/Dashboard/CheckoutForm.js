import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {_id, price, email, quantities} = order;
        useEffect( () =>{
            fetch('https://whispering-river-72827.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify({price, quantities})
            })
            .then( res => res.json())
            .then( data =>{
                if( data?.clientSecret ){
                    setClientSecret(data.clientSecret);
                }
            })
        },[price, quantities])

    const handleSubmit = async(event) =>{
        event.preventDefault()
        if( !stripe || !elements){
            return 
        }
        const card = elements.getElement(CardElement);
        if( card === null ){
            return 
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        }) 
        setCardError(error?.message || '');
        setSuccess('')
        setProcessing(true)
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: email,
                },
              },
            },
          );
          if(intentError){
              setCardError(intentError?.message)
              setProcessing(false)
          }else{
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! Your Payment is completed')

            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://whispering-river-72827.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(payment)
            }).then(res =>res.json())
            .then( data =>{
                setProcessing(false);
                console.log(data);
            })
          }
    }
  return (
      <>
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
            style: {
                base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                    color: "#aab7c4",
                },
                },
                invalid: {
                color: "#9e2146",
                },
            },
            }}
        />
        <button className="btn btn-success btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret}>
            Pay
        </button>
        </form>
        {
            cardError && <p className="text-red-500">{cardError}</p>
        }
        {
            success && <div className="text-green-500">
                    <p>{success} </p>
                </div>
        }
      </>
  );
};

export default CheckoutForm;
