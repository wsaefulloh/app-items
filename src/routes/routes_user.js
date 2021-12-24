const express = require("express");
const routing = express.Router();
const users = require("../controllers/controllers_user");
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/user", users.addDataUser);

//READ --> GET
routing.get("/profile", validate(), users.getUser);

//UPDATE --> PUT
routing.put("/:username", validate(), users.updateData)

//DELETE --> DELETE
routing.delete("/", validate(), users.removeData)

module.exports = routing