const assert = require("assert");
const User = require("../src/user");

describe("Updating records", () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  it("instance type using set n save", (done) => {
    joe.set("name", "Alex");

    joe.save().then(() =>
      User.find({ name: "Alex" }).then((user) => {
        assert(user._id.toString() === joe._id.toString());
        done();
      })
    );
  });

  it("should increase the number of likes by 1", (done) => {
    User.updateOne({ name: "Joe" })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user.likes === 1);
        done();
      });
  });
});
