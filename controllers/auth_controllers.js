exports.getLogin = (req, res, next) => {
	res.render("auth/login", {
		pageTitle: "Login",
	});
};

exports.postLogin = (req, res, next) => {
	res.redirect('/home')
};


exports.getSignUp = (req, res, next) => {
	res.render("auth/signUp", {
		pageTitle: "Sign Up",
	});
};


exports.postSignUp = (req, res, next) => {
	res.redirect('/login')
};

