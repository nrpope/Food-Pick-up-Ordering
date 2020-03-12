"use strict";

const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const client = new twilio(process.env.TWILIO_USER, process.env.TWILIO_AUTHKEY);

function textCustomer(phone, time) {
  console.log(phone);

  client.messages
    .create({
      body: `Your food will be ready in ${time} minutes! Thank you for ordering from LightBistro. Bueno Appetitio.`,
      to: `${phone}`, // NUMBER WE WANT TO TEXT
      from: "+13342471008" // THIS IS OUR TWILIO SERVER NUMBER
    })
    .then(message => console.log(message.sid));
}

function textCustomerPickup(phone) {
  console.log(phone);
  client.messages
    .create({
      body: `Your order is now ready for pickup! Thanks for ordering from LightBistro.`,
      to: `${phone}`,
      from: "+13342471008" // THIS IS OUR TWILIO SERVER NUMBER
    })
    .then(message => console.log(message.sid));
}

function textRestaurant(phone, time) {
  console.log(phone);

  client.messages
    .create({
      body: `A new order has been placed
      ${order}
      please respond with how long in minutes this will take.`,
      to: `#`, // NUMBER WE WANT TO TEXT
      from: "+13342471008" // THIS IS OUR TWILIO SERVER NUMBER
    })
    .then(message => console.log(message.sid));
}
