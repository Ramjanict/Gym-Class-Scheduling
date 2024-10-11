const mongoose = require("mongoose");

const traineeSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: String,
    password: String,
    profilePic: String,
  },
  {
    timestamps: true,
  }
);
const traineeModel = mongoose.model("trainee", traineeSchema);
module.exports = traineeModel;
