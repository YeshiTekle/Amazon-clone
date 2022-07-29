const functions = require("firebase-functions");


const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LLChKFSqQCE8plQgF1hr6v5hGG8aa7KzR0uZmFGR4vMtfA0eLn1UFOZFfZ4lMdjiRE4Z7OQHBb8UocLaTsSwjhQ004RwPaMyi"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/Evangadi", (request, response) => response.status(200).send("Evangadi"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});



// - Listen command
exports.api = functions.https.onRequest(app);






// (http://localhost:5001/react-6fc20/us-central1/api).