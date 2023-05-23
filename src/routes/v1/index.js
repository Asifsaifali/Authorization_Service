const express = require("express");
const router = express.Router();

const UserController = require("../../controller/user-controller");

router.post("/signup", UserController.create);
router.get('/signup/:id',UserController.get)

module.exports = router;
