
echo '--- local scylla/cassandra dump ---'

echo '---reading env variables---'
. ../../.env


if [ -z "$CQL_INIT_HOST" ]; then
    echo ERROR: "CQL_INIT_HOST not set"
    exit 2
fi

timestamp() {
  date +"%Y-%m-%d_%H-%M-%S"
}

mkdir ../logs
echo '--- drop keyspace from ' $CQL_INIT_HOST ' ' $(timestamp)' ---'
cqlsh -f 'dump.cql' $CQL_INIT_HOST 9042 --username $CASSANDRA_USER --password $CASSANDRA_PASSWORD
echo '--- dumped successfully ---'
