const mongoose = require("mongoose");
const MODELS = require("./constants");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: MODELS.USER, // make sure that the name is the one used to assign the model
  },
});

const Comment = mongoose.model(MODELS.COMMENT, CommentSchema);

module.exports = Comment;
