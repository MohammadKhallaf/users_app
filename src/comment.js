const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user", // make sure that the name is the one used to assign the model
  },
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
