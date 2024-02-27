const assert = require("assert");
const User = require("../src/user");

describe("Updating records", () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: "Joe", likes: 0 });
    joe.save().then(() => {
      done();
    });
  });

  it("should increase the number of likes by 1", (done) => {
    User.updateMany({ name: "Joe" }, { $inc: { likes: 1 } })
      .then(() => {
        return User.findOne({ name: "Joe" });
      })
      .then((user) => {
        assert(user.likes === 1);
        done();
      });
  });
});
