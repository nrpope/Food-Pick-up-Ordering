const express = require("express");
const router = express.Router();
const textRestaurant = require("../lib/SMS");

module.exports = db => {
  router.get("/orders", (req, res) => {
    db.query(`SELECT * FROM order_items;`)
      .then(data => {
        textRestaurant();
        //console.log('data.rows', data.rows);
        const order_items = data.rows;
        res.json({ order_items });
        //console.log("res.json",  res.json({ users }));
        console.log(data);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
