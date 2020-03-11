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
    // req from server looks like this:
    //req.params { item_id: '2' }
    //req.body { order_id: '42', quantity: '999' }
    const { order_id, quantity } = req.body;
    const { item_id } = req.params;

    console.log('req.params', req.params);
    console.log('req.body', req.body);

    // order_items table: id |  name   | order_id | item_id | quantity | price
    // const insertStr = `INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, 1, 100)`,
    const qStrItem = `select price from items where items.id = ($1)`;
    const itemVals = [item_id];

    db.query(qStrItem, itemVals)
      // { rows: [...] }
      .then(({ rows: item}) => {
        console.log('res.rows!!!!!', item[0].price);
        const price = item[0].price;

        const newOrderItemQry = `INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, $3, $4) returning id`;
        const orderItemVals = [order_id, item_id, quantity, price];

        db.query(newOrderItemQry, orderItemVals)
          .then(({rows: orderItem}) => {
            console.log('res from order items insert!!! ', orderItem[0].id);
            res.json({ orderItemId: orderItem[0].id})
          })

      })

  });

  // router.post("/add/:item_id", (req, res) => {
  //   let order_id = 1;
  //   //console.log('order_id is:', order_id);
  //   db.query(`INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, 1, 100)`,
  //   [order_id, req.params.item_id])

  //   .then(data => {

  //     db.query(`SELECT items.name, quantity, order_items.price
  //               FROM order_items
  //               JOIN items ON items.id = item_id
  //               JOIN orders ON orders.id = order_id
  //               WHERE order_id = $1`, [order_id] )

  //     .then( data => {
  //       const order_items = data.rows;
  //       res.json({ order_items });
  //     })

  //     //console.log(data);
  //   })
  //   .catch(err => {
  //     //console.log("log in catch", err);
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
  //   //to do 2: figure out order id, use hard code
  //   //to do 3: low: if no order id works, make a new order
  //   //to do 1: insert order items
  // });




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
      //console.log('data.rows AFTER REMOVE', data.rows);
      const order_items = data.rows;
      res.json({ order_items });
      //console.log("res.json",  res.json({ users }));
      //console.log(data);
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
