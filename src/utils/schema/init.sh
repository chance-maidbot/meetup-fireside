
echo '--- local cassandra set up ---'

echo '---reading env variables---'
. ../../.env

timestamp() {
  date +"%Y-%m-%d_%H-%M-%S"
}

if [ -z "$CQL_INIT_HOST" ]; then
    echo ERROR: "CQL_INIT_HOST not set"
    exit 2
fi

echo '########## CQL_INIT_HOST IS: ' $CQL_INIT_HOST '##########'
echo '########## THE TIME IS: ' $(timestamp) '##########'
echo '--- init DB ---'
cqlsh -f 'schema.cql' $CQL_INIT_HOST 9042 --username $CASSANDRA_USER --password $CASSANDRA_PASSWORD
echo '--- initialized ---'

echo '--- seed DB ---'
echo '--- seeded ---'
