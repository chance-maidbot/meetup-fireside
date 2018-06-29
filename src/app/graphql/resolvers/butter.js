// @flow
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

import { ButterInputType, ButterOutputType } from 'graphql/types/butter';

import Butter from 'graphql/models/Butter';

export const passedButter: Object = {
  name: 'passedButter',
  type: new GraphQLList(ButterOutputType),
  description: 'All the butter that all the robots have passed',
  resolve: async (root, args, ctx) => {
    console.log('all the butter', args);
    return Butter.findAll(root, args, ctx);
  }
};

export const onePassedButter: Object = {
  name: 'onePassedButter',
  type: ButterOutputType,
  description: 'Find a single butter passing',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, ctx, info) => {
    console.log('butterId', args);
    return Butter.findButterByPassingId(root, args, ctx);
  }
};

export const robotButterPassing: Object = {
  name: 'onePassedButter',
  type: new GraphQLList(ButterOutputType),
  description: 'find all the butter activities of a single robot',
  args: {
    robotId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, ctx, info) => {
    console.log('butterRobotId', args);
    return Butter.findButterByRobotId(root, args, ctx);
  }
};

export const passTheButter: Object = {
  name: 'passTheButter',
  description: 'You pass the Butter',
  type: ButterOutputType,
  args: {
    butterInput: { type: new GraphQLNonNull(ButterInputType) }
  },
  resolve: async (root, args, ctx) => {
    console.log('robotBuilding', args);
    return Butter.passTheButter(root, args, ctx);
  }
};

// export const updateActive: Object = {
//   name: 'UpdateActive',
//   description: 'update active flag for robot.',
//   type: RobotActiveOutputType,
//   args: {
//     robot_id: {
//       type: new GraphQLNonNull(GraphQLID)
//     },
//     property_id: {
//       type: new GraphQLNonNull(GraphQLID)
//     },
//     active: {
//       type: GraphQLBoolean
//     }
//   },
//   resolve: async (root, args, ctx) => {
//     logger.verbose('active', args);
//     return Active.update(root, args, ctx);
//   }
// };
