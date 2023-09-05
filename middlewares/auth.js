const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	const token = req.cookies.Authorization;
	if (token) {
		try {
			jwt.verify("", (error, user) => {
				req.user = user;
				next();
			});
		} catch (error) {
			console.log(error);
			return res.redirect("/login");
		}
	} else {
		return res.redirect("/login");
	}
};
