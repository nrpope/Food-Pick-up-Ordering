const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM order_items;`)
      .then(data => {
        //console.log('data.rows', data.rows);
        const order_items = data.rows;
        res.json({ order_items });
        //console.log("res.json",  res.json({ users }));
        console.log(data);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });




  router.post("/add/:item_id", (req, res) => {
    let order_id = 1;
    console.log('order_id is:', order_id);
    db.query(`INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, 1, 100)`,
    [order_id, req.params.item_id])

    .then(data => {

      db.query(`SELECT items.name, quantity, order_items.price
                FROM order_items
                JOIN items ON items.id = item_id
                JOIN orders ON orders.id = order_id
                WHERE order_id = $1`, [order_id] )

      .then( data => {
        const order_items = data.rows;
        res.json({ order_items });
      })

      console.log(data);
    })
    .catch(err => {
      console.log("log in catch", err);
      res
        .status(500)
        .json({ error: err.message });
    });
    //to do 2: figure out order id, use hard code
    //to do 3: low: if no order id works, make a new order
    //to do 1: insert order items
  });




    router.post("/remove/:item_id", (req, res) => {
    let order_id = 1;
    //let item_id = 5;
    db.query(`UPDATE order_items
              SET quantity = quantity - 1
              WHERE order_id = $1
              AND item_id = $2
              AND quantity > 0
               `,[order_id, req.params.item_id])
      .then(data => {
      console.log('data.rows AFTER REMOVE', data.rows);
      const order_items = data.rows;
      res.json({ order_items });
      //console.log("res.json",  res.json({ users }));
      console.log(data);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });


  //console.log("router", router);
  return router;
};
