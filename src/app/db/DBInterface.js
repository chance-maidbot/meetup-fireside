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

    // Look, this is a demo. I'm lazy. Don't do this in prod. Use your env variables like good little devs.
    this.authProvider = new cassandra.auth.PlainTextAuthProvider(
      'cassandra',
      'cassandra'
    );

    this.client = new cassandra.Client({
      contactPoints,
      keyspace: this.keyspace,
      authProvider: this.authProvider
    });
  }

  async shutdown() {
    console.log('Shutting down');
    return this.client.shutdown();
  }
}
