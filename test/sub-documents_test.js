const assert = require("assert");
const User = require("../src/user");

describe("Subdocuments", () => {
  it("can create a subdocument", (done) => {
    const joe = new User({
      name: "JoeWithEightChars",
      posts: [
        {
          title: "PostTitle",
        },
      ],
    });

    joe
      .save()
      .then(() => User.findOne({ name: "JoeWithEightChars" }))
      .then((user) => {
        assert(user.posts[0].title === "PostTitle");
        done();
      })
      .catch((error) => done(error));
  });

  it("can add subdocuments to an existing records", () => {
    const joe = new User({
      name: "JoeWithEightChars",
      posts: [], // just for the purpose of this test
    });

    // series of operations => find -> update & save -> find -> test
    joe
      .save()
      .then(() => User.findOne({ name: "JoeWithEightChars" }))
      .then((user) => {
        user.posts.push({ title: "PostTitle" });
        return user.save(); // add to the user model and save it
      })
      .then(() => User.findOne({ name: "JoeWithEightChars" }))
      .then((user) => {
        assert(user.posts[0].title === "PostTitle");
        done();
      });
  });
});
