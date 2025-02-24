const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required:true, unique: true },
  passwordHash: { type: String, required: true },
  
});
module.exports = model("User", userSchema);