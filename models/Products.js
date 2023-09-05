const mongoose = require("mongoose");

module.exports = mongoose.model(
	"Products",
	new mongoose.Schema(
		{
			product_name: { type: String, required: true },
			product_about: { type: String, required: true },
			product_rating: { type: String, required: true },
			product_price: { type: String },
			product_img_url: { type: String },
		},
		{ collection: "Products", versionKey: false }
	)
);
