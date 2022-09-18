const { User, Book } = require('../models');

const resolvers = {
  Query: {
    me: async (/*parent, args, context*/) => {
      const userData = await User.findOne({ username: 'Vesta26' })
      .select('-__v')
      .populate('books');
      return userData;
    },
    users: async () => {
      return User.find()
    
        
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    }
  }

};

module.exports = resolvers;