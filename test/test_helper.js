// anything related to testing setup should be here

const mongoose = require("mongoose");

/* CONNECTION HELPER */

before((done) => {
  mongoose.connect("mongodb://localhost/users_test"); // connect to our database

  mongoose.connection
    .once("open", () => {
      done();
    }) // not using fat arraw here because of the async nature ?
    .on("error", (error) => {
      console.warn("Warning : ", error);
    });
});

// drop the collections before each test
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // only excuted after the collection is dropped

    done();
  });
});
