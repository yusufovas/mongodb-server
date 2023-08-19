const { Schema, model } = require("mongoose");

const Users = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
    },
    fullname: {
      type: String,
      required: true,
      min: [3, "Input must containt at least 3 letters!"],
    },
    surname: {
      type: String,
      required: false,
      min: [3, "Input must contain at least 3 letters!"],
    },
    groups: [
      {
        type: String,
      },
    ],
    role: {
      type: String,
      required: true,
    },
  },
  {
    collection: "users",
  }
);

const users = model("Users", Users);

module.exports = users;
