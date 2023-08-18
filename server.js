const express = require("express");

const app = express();

const port = 8000;

app.get("/", (_, res) => {
  res.json({ message: "working right" });
});

app.listen(port, console.log(`listening ${port}`));
