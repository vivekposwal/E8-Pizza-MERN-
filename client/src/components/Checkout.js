import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Loading from "./Loading";
import Error from "./Error";
import Success from "./Success";
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal));
    console.log(token);
  };
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subtotal * 100}
        currency="INR"
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LBwbaSGA7Pwughp3ZKMUvDuB0kPi2Et8Fl1wFn4RRkNBWGTNi4ED6QpFrjxh04JjuyIpi43JH053xroPccxB0SR00M8PUOigQ"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
