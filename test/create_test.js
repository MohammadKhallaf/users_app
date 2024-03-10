const assert = require("assert");
const User = require("../src/user");

describe("Creating records", () => {
  // fat arrow fn
  it("saves a user", (done) => {
    // mocha search for any assertion, if there is no assertion then everything is good

    /**
     * create a new user "object"
     * save it " to the database "
     * check if it was saved correctly
     */

    const john = new User({ name: "John With 8 chars" });
    john
      .save()
      .then(() => {
        // check if it was saved correctly
        assert(!john.isNew);
        done();
      })
      .catch((error) => done(error)); // to detect the error thrown
  });
});
