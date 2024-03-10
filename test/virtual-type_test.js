const assert = require("assert");
const User = require("../src/user");

describe("Virtual types", () => {
  it("postCount returns the number of posts", (done) => {
    const joe = new User({
      name: "JoeWithEightChars",
      posts: [{ title: "PostTitle" }],
    });

    joe
      .save()
      .then(() => User.findOne({ name: "JoeWithEightChars" }))

      .then((user) => {
        assert(user.postCount === 1);
        done();
      });
  });
});
