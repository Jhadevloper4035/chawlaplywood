const AppError = require("../errors/AppError");
const { buildSeo } = require("../config/seo");

const renderNotFound = (req, res) => {
  res.status(404).render("public/layouts/main", {
    seo: buildSeo({
      title: "Page Not Found | Chawla Plywood",
      description: "The requested page could not be found.",
      keywords: "Chawla Plywood",
      path: req.originalUrl,
      robots: "noindex, follow",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Page Not Found",
        description: "The requested page could not be found.",
      },
    }),
    view: "pages/404",
  });
};

const notFoundHandler = (req, res, next) => {
  if (req.accepts("html")) {
    return renderNotFound(req, res);
  }

  return next(new AppError("Route not found", 404));
};

const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = statusCode === 500 ? "Internal server error" : error.message;

  if (req.accepts("html") && statusCode === 404) {
    return renderNotFound(req, res);
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errors: error.details || undefined,
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
