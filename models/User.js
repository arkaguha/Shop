const mongoose = require("mongoose");

module.exports = mongoose.model(
	"User",
	new mongoose.Schema(
		{
			user_name: { type: String, required: true },
			email: { type: String, required: true, unique: true },
			password: { type: String, required: true },
			phone_number: { type: String, unique: true },
			address: { type: String, unique: true },
			admin: { type: Boolean, default: false },
		},
		{ collection: "User", versionKey: false }
	)
);
