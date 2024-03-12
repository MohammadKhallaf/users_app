// anything related to testing setup should be here
require("dotenv").config();

const mongoose = require("mongoose");

/* CONNECTION HELPER */

before((done) => {
  mongoose.connect(process.env.MONGO_URL); // connect to our database

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
  // I need to do the same drop for all **collections** in the system
  // mongoose.connection.collections.users.drop((err) => {
  //   // only excuted after the collection is dropped
  //   if (err && err.message !== "ns not found") return done(err);

  //   done();
  // });

  const { users, comments, blogposts } = mongoose.connection.collections;
  // we drop those collections sequentially
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        // blogPosts is not correct -> mongoose normalizing all collections' names to lowercase
        done();
      });
    });
  }); //
});
