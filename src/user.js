const mongoose = require("mongoose");
const PostSchema = require("./post.schema");

const Schema = mongoose.Schema; /* describe how I should I accept data */

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 8,
      message: "Name must be longer than 8 characters.",
    },
    required: [true, "Name is required."],
  },
  followers: Number,
  posts: [PostSchema], // {list / nested sub-documents}
});

// create a model that follows the schema

/* assign schema to user model */
// will create the model for us
const User = mongoose.model("User", UserSchema); // PascalCase for class

//expose the model to the rest of the app
module.exports = User;

/**
 * 1- create schema
 * 2- assign schema to user model
 * 3- expose the model to the rest of the app
 */
