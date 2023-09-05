const express = require("express");
const router = express.Router();

const app_controllers = require("../controllers/app_controllers");

router
	.get("/home", app_controllers.getHomePage)
	.get("/cart", app_controllers.getCart)
	.get("/addProducts", app_controllers.getAddProducts);

module.exports = router;
