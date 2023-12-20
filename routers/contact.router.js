const express = require("express");
const { createContact, getContactById, getContactByUserId } = require("../controller/contact.controller");

const router = express.Router();

router.post("/", createContact);

router.get("/:id", getContactById);

router.get("/userById/:user_id", getContactByUserId);

module.exports = router