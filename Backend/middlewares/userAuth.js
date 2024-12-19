const admin = require("../models/Admin");
const { generateToken, verifyToken } = require("./jwtAuth");

exports.userAuth = async (req, res, next) => {
  const { adminToken } = req.cookies;
  //   console.log(req.cookies);
  //   if (adminToken) {
  if (adminToken) {
    const { id } = verifyToken(adminToken);
    const adminData = await admin.findById(id);
    return res.status(200).send({ message: "Logged In Successfully!", adminData });
  } else {
    next();
  }
};
