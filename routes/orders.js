"use strict";
const express = require("express");
const router = express.Router();
const twilio = require("twilio");
const accountSid = "AC77c1b54f9cfdf8c5f72f399fdbfa93e4"; // Your Account SID from www.twilio.com/console
const authToken = "dd62dde8164edf63f0fca6659e3ac88e"; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

function textRestaurant(phone, time) {
  console.log(phone);

  client.messages
    .create({
      body: `A new order has been placed`,
      to: `#`, // NUMBER WE WANT TO TEXT
      from: "+13342471008" // THIS IS OUR TWILIO SERVER NUMBER
    })
    .then(message => console.log(message.sid));
}
