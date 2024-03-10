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
});
