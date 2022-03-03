const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/uclinic", { useMongoClient: true });

var db = mongoose.connection;

db.on("error", function (e) {
  console.log("mongoose connection error", e);
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});
