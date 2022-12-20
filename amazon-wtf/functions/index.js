const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Lo4umBdWWTDjQJZo58iGziPY3Oq00Xo5Ok79x2PU3dTNq57TxwSiFaqBsb55uB3rNf0JIwuFCsI26kDjbV3DVwL00TARVJZ1y')


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
});

// OK - Created
response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/wtf-74642/us-central1/api

