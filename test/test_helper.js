// anything related to testing setup should be here

const mongoose = require("mongoose");

/* CONNECTION HELPER */

mongoose.connect("mongodb://localhost/users_test"); // connect to our database

mongoose.connection
  .once("open", () => {
    console.log("Connected !");
  })
  .on("error", (error) => {
    console.warn("Warning : ", error);
  });
