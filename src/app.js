const express = require("express");
const controllers = require("./controllers/router");

const path = require("path");
const helmet = require("helmet");
/*
Add the serve-favicon npm module if you want to serve from here...
const favicon = require("serve-favicon");
*/

const app = express();

// View Engine
/*
app.set("view engine", "YOUR ENGINE HERE");
app.set("views", path.join(__dirname, "views"));
*/

// Middlewares
app.use(helmet());
// app.use(favicon(path.join(__dirname, "..", "public", "img", "skull.png")));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Forwards requests to the router
app.use(controllers);

module.exports = app;
