import { body, param, validationResult } from 'express-validator'

export const registerValidator = [
  body("name")
    .exists().withMessage("Name is required").bail()
    .isString().withMessage("Name must be a String").bail()
    .trim()
    .isLength({
      min: 2,
      max: 50
    }).withMessage("Name length must be between 2 to 50 characters"),
  body('email')
    .exists().withMessage("Email is required").bail()
    .trim()
    .isEmail().withMessage("Enter valid email address"),
  body("password")
    .exists().withMessage("Password is Required").bail()
    .isString().withMessage("Password must be a String").bail()
    .trim()
    .isLength({ min: 6 }).withMessage("Password must be minimum 6 character long"),
  body("confirmPassword")
    .exists().withMessage("Confirm Password is Required").bail()
    .isString().withMessage("Confirm Password must be a String").bail()
    .trim()
    .isLength({ min: 6 }).withMessage("Confirm Password must be minimum 6 character long").bail()
    .custom((value, { req }) => {
      return value === req.body.password
    }).withMessage("Password and Confirm Password does not match"),

  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid Request",
        errors: errors.array()
      })
    }

    next()
  }
]


export const loginValidator = [
  body("email")
    .exists().withMessage("Email is Required").bail()
    .isString().withMessage("Email must be a String Value").bail()
    .trim()
    .isEmail().withMessage("Enter a valid email address"),
  body("password")
    .exists().withMessage("Password is required").bail()
    .isString().withMessage("Password must be a String value").bail()
    .trim()
    .isLength({ min: 6 }).withMessage("Password at least 6 character long"),

  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid data",
        errors: errors.array()
      })
    }

    next()
  }
]