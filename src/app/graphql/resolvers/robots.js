// @flow
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

import { RobotInputType, RobotOutputType } from 'graphql/types/robot';
import Robot from 'graphql/models/Robot';
import { ExistentialCrisisOutputType } from 'graphql/types/existentialCrisis';

export const robots: Object = {
  name: 'robots',
  type: new GraphQLList(RobotOutputType),
  description:
    'Find all robots, or all robots at a given property with provided property_id',
  resolve: async (root, args, ctx) => {
    console.log('robotsFindAll', args);
    return Robot.findAll(root, args, ctx);
  }
};

export const robot: Object = {
  name: 'robot',
  type: RobotOutputType,
  description: 'find a single robot',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, ctx, info) => {
    console.log('robotFindOne', args);
    return Robot.findOne(root, args, ctx);
  }
};

export const buildARobot: Object = {
  name: 'buildARobot',
  description: 'Get all mad scientist for your pancakes.',
  type: RobotOutputType,
  args: {
    robotInput: { type: new GraphQLNonNull(RobotInputType) }
  },
  resolve: async (root, args, ctx) => {
    console.log('robotBuilding', args);
    return Robot.buildARobot(root, args, ctx);
  }
};

export const existentialCrisis: Object = {
  name: 'existentialCrisis',
  type: ExistentialCrisisOutputType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: async (root, args, ctx) => {
    console.log('existentialCrisis', args);
    return Robot.existentialCrisis(root, args, ctx);
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
