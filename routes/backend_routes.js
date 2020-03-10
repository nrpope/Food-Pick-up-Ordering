// todo: make, edit order  - GET /
// todo: submit order - POST /orders
// todo: check on an order

const express = require('express');
const router  = express.Router();


module.exports = db => {

  //add orders to orders table
  router.post("/orders", (req, res) => {
    let order_id = 1;
    let name = 'TEST ORDER3'
    db.query(`INSERT INTO orders (name, total_price, start_time, end_time, number_of_items, completed) VALUES ($1, 1000, NOW(), '2020-03-10 18:10:10', 2, true)`, [name])
      .then(data => {

        const orders = data.rows;
        res.json({ orders });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //display all orders from orders table
  router.get("/", (req, res) => {
    db.query(`SELECT *
              FROM orders`)
      .then(data => {
        const orders = data.rows;
        res.json({ orders });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
    });

  //display a single order
  router.get("/orders/:order_id", (req, res) => {
    console.log('req param looks like', req.params.order_id)
    db.query(`SELECT *
              FROM orders
              WHERE orders.id = $1`,
              [req.params.order_id])
      .then(data => {
        const orders = data.rows;
        res.json({ orders });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });

  });

return router;
};


