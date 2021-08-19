const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const modelUser = mongoose.model("User", userSchema);

module.exports = modelUser;
