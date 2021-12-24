const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_items");
const upload = require("../middleware/upload")
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/add", validate(), upload.single("image"), ctrl.addData);

//READ --> GET
routing.get("/username/:username", validate(), ctrl.getByUsername)

//UPDATE --> PUT
routing.put("/update", validate(), upload.single("image"), ctrl.updateData)

//DELETE --> DELETE
routing.delete("/del/:id", validate(), ctrl.removeData)

module.exports = routing;
