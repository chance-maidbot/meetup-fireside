// @flow
import { types } from 'cassandra-driver';

const Robot = {
  findAll: async (root: Object, args: Object, ctx: Object) => {
    const query = `SELECT id, name, maker, updatedAt, deleted FROM pancakes.robot;`;
    const params = [];
    try {
      const results = await ctx.db.execute(query, params, {
        prepare: true
      });
      if (results.rows && results.rows.length) {
        return results.rows;
      } else {
        throw new Error('no rows found');
      }
    } catch (e) {
      throw e;
    }
  },
  findOne: async (root: Object, args: Object, ctx: Object) => {
    const query = `SELECT id, name, maker, updatedAt, deleted FROM pancakes.robot WHERE id = ?`;
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
  buildARobot: async (root: Object, args: Object, ctx: Object) => {
    const params = {
      id: types.TimeUuid.now(),
      name: args.robotInput.name,
      maker: args.robotInput.maker,
      updatedAt: args.robotInput.updatedAt ? args.robotInput.updatedAt : null,
      deleted: args.robotInput.deleted ? args.robotInput.deleted : false
    };

    const query = `
      INSERT INTO
        pancakes.robot (
         id, name, maker, updatedAt, deleted
        )
        VALUES (
        :id, :name, :maker, :updatedAt, :deleted
      )`;
    try {
      if (args.robotInput) {
        const results = await ctx.db.execute(query, params, {
          prepare: true
        });
        if (results) {
          return params;
        }
      }
    } catch (e) {
      throw e;
    }
  },
  existentialCrisis: async (
    root: Object,
    args: Object,
    ctx: Object
  ): Promise<any> => {
    const query: string = `
        UPDATE
          pancakes.robot
        SET
          deleted = true
        WHERE
          id = ?
        ;`;
    const params: Array<any> = [args.id];
    try {
      const results: Object = await ctx.db.execute(query, params, {
        prepare: true
      });
      if (results) {
        return {
          ohMyGod: true
        };
      }
    } catch (e) {
      throw e;
    }
  }
};

export default Robot;
