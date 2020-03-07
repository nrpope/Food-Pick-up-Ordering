DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  category_Id VARCHAR(255),
  price INTEGER,
  popularity INTEGER,
  time_to_complete TIMESTAMP
  description VARCAR(255)
);

