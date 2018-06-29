// @flow
import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

export const ButterInputType: GraphQLInputObjectType = new GraphQLInputObjectType(
  {
    name: 'PassButterInput',
    description: 'Pass that butter',
    fields: () => ({
      robotid: {
        type: new GraphQLNonNull(GraphQLID)
      },
      robotname: {
        type: new GraphQLNonNull(GraphQLString)
      },
      fromperson: {
        type: GraphQLString
      },
      toperson: {
        type: new GraphQLNonNull(GraphQLString)
      }
    })
  }
);

export const ButterOutputType: GraphQLObjectType = new GraphQLObjectType({
  name: 'ButterOutput',
  description: 'All the butter passing',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: root => {
        return root.id;
      }
    },
    robotid: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: root => {
        return root.robotid;
      }
    },
    robotname: {
      type: GraphQLString,
      resolve: root => {
        return root.robotname;
      }
    },
    fromperson: {
      type: GraphQLString,
      resolve: root => {
        return root.fromperson;
      }
    },
    toperson: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: root => {
        return root.toperson;
      }
    }
  })
});
