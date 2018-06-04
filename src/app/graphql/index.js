// @flow
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { whatIsMyPurpose } from 'graphql/resolvers/whatIsMyPurpose';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    whatIsMyPurpose
  })
});

// const mutationType: GraphQLObjectType = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: () => ({})
// });

export const schema: GraphQLSchema = new GraphQLSchema({
  query: queryType
  // mutation: mutationType
});
