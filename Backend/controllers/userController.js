const contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  const newContact = await contact.create(req.body);
  return res
    .status(201)
    .send({ message: "Query Added Succesfully!", newContact });
};
