// @flow
import cassandra from 'cassandra-driver';

type DBInterfaceSettings = {|
  host: string,
  port: string,
  keyspace: string
|};

export default class DBInterface {
  host: Array<string>;
  port: ?string;
  keyspace: ?string;
  client: Object;
  constructor(settings: DBInterfaceSettings) {
    this.host = settings.host.split(',');
    this.port = settings.port;
    this.keyspace = settings.keyspace;

    const contactPoints = this.host.map((host: string) => {
      console.log(
        `Cassandra: host ${host}:${this.port || 'CASSANDRA_PORT NOT SET'}`
      );
      return `${host}:${this.port || 'CASSANDRA_PORT NOT SET'}`;
    });

    this.client = new cassandra.Client({
      contactPoints,
      keyspace: this.keyspace
    });
  }

  async shutdown() {
    console.log('Shutting down');
    return this.client.shutdown();
  }
}
