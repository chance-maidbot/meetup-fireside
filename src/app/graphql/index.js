// @flow
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { whatIsMyPurpose } from 'graphql/resolvers/whatIsMyPurpose';
import {
  robots,
  robot,
  buildARobot,
  existentialCrisis
} from 'graphql/resolvers/robots';
import {
  passedButter,
  onePassedButter,
  robotButterPassing,
  passTheButter
} from 'graphql/resolvers/butter';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    whatIsMyPurpose,
    robots,
    robot,
    passedButter,
    onePassedButter,
    robotButterPassing
  })
});

const mutationType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    buildARobot,
    passTheButter,
    existentialCrisis
  })
});

export const schema: GraphQLSchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
