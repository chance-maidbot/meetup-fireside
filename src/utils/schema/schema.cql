
CREATE KEYSPACE IF NOT EXISTS pancakes WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1 };

-- robot tables
DROP TABLE IF EXISTS pancakes.butter;
CREATE TABLE pancakes.butter (
  id TIMEUUID,
  name TEXT,
  maker TEXT,
  PRIMARY KEY (id)
);

-- butter tables
DROP TABLE IF EXISTS pancakes.butter;
CREATE TABLE pancakes.butter (
  id TIMEUUID,
  name TEXT,
  fromPerson TEXT,
  toPerson TEXT,
  PRIMARY KEY (id)
);
