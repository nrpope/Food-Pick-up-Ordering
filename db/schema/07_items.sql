DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  menu_category VARCHAR(255),
  price INTEGER,
  popularity INTEGER,
  start_time NOW(),
  time_to_complete TIMESTAMP
);

