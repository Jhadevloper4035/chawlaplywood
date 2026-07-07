const { body } = require("express-validator");

const applyCareer = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("name must be between 2 and 100 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be valid")
    .normalizeEmail(),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("phone is required")
    .isLength({ min: 8, max: 20 })
    .withMessage("phone must be between 8 and 20 characters"),
  body("position")
    .trim()
    .notEmpty()
    .withMessage("position is required")
    .isLength({ max: 100 })
    .withMessage("position must be at most 100 characters"),
  body("message")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 1000 })
    .withMessage("message must be at most 1000 characters"),
];

module.exports = {
  applyCareer,
};
