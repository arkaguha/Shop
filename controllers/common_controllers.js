const Products = require("../models/Products");

exports.getSearch = async (req, res, next) => {
   
	// const user = req.user;
	const searchBox = req.query.searchBox;

	const escapedSearchBox = searchBox.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const searchRegex = new RegExp(escapedSearchBox, "i");
	await Products.find(
		{ product_name: searchRegex },
		{ product_about: searchRegex }
	)
		.then((products) => {
         if(req.user){
            res.render("app/home", {
               products: products,
               pageTitle: "Search Results",
               user:req.user,
            });
         }else{
            res.render("app/home", {
               products: products,
               pageTitle: "Search Results",
               user:null,
            });
         }
		})
		.catch((error) => {
			res.status(500).json({ error: error.message });
		});
};
