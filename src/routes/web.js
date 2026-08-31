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
router.get("/brand/merino", homeController.merino);
router.get("/brand/merino/laminate", homeController.merinoLaminates);
router.get("/brand/merino/panel", homeController.merinoPanels);
router.get("/brand/merino/solid-surface", homeController.merinoSolidSurfaces);
router.get("/brand/merino/fabwood", homeController.merinoFabwood);
router.get("/brand/action-tesa", homeController.actionTesa);
router.get("/brand/centuryply", homeController.centuryPly);
router.get("/brand/centuryply/laminates", homeController.centuryLaminates);
router.get("/brand/centuryply/veneers", homeController.centuryVeneers);
router.get("/brand/centuryply/doors", homeController.centuryDoors);
router.get("/brand/greenlam", homeController.greenlam);
router.get("/brand/greenlam/laminates", homeController.greenlamLaminates);
router.get("/brands/merino-laminates", (req, res) => res.redirect(301, "/brand/merino"));
router.get("/product/:slug", homeController.productDetail);

router.post("/blogs", validate(blogValidator.createBlog), contentController.createBlog);
router.post("/products", validate(productValidator.createProduct), contentController.createProduct);
router.post("/careers", validate(careerValidator.applyCareer), contentController.applyCareer);

module.exports = router;
