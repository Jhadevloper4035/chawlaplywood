const { body } = require("express-validator");

const createProduct = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 2, max: 120 })
    .withMessage("name must be between 2 and 120 characters"),
  body("category")
    .trim()
    .notEmpty()
    .withMessage("category is required")
    .isLength({ max: 80 })
    .withMessage("category must be at most 80 characters"),
  body("price")
    .optional({ checkFalsy: true })
    .isFloat({ min: 0 })
    .withMessage("price must be a positive number"),
  body("description")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 1000 })
    .withMessage("description must be at most 1000 characters"),
  body("status")
    .optional({ checkFalsy: true })
    .isIn(["active", "inactive"])
    .withMessage("status must be active or inactive"),
];

module.exports = {
  createProduct,
};
