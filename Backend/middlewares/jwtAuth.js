const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
  return jwt.sign({ id: id }, "123");
};

exports.verifyToken = (token) => {
  return jwt.decode(token, "123");
};
