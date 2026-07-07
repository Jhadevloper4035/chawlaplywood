const { body } = require("express-validator");

const createBlog = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("title is required")
    .isLength({ min: 3, max: 120 })
    .withMessage("title must be between 3 and 120 characters"),
  body("slug")
    .trim()
    .notEmpty()
    .withMessage("slug is required")
    .isLength({ min: 3, max: 140 })
    .withMessage("slug must be between 3 and 140 characters"),
  body("excerpt")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 250 })
    .withMessage("excerpt must be at most 250 characters"),
  body("content")
    .trim()
    .notEmpty()
    .withMessage("content is required")
    .isLength({ min: 20 })
    .withMessage("content must be at least 20 characters"),
  body("status")
    .optional({ checkFalsy: true })
    .isIn(["draft", "published"])
    .withMessage("status must be draft or published"),
];

module.exports = {
  createBlog,
};
