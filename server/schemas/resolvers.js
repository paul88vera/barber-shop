const { User, Haircut } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('haircuts');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('haircuts');
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('haircuts');
          }
    },
    
    Mutation: {
      // args needed to create a user --> username and email
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          // Args needed to create a haircuut --> haircutText (necessary), instructions (not necessary), and user needs to be logged in
          addHaircut: async (parent, args, context) => {
            if (context.user) {
              const haircut = await Haircut.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { haircuts: haircut._id } },
                { new: true }
              );
      
              return haircut;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          // Use the haircut's unique _id to find and delete it
          deleteHaircut: async (parent, args, context) => {
            if (context.user) {
              Haircut.findOneAndDelete( args._id )
                .then(deletedHaircut => {
                  return deletedHaircut;
                })
            }
            throw new AuthenticationError('You need to be logged in!');
          }
          ,
          deleteInstructions: async (parent, { _id }, context) => {
            if (context.user) {
              const haircut = await Haircut.findOneAndUpdate(
                { _id },
                { instructions: ""},
                { new: true}
              );
              return haircut;
            }
            throw new AuthenticationError('You need to be logged in!');
          }
    },
};

module.exports = resolvers;
