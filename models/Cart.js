const mongoose = require("mongoose");

module.exports = mongoose.model(
	"Cart",
	new mongoose.Schema(
		{
			user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
			product_id: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
			},
			quantity: { type: String },
			price: { type: String },
		},
		{ collection: "Cart", versionKey: false }
	)
);
