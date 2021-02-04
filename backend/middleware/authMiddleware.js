const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token = null;
  try {
    console.log(req.headers.authorization);
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401);
      throw new Error("Authentication failed");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = await User.findById(decodedToken.userId).select("-password");
    next();
  } catch (err) {
    res.status(401);
    return next("Authentication failed");
  }
};

module.exports = protect;
