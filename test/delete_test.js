const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: "Joe With 8 chars" });

    joe.save().then(() => done());
  });

  // it("modal instance remove", (done) => {
  //   joe.remove({}).then(() => { //! remove is not a function (@ last update)
  //     User.findOne({ name: "Joe" }).then((user) => {
  //       assert(user === null);
  //       done();
  //     });
  //   });
  // });

  it("delete one user by id", (done) => {
    User.deleteOne({ _id: joe._id })
      .then(() => User.findOne({ _id: joe._id }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });
});
