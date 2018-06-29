// @flow
import { GraphQLNonNull, GraphQLBoolean, GraphQLObjectType } from 'graphql';

export const ExistentialCrisisOutputType: GraphQLObjectType = new GraphQLObjectType(
  {
    name: 'ExistentialCrisisOutput',
    description: 'Welcome to the club, pal.',
    fields: () => ({
      ohMyGod: {
        type: new GraphQLNonNull(GraphQLBoolean),
        resolve: root => {
          return root.ohMyGod;
        }
      }
    })
  }
);
