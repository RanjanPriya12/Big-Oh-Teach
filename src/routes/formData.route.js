const express = require("express");
const { formDataValidation } = require("../validations/form.validation");
const { addFormData, getFormData } = require("../controllers/form.controller");
const formDataRouter= express.Router();

router.route("/").post(formDataValidation,addFormData);
router.route("/").get(getFormData);

module.exports = formDataRouter; 