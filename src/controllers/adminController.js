const { buildSeo } = require("../config/seo");

exports.dashboard = (req, res) => {
  res.render("dashboard/layouts/main", {
    seo: buildSeo({
      title: "Admin Dashboard | Chawla Plywood",
      description: "Chawla Plywood admin dashboard.",
      path: "/admin",
      robots: "noindex, nofollow",
      schema: null,
    }),
    view: "pages/dashboard",
    stats: [
      { label: "Products", value: 0 },
      { label: "Blogs", value: 0 },
      { label: "Career Applications", value: 0 },
    ],
  });
};
