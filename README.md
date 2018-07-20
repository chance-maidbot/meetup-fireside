# Fireside Code

## slides

### Have the following on your host machine:

node & npm
gatsby `npm i -g gatsby-cli`

### To Run slides:

```sh
cd slides/
npm i && gatsby develop
```

### Have the following on your host machine:

docker
cassandra and cqlsh

### To Run app:

```sh
cd src/
docker-compose up
```

### After it spools up, in a separate terminal window:

```sh
cd utils/schema/
sh ./init.sh
```

This initializes the database.

## To View App

In browser, head to:
http://localhost:3000/graphiql

Boom.

More resources:
https://graphql.org

Issues?
Drop me a ticket or a PR. PRs preferred, yo.
