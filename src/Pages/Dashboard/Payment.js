import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4kcwAkijj2fZ5o4lxhXihGngAIkUegzZ4YpKcTknhMtkC41biz3E52ndi5zYtnwcBgFXlQAcCN32K0itiJ4A8H00TOe1efbQ"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://whispering-river-72827.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <h2 class="card-title">Please Pay For: {order.product}</h2>
          <p>Please Pay ${order.price * order.quantities}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order ={order}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
