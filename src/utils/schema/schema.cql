
CREATE KEYSPACE IF NOT EXISTS pancakes WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1 };

-- robot tables
DROP TABLE IF EXISTS pancakes.robot;
CREATE TABLE pancakes.robot (
  id TIMEUUID,
  name TEXT,
  maker TEXT,
  updatedAt TIMESTAMP,
  deleted BOOLEAN,
  PRIMARY KEY (id)
);

-- butter tables
DROP TABLE IF EXISTS pancakes.butter;
CREATE TABLE pancakes.butter (
  id TIMEUUID,
  robotId TIMEUUID,
  robotName TEXT,
  fromPerson TEXT,
  toPerson TEXT,
  PRIMARY KEY ((id, robotId))
);
