const mongoose = require("mongoose");

// this is a schema only file, not a full model as it is not independent collection
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = PostSchema;
