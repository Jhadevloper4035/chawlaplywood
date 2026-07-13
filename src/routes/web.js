const express = require("express");
const homeController = require("../controllers/homeController");
const contentController = require("../controllers/contentController");
const validate = require("../middleware/validate");
const blogValidator = require("../validators/blogValidator");
const productValidator = require("../validators/productValidator");
const careerValidator = require("../validators/careerValidator");

const router = express.Router();

router.get("/", homeController.index);
router.get("/default", homeController.index);
router.get("/default/", homeController.index);
router.get("/products", homeController.products);

router.post("/blogs", validate(blogValidator.createBlog), contentController.createBlog);
router.post("/products", validate(productValidator.createProduct), contentController.createProduct);
router.post("/careers", validate(careerValidator.applyCareer), contentController.applyCareer);

module.exports = router;
