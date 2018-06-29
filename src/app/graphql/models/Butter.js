// @flow
import { types } from 'cassandra-driver';

const Butter = {
  findAll: async (root: Object, args: Object, ctx: Object) => {
    const query = `SELECT id, robotid, robotname, fromperson, toperson FROM pancakes.butter;`;
    const params = [];
    try {
      const results = await ctx.db.execute(query, params, {
        prepare: true
      });
      if (results.rows && results.rows.length) {
        console.log(results.rows);
        return results.rows;
      } else {
        throw new Error('no rows found');
      }
    } catch (e) {
      throw e;
    }
  },
  findButterByPassingId: async (root: Object, args: Object, ctx: Object) => {
    const query = `SELECT id, robotid, robotname, fromperson, toperson FROM pancakes.butter WHERE id = ?;`;
    const params = [args.id];
    try {
      const results = await ctx.db.execute(query, params, {
        prepare: true
      });
      if (results.rows && results.rows.length) {
        return results.rows[0];
      } else {
        throw new Error('no rows found');
      }
    } catch (e) {
      throw e;
    }
  },
  findButterByRobotId: async (root: Object, args: Object, ctx: Object) => {
    const query = `SELECT id, robotid, robotname, fromperson, toperson FROM pancakes.butter WHERE robotid = ?;`;
    const params = [args.robotId];
    try {
      const results = await ctx.db.execute(query, params, {
        prepare: true
      });
      if (results.rows && results.rows.length) {
        return results.rows[0];
      } else {
        throw new Error('no rows found');
      }
    } catch (e) {
      throw e;
    }
  },
  passTheButter: async (root: Object, args: Object, ctx: Object) => {
    const params = {
      id: types.TimeUuid.now(),
      robotid: args.butterInput.robotid,
      robotname: args.butterInput.robotname,
      fromperson: args.butterInput.fromperson
        ? args.butterInput.fromperson
        : null,
      toperson: args.butterInput.toperson
    };

    const query = `
      INSERT INTO
        pancakes.butter (
         id, robotid, robotname, fromperson, toperson
        )
        VALUES (
        :id, :robotid, :robotname, :fromperson, :toperson
      )`;
    try {
      if (args.butterInput) {
        const results = await ctx.db.execute(query, params, {
          prepare: true
        });
        if (results) {
          console.log(results);
          return params;
        }
      }
      return null;
    } catch (e) {
      throw e;
    }
  }
};

export default Butter;
