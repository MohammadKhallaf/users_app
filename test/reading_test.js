const assert = require("assert");
const User = require("../src/user");

describe("Reading users", () => {
  let joe, khaled, sarah, mohamed, jane; // to make available to all tests
  beforeEach((done) => {
    // insert a record into users collection with name of joe
    joe = new User({ name: "JoeWithEightChars" });
    khaled = new User({ name: "KhaledWithEightChars" });
    sarah = new User({ name: "SarahWithEightChars" });
    mohamed = new User({ name: "MohamedWithEightChars" });
    jane = new User({ name: "JaneWithEightChars" });

    Promise.all([
      joe.save(),
      khaled.save(),
      sarah.save(),
      mohamed.save(),
      jane.save(),
    ]).then(() => done());
  });

  it("finds all users with name of joe", (done) => {
    User.find({ name: "JoeWithEightChars" }).then((users) => {
      assert(users[0]._id.toString() === joe._id.toString());
      done();
    });
  });

  it("find a user with a particular id", (done) => {
    User.findOne({ _id: joe._id }).then((user) => {
      assert(user.name === "JoeWithEightChars");
      done();
    });
  });

  it("result pagination with skip and limit", (done) => {
    User.find({}) // find({}) : NO filter criteria
      .sort({ name: 1 })
      .skip(1)
      .limit(3)
      .then((users) => {
        console.log(users);
        assert(users.length === 3);
        done();
      });
  });
});
