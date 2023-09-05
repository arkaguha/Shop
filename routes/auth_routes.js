const express = require("express");
const router = express.Router();

const auth_controllers = require("../controllers/auth_controllers");

router
	.get("/login", auth_controllers.getLogin)
	.get("/signup", auth_controllers.getSignUp)
	.post("/login", auth_controllers.postLogin)
	.post("/signup", auth_controllers.postSignUp);

module.exports = router;
