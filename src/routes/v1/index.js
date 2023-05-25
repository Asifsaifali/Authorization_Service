const express = require("express");
const router = express.Router();

const { authValidator } = require("../../middlewares/index");
const UserController = require("../../controller/user-controller");

router.post("/signup", authValidator.userAuthenticted, UserController.create);
router.post("/signin", authValidator.userAuthenticted, UserController.signIn);
router.get("/isAuthentic", UserController.isAuthenticated);

module.exports = router;
