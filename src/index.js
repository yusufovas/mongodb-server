const express = require("express");
const app = express();
const port = 8000;
const mongo = require("./utils/mongo");
const router = require('./modules/index')
app.get("/", (_, res) => {
  res.json({ message: "working right" });
});

mongo()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.use(express.json())
app.use(router)

app.listen(port, console.log(`listening ${port}`));
