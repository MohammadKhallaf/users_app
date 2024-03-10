const assert = require("assert");
const User = require("../src/user");

describe("Updating records", () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: "JoeWithEightChars", followers: 0 });
    joe.save().then(() => {
      done();
    });
  });

  it("should increase the number of followers by 1", (done) => {
    User.updateMany({ name: "JoeWithEightChars" }, { $inc: { followers: 1 } })
      .then(() => {
        return User.findOne({ name: "JoeWithEightChars" });
      })
      .then((user) => {
        assert(user.followers === 1);
        done();
      });
  });
});
