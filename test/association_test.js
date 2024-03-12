const mongoose = require("mongoose");
const assert = require("assert");
const User = require("../src/user");
const BlogPost = require("../src/blog-post");

describe("Associations", () => {
  let joe, comment, blogPost;

  beforeEach((done) => {
    // create the three records
    joe = new User({ name: "JoeWithEightChars" });
    blogPost = new BlogPost({
      title: "Joe is trying the test",
      content: "Test ya man",
    });
    comment = new Comment({
      content: "Good post ",
    });

    // do the associations, with direct fashion
    joe.blogPosts.push(blogPost); // similar to document nesting
    blogPost.comments.push(comment);
    comment.user = joe; // associate the user with the comment, just one object
    // .push  -> has many
    // .x = y  -> has one
    //! note that we have pushed the entire model, but mongodb will only store the _id (get the reference)

    // --- save our changes ---
    // joe.save();
    // blogPost.save();
    // comment.save();

    //  we need to wait for all to finish -> they will be excuted in parallel
    Promise.all([joe.save(), blogPost.save(), comment.save()])
      .then(() => done())
      .catch((error) => done(error));
  });

  it.only("save a relation between user and blogPost", (done) => {
    User.findOne({ name: "JoeWithEightChars" })
      .then((user) => {
        console.log(user);
        done();
      })
      .catch((error) => done(error));
  });
});
