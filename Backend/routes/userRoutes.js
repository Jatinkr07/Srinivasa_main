const express = require("express");
const { addContact } = require("../controllers/userController");
const router = express.Router();

router.post("/add-contact", addContact);

module.exports = router;
