const { buildSeo } = require("../config/seo");

const boardProducts = [
  {
    category: "designer-laminates",
    tag: "WP",
    image: "/assets/images/products/1.jpeg",
    alt: "Interior Grade MDF",
    title: "Designer Laminates",
  },
  {
    category: "acrylic-laminates",
    tag: "SP",
    image: "/assets/images/products/2.jpeg",
    alt: "Exterior Grade MDF",
    title: "Acrylic Laminates",
  },
  {
    category: "veneers",
    tag: "CP",
    image: "/assets/images/products/3.jpeg",
    alt: "High Density Fibreboard",
    title: "Veneers",
  },
  {
    category: "acrylic-boards",
    tag: "CL",
    image: "/assets/images/products/4.jpeg",
    alt: "Super HDF",
    title: "Acrylic Boards",
  },
  {
    category: "UV-boards",
    tag: "PVC",
    image: "/assets/images/products/5.jpeg",
    alt: "Pre-lam Boards",
    title: "UV Boards",
  },
  {
    category: "designer-laminates",
    tag: "WP",
    image: "/assets/images/products/6.jpeg",
    alt: "Interior MDF Panels",
    title: "Designer Laminates",
  },
  {
    category: "UV-boards",
    tag: "PVC",
    image: "/assets/images/products/7.jpeg",
    alt: "Wood Finish Pre-lam",
    title: "UV Boards",
  },
  {
    category: "acrylic-laminates",
    tag: "SP",
    image: "/assets/images/products/1.jpeg",
    alt: "Moisture Resistant MDF",
    title: "Acrylic Laminates",
  },
];

exports.index = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Chawla Plywood | MDF, HDHMR, Plywood & Interior Board Solutions",
      description:
        "Explore Chawla Plywood MDF, HDHMR, particle board, plywood, laminates, veneers, wall panels, louvers, and interior board solutions.",
      keywords:
        "Chawla Plywood, MDF boards, HDHMR boards, particle board, plywood, laminates, veneers, wall panels, louvers",
      path: "/",
      image: "/assets/images/banner/10.jpg",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Chawla Plywood",
        description:
          "MDF, HDHMR, plywood, laminates, veneers, wall panels, louvers, and decorative board solutions.",
      },
    }),
    view: "pages/index",
    boardProducts,
  });
};

exports.products = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Products | Chawla Plywood",
      description:
        "Browse Chawla Plywood laminates, veneers, acrylic boards, UV boards, plywood, and interior board products.",
      path: "/products",
      image: "/assets/images/products/1.jpeg",
    }),
    view: "pages/products",
    products: boardProducts,
  });
};
