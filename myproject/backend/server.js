const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3050;

mongoose
  .connect("mongodb://localhost/uclinic", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
