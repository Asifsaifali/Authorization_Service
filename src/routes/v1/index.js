const express = require("express");
const router = express.Router();

const UserController = require("../../controller/user-controller");

router.post("/signup", UserController.create);
router.get('/signup/:id',UserController.get)
router.get('/signup',UserController.signIn);
router.get('/isAuthentic',UserController.isAuthenticated);

module.exports = router;
