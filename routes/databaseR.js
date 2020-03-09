/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM categories;`)
      .then(data => {
        //console.log('data.rows', data.rows);
        // const categories = data.rows;
        // res.json({ categories });
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
