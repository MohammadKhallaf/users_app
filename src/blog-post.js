// just not to loose the post schema in the course
const mongoose = require("mongoose");

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
      ref: "Comment" /* reference to another model */,
    },
  ], // arr of comments (refs)
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const BlogPost = mongoose.model("blogPost", BlogPostSchema); // PascalCase for class

module.exports = BlogPost;
