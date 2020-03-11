"use strict";
const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const accountSid = process.env.TWILIO_USER;
const authToken = process.env.TWILIO_AUTHKEY;
const client = new twilio(accountSid, authToken);

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
