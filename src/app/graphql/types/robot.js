// @flow
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export const RobotInputType: GraphQLInputObjectType = new GraphQLInputObjectType(
  {
    name: 'RobotInput',
    description: 'Add Robots to the system',
    fields: () => ({
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      maker: {
        type: new GraphQLNonNull(GraphQLString)
      },
      updatedat: {
        type: GraphQLDateTime
      },
      deleted: {
        type: GraphQLBoolean
      }
    })
  }
);

export const RobotOutputType: GraphQLObjectType = new GraphQLObjectType({
  name: 'RobotOutput',
  description: 'Robot information',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: root => {
        return root.id;
      }
    },
    name: {
      type: GraphQLString,
      resolve: root => {
        return root.name;
      }
    },
    maker: {
      type: GraphQLString,
      resolve: root => {
        return root.maker;
      }
    },
    updatedat: {
      type: GraphQLDateTime,
      resolve: root => {
        return root.updatedAt;
      }
    },
    deleted: {
      type: GraphQLBoolean,
      resolve: root => {
        return root.deleted;
      }
    }
  })
});
