const crypto = require("crypto");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email, password } = req.body;
  let existingUser = null;
  existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(422).json("User exists already, please login instead");
  }

  let hashedPassword = null;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    return res.status(500).send("Could not create user, please try again");
  }

  const createdUser = new User({ email, password: hashedPassword });

  try {
    await createdUser.save();
  } catch (err) {
    return res.status(500).send("Error during creation of the user");
  }

  let token = null;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_TOKEN,
      { expiresIn: "30d" }
    );
  } catch (err) {
    return res.status(500).send("Sign in failed - Invalid token");
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  let createdUser = null;
  try {
    createdUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
    return res.status(500).json("An error occured, please try again");
  }

  if (!createdUser) {
    return res.status(401).json("You need to get an account to be logged in");
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, createdUser.password);
  } catch (err) {
    return res
      .status(500)
      .send("Could not authenticate the user, please try again");
  }

  if (!isValidPassword) {
    return res.status(401).send("Wrong password, please try again");
  }

  let token = null;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_TOKEN,
      { expiresIn: "30d" }
    );
  } catch (err) {
    return res.status(500).send("Sign in failed - Invalid token");
  }

  res.json({
    userId: createdUser.id,
    email: createdUser.email,
    token,
    likes: createdUser.likes,
  });
};

const signout = async (req, res) => {};

exports.signup = signup;
exports.signin = signin;
exports.signout = signout;
