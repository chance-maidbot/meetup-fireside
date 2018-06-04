// @flow
import { GraphQLString } from 'graphql';

export const whatIsMyPurpose: Object = {
  name: 'whatIsMyPurpose',
  type: GraphQLString,
  description: `Welcome to the club, pal.`,
  resolve: async () => 'You pass the butter.'
};
