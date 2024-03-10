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
  // postCount: Number, //! calculated on the fly, VIRTUAL TYPE => not included in the schema
  posts: [PostSchema], // {list / nested sub-documents}
});

// create a model that follows the schema

UserSchema.virtual("postCount") // expect a virtual property
  .get(function () {
    // using a function keyword not the arrow function (fat arrow) ==> we need to use "this" to refer to the current instance
    //* this function should be excuted every time **the property** is accessed ( joe.postCount or joe.get('postCount') ) -- no function excution
    //* and return a value for the virtual property
    // return this; // returns the user model instance
    return this.posts.length; // access to the current instance of the model
  });

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
