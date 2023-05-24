const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const bcrypt=require('bcrypt')

module.exports = {
  PORT: process.env.PORT,
  SALT:bcrypt.genSaltSync(10),
  JWT_KEY:process.env.JWT_KEY,
};
