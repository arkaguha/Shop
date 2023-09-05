exports.getHomePage = (req, res, next) => {
	console.log(req.user);
	if (!req.user) {
		res.render("app/Home", {
			pageTitle: "Home",
			user: null,
		});
	} else {
		res.render("app/Home", {
			pageTitle: "Home",
			user: req.user,
		});
	}
};

exports.getCart = (req, res, next) => {
	res.render("app/cart", {
		pageTitle: "Cart",
		user: req.user,
	});
};

exports.getAddProducts = (req, res, next) => {
	if (!req.user) {
		res.render("app/addProducts", {
			pageTitle: "Add Products",
			user: null,
		});
	} else {
		res.render("app/addProducts", {
			pageTitle: "Add Products",
			user: req.user,
		});
	}
};
