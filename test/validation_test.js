const assert = require("assert");
const User = require("../src/user");

describe("Validating records", () => {
  it("requires a user name", (done) => {
    const user = new User({ name: undefined });
    const validationResult = user.validateSync(); // return a validation object
    const { message } = validationResult.errors.name;
    assert(message === "Name is required.");
    done();
  });

  it("requires a user name longer than 8 characters", (done) => {
    const user = new User({ name: "Hamo" });
    const validationResult = user.validateSync(); // return a validation object
    const { message } = validationResult.errors.name;
    assert(message === "Name must be longer than 8 characters.");
    done();
  });
});
