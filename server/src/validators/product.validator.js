import { body, param, validationResult } from 'express-validator'


export const productValidator = [
  body("title")
    .exists().withMessage("Title is required").bail()
    .isString().withMessage("Title must be a String").bail()
    .trim()
    .isLength({
      min: 2,
      max: 100
    }).withMessage("Title length must be between 2 to 100 characters")
    .matches(/^[a-zA-Z0-9\s'-]+$/).withMessage("Title contains invalid characters"),

  body("description")
    .exists().withMessage("Description is required").bail()
    .isString().withMessage("Description must be a String").bail()
    .trim()
    .isLength({
      min: 20,
      max: 500
    }).withMessage("Description length must be between 20 to 500 characters"),

  body("price.amount")
    .exists().withMessage("Price is required").bail()
    .isFloat(
      { min: 0 }
    ).withMessage("Price amount must be a floating number and must be greater that 0").bail(),

  body("price.currency")
    .optional()
    .isIn(
      ["ZAR", "USD", "INR"]
    ).withMessage("Currency must be ZAR, USD or INR"),

  body("stock")
    .optional()
    .isInt({ min: 0 }).withMessage("Stock must be a non-negative integer"),

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

export const singleProductParamValidator = [
  param("productId")
    .exists().withMessage("Product id is required").bail()
    .isMongoId().withMessage("Invalid product id"),

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

export const deleteProductParamValidator = [
  param("productId")
    .exists().withMessage("Product id is required").bail()
    .isMongoId().withMessage("Invalid product id"),

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

export const updateProductParamValidator = [
  param("productId")
    .exists().withMessage("Product id is required").bail()
    .isMongoId().withMessage("Invalid product id"),

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

export const updateProductValidator = [
  body("title")
    .optional()
    .isString().withMessage("Title must be a String").bail()
    .trim()
    .isLength({
      min: 2,
      max: 100
    }).withMessage("Title length must be between 2 to 100 characters")
    .matches(/^[a-zA-Z0-9\s'-]+$/).withMessage("Title contains invalid characters"),

  body("description")
    .optional()
    .isString().withMessage("Description must be a String").bail()
    .trim()
    .isLength({
      min: 20,
      max: 500
    }).withMessage("Description length must be between 20 to 500 characters"),

  body("price.amount")
    .optional()
    .isFloat(
      { min: 0 }
    ).withMessage("Price amount must be a floating number and must be greater that 0").bail(),

  body("price.currency")
    .optional()
    .isIn(
      ["ZAR", "USD", "INR"]
    ).withMessage("Currency must be ZAR, USD or INR"),

  body("stock")
    .optional()
    .isInt({ min: 0 }).withMessage("Stock must be a non-negative integer"),

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