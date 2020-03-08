const { Pool } = require('pg')


const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});

// Get all of the categories


const getAllCategories = function() {
  pool.query(`
  SELECT * FROM categories
  `)
  .then(res => {
    console.log('inside of promise')
    console.log(res)
  });
}

exports.getAllCategories = getAllCategories;
