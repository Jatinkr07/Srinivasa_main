const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 5);
};
exports.comparePassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};
