// todo: make, edit order  - GET /
// todo: submit order - POST /orders
// todo: check on an order

const express = require("express");
const router = express.Router();

module.exports = db => {

// example: http://localhost:8080/br

  router.get("/", (req, res) => {
    res.json({ test: "TEST"
  })
});


  //add orders to orders table to be submitted
  // example: http://localhost:8080/br/orders
  router.post("/orders", (req, res) => {
    let order_id = 10;
    let name = 'John Smith';
    db.query(`select count(*) AS numItems, sum(order_items.price*order_items.quantity) AS totalPrice, sum(time_to_complete) AS totalTime FROM order_items JOIN items ON item_id = items.id WHERE order_id = $1 AND quantity > 0`
    ,
      [order_id]
    )
      .then(data => {

        const {numitems, totalprice, totaltime} = data.rows[0];
        // console.log('this is data!!!!!!', data.rows[0].numitems);
        // console.log('this is data!!!!!!', data.rows[0].totalprice);
        // console.log('this is data!!!!!!', data.rows[0].totaltime);
        //'2020-03-10 18:10:10'
        db.query(  `INSERT INTO orders (name, total_price, start_time, end_time, number_of_items, completed) VALUES ($1, $2, NOW(), NOW() + '${totaltime} minute'::interval, $3, false)`, [name, totalprice, numitems])

          .then(data => {
            const orders = data.rows;
            res.json({ orders });
          })
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  // db.query(`SELECT *
  //           FROM orders`)
  //   .then(data => {
  //     const orders = data.rows;
  //     res.json({ orders });
  //   })
  //   .catch(err => {
  //     res.status(500).json({ error: err.message });
  //   });
  // });

  //display a single order
  //example: http://localhost:8080/br/orders/1
  router.get("/orders/:order_id", (req, res) => {
    //console.log("req param looks like", req.params.order_id);
    let order_id = req.params.order_id;
    db.query(
      ` SELECT *
        FROM orders
        WHERE orders.id = $1`,
        [order_id]
    )
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
