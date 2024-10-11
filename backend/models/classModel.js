const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    duration:Number,
    time: Number,
    day:String,
    trainer:String,
    photo: String,
    trainee:Number,
  },
  {
    timestamps: true,
  }
);
const classModel = mongoose.model("class", classSchema);
module.exports = classModel;
