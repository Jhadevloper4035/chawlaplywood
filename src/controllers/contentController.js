exports.createBlog = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Blog validation passed",
    data: req.body,
  });
};

exports.createProduct = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Product validation passed",
    data: req.body,
  });
};

exports.applyCareer = (req, res) => {
  res.status(201).json({
    success: true,
    message: "Career validation passed",
    data: req.body,
  });
};
