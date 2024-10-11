
const traineeModel = require("../models/traineeModel");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await traineeModel.findOne({ email });
    if (user) {
      throw new Error("Existing User found with the same Email");
    }
    if (!name) {
      throw new Error("Please provide your name");
    }
    if (!password) {
      throw new Error("Please provide your password");
    }
    const salt = await bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    if (!hashPassword) {
      throw new Error("something is wrong");
    }

    const payload = {
      ...req.body,
      role: "TRAINEE",
      password: hashPassword,
    };
    const createTrainee = new traineeModel(payload);
    const saveTrainee = await createTrainee.save();
    res.status(201).json({
      data: saveTrainee,
      success: true,
      error: false,
      message: "Trainee created Successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = signup;
