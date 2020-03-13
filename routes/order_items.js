const express = require("express");
const router = express.Router();


module.exports = db => {
  let order_id = 10;


  //example : http://localhost:8080/api/order

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
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:order_id", (req, res) => {
    db.query(`select * from order_items where id = $1;`, [req.params.order_id])
      .then(data => {
        console.log(data.rows);
        res.json({ data: data.rows });
      })
      .catch(err => err);
  });

  //example: http://localhost:8080/api/order/add/5

  router.post("/add/:item_id", (req, res) => {
    //let order_id = 10;
    let item_id = req.params.item_id;
    console.log('req.body !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',req.body)

    db.query(`INSERT INTO order_items (order_id, item_id, quantity, price)
    VALUES ($1, $2, 1, 200)`,[order_id, item_id])

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
        })


    .catch(err => {
      res.status(500).json({ error: err.message });
    });
// });


  //   // req from server looks like this:
  //   //req.params { item_id: '2' }
  //   //req.body { order_id: '42', quantity: '999' }
  //   const { order_id, quantity } = req.body;
  //   const { item_id } = req.params;

  //   console.log("req.params", req.params);
  //   console.log("req.body", req.body);

  //   // order_items table: id |  name   | order_id | item_id | quantity | price
  //   // const insertStr = `INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, 1, 100)`,
  //   const qStrItem = `select price from items where items.id = 4`;
  //   const itemVals = [item_id];

  //   db.query(qStrItem)
  //     // { rows: [...] }
  //     .then(({ rows: item }) => {
  //       const price = item[0].price;

  //       const newOrderItemQry = `INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, $3, $4) returning id`;
  //       const orderItemVals = [order_id, item_id, quantity, price];

  //       db.query(newOrderItemQry, orderItemVals).then(({ rows: orderItem }) => {
  //         console.log("res from order items insert!!! ", orderItem[0].id);
  //         res.json({ orderItemId: orderItem[0].id });
  //       });
  //     });
  // });

  // router.post("/add/:item_id", (req, res) => {
  //   // req from server looks like this:
  //   //req.params { item_id: '2' }
  //   //req.body { order_id: '42', quantity: '999' }
  //   const { order_id, quantity } = req.body;
  //   const { item_id } = req.params;
  //   console.log("req.params", req.params);
  //   console.log("req.body", req.body);
  //   // order_items table: id |  name   | order_id | item_id | quantity | price
  //   // const insertStr = `INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, 1, 100)`,
  //   const qStrItem = `select price from items where items.id = ($1)`;
  //   const itemVals = [item_id];
  //   db.query(qStrItem, itemVals)
  //     // { rows: [...] }
  //     .then(({ rows: item }) => {
  //       console.log("res.rows!!!!!", item[0].price);
  //       const price = item[0].price;
  //       const newOrderItemQry = `INSERT INTO order_items (order_id, item_id, quantity, price) VALUES ($1, $2, $3, $4) returning id`;
  //       const orderItemVals = [order_id, item_id, quantity, price];
  //       db.query(newOrderItemQry, orderItemVals).then(({ rows: orderItem }) => {
  //         console.log("res from order items insert!!! ", orderItem[0].id);
  //         res.json({ orderItemId: orderItem[0].id });
  //       });
  //     });
  });

  // example: http://localhost:8080/api/order/remove/5

  router.post("/remove/:item_id", (req, res) => {

    //let item_id = 5;
    let item_id = req.params.item_id;
    db.query(
      `DELETE FROM order_items
        WHERE id = (SELECT id FROM order_items
                  WHERE order_id = $1
                  AND item_id = $2
                  ORDER BY id desc LIMIT 1)`,
      [order_id, item_id]
    )
      .then(data => {
        const order_items = data.rows;
        res.json({ order_items });

      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  //console.log("router", router);
  return router;
};
