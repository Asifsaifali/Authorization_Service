const express = require("express");
const router = express.Router();

const UserController = require("../../controller/user-controller");

router.post("/signup", UserController.create);

module.exports = router;
