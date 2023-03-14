const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const Order = require("../modals/orderModel");

const stripe = require("stripe")(
  "sk_test_51LBwbaSGA7PwughpV0vDhKdbEXIps0BtBrAok4QvB8fyvGSnOoPXVh48cyl56s1O1xkgu8XRdN4aTSgEm69XF37U00z6GLwjyZ"
);
router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: subtotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        payment_method_types: ["card"],
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const neworder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        //userid: currentUser.id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          picode: token.card.address_zip,
        },
        transectionId: payment.id,
      });
      console.log(neworder);
      neworder.save();
      res.send("Payment Success");
    } else {
      res.send("Payment Faild");
    }
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { email } = req.body;
  try {
    const orders = await Order.find({ email }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

module.exports = router;
