const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "user" }],
});

likeSchema.plugin(uniqueValidator);

const Like = mongoose.model("Like", userSchema);

module.exports = Like;
