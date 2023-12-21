const express = require("express");
const auth = require("../middlewear/auth")
const { createUser, loginUser, changeUserPass ,getAllUsers } = require("../controller/user.controller");

const router = express.Router();

router.post("/", createUser);

router.post("/login", loginUser);

router.post("/getAll", getAllUsers);

router.post("/changePassword", auth.verify, changeUserPass);

module.exports = router