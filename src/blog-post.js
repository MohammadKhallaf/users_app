// just not to loose the post schema in the course
const mongoose = require("mongoose");
const MODELS = require("./constants");

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: MODELS.COMMENT /* reference to another model */,
    },
  ], // arr of comments (refs)
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const BlogPost = mongoose.model(MODELS.BLOGPOST, BlogPostSchema); // PascalCase for class

module.exports = BlogPost;
