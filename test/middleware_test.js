const mongoose = require("mongoose");
const assert = require("assert");
const User = require("../src/user");
const BlogPost = require("../src/blog-post");

describe("Middleware tests", () => {
  let joe, blogPost;

  beforeEach((done) => {
    joe = new User({ name: "JoeWithEightChars" });
    blogPost = new BlogPost({
      title: "Joe is trying the test",
      content: "Test ya man",
    });
    // comment = new Comment({
    //   content: "Good post!",
    // });

    joe.blogPosts.push(blogPost);
    // blogPost.comments.push(comment);
    // comment.user = joe;

    Promise.all([
      joe.save(),
      blogPost.save(),
      //  comment.save()
    ])
      .then(() => done())
      .catch((error) => done(error));
  });

  it("Deletes the user blog posts when user is removed", (done) => {
    joe // not the full model
      .deleteOne()
      .then(() => BlogPost.countDocuments()) // Corrected database operation
      .then((count) => {
        console.log(`BlogPost count after deletion: ${count}`);
        assert(count === 0); // Use strictEqual for better assertion messages
        done();
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
        done(error);
      });
  });
});
