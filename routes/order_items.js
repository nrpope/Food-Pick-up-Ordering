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
  //console.log("router", router);
  return router;
};
