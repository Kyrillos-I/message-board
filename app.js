const express = require("express");
const app = express();
const path = require("node:path");
const router = require("./routes/index.js");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(router);

app.listen(3000);
