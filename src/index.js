const express = require("express");
const app = express();
const port = 8000;
const mongo = require("./utils/mongo");

app.get("/", (_, res) => {
  res.json({ message: "working right" });
});

mongo()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(port, console.log(`listening ${port}`));
