const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_auth");

routing.post("/", ctrl.login);

module.exports = routing