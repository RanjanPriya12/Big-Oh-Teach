const express = require("express");
const { formValidation } = require("../validations/form.validation");
const { addForm } = require("../controllers/form.controller");
const formRouter= express.Router();

router.route("/").post(formValidation,addForm);

module.exports = formRouter; 