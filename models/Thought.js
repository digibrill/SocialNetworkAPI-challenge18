const { Schema, Types, model } = require('mongoose');
const userSchema = require('./User');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query - DID NOT HAVE TIME
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Initialize user model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
