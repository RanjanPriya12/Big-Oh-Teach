import { validationResult, check } from "express-validator";

export const formValidation = [
    check("uniqueId")
        .not()
        .isEmpty()
        .withMessage("Unique ID should not be blank!")
        .isUUID(4)
        .withMessage("Invalid UUID format for Unique ID!")
        .trim(),
    check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required!")
        .exists()
        .isEmail()
        .withMessage("Invalid email address entered!")
        .trim(),
    check("title")
        .not()
        .isEmpty()
        .withMessage("Title is required!")
        .exists()
        .isString()
        .withMessage("Title should be string value!")
        .trim(),
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name is required!")
        .exists()
        .isString()
        .withMessage("Title should be string value!")
        .isLength({ min: 3, max: 30 })
        .withMessage("Name should be between 3 to 30 characters long!")
        .trim(),
    check("phoneNumber")
        .not()
        .isEmpty()
        .withMessage("Phone Number is required!")
        .exists()
        .matches(/^[6-9]\d{9}$/)
        .withMessage("Please enter a valid mobile number!")
        .trim(),
    check("isGraduate")
        .not()
        .isEmpty()
        .withMessage("Phone Number is required!")
        .exists()
        .isBoolean()
        .withMessage("isGraduate should be a boolean value")
        .trim(),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                message: "Something went wrong",
                status: "fail",
                error: errors.array()
            });
        }
        next();
    }
]

export const formDataValidation = [
    check("uniqueId")
        .not()
        .isEmpty()
        .withMessage("Unique ID should not be blank!")
        .isUUID(4)
        .withMessage("Invalid UUID format for Unique ID!")
        .trim(),
    check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required!")
        .exists()
        .isEmail()
        .withMessage("Invalid email address entered!")
        .trim(),
    check("name")
        .not()
        .isEmpty()
        .withMessage("Name is required!")
        .exists()
        .isString()
        .withMessage("Title should be string value!")
        .isLength({ min: 3, max: 30 })
        .withMessage("Name should be between 3 to 30 characters long!")
        .trim(),
    check("phoneNumber")
        .not()
        .isEmpty()
        .withMessage("Phone Number is required!")
        .exists()
        .matches(/^[6-9]\d{9}$/)
        .withMessage("Please enter a valid mobile number!")
        .trim(),
    check("isGraduate")
        .not()
        .isEmpty()
        .withMessage("Phone Number is required!")
        .exists()
        .isBoolean()
        .withMessage("isGraduate should be a boolean value")
        .trim(),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({
                message: "Something went wrong",
                status: "fail",
                error: errors.array()
            });
        }
        next();
    }
]