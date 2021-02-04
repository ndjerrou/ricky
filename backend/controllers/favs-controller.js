const User = require("../models/User");

const addFav = async (req, res) => {
  const { id } = req.body;
  const { idUser } = req.body;
  try {
    const user = await User.findOne({ _id: idUser });

    user.likes.push(req.body.id);
    user.markModified("likes");
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

exports.addFav = addFav;
