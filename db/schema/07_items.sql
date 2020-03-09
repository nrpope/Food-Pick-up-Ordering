DROP TABLE IF EXISTS items CASCADE;
CREATE TABLE items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  category_id INTEGER REFERENCES categories(id),
  price INTEGER,
  popularity INTEGER,
  time_to_complete INTEGER,
  description VARCHAR(1000)
);

