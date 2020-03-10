DROP TABLE IF EXISTS order_items CASCADE;
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id),
  item_id INTEGER REFERENCES items(id),
  quantity INTEGER,
  price INTEGER
);
