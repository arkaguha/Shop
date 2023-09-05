const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = 3000;

const MONGO_CONNECT = require("./server");
const app_routes = require('./routes/app_routes')
const auth_routes = require('./routes/auth_routes')

app.set("view engine", "ejs");
app.use('/public',express.static("public"));
// app.use('/script',express.static("script"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(app_routes)
app.use(auth_routes)

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
	MONGO_CONNECT;
});
