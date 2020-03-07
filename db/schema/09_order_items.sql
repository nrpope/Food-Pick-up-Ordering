DROP TABLE IF EXISTS order_items CASCADE;
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  order_id INTEGER,
  item_id INTEGER,
  quantity INTEGER,
  price INTEGER
);
