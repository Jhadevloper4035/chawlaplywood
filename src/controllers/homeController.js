const { buildSeo } = require("../config/seo");
const AppError = require("../errors/AppError");

const boardProducts = [
  {
    category: "designer-laminates",
    tag: "GP",
    image: "/assets/images/products/1.jpeg",
    alt: "Greenply Platinum Plywood",
    title: "Greenply Platinum Plywood",
    href: "/product/greenply-platinum-plywood",
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

const greenplyPlatinumProduct = {
  slug: "greenply-platinum-plywood",
  title: "Greenply Platinum Plywood",
  category: "Plywood & Blockboard",
  subtitle: "2X Superior Plywood",
  description:
    "Bring the science of plywood home. Built with PEN technology for improved protection, Greenply Platinum Plywood is made for reliable furniture and interior applications.",
  pdf: "/assets/pdfs/greenply-platinum-plywood.pdf",
  images: [
    "/assets/images/products/1.jpeg",
    "/assets/images/products/2.jpeg",
    "/assets/images/category/designer-laminates_1.jpg",
    "/assets/images/category/uv-boards_2.jpg",
  ],
  sizes: ["8' x 4'", "7' x 4'", "6' x 4'"],
  thicknesses: ["4mm", "6mm", "9mm", "12mm", "18mm"],
  specs: [
    ["Product Type", "Plywood & Blockboard"],
    ["Grade", "2X Superior Plywood"],
    ["Available Sizes", "8' x 4', 7' x 4', 6' x 4'"],
    ["Available Thickness", "4mm, 6mm, 9mm, 12mm, 18mm"],
    ["Warranty", "30 Years"],
    ["Certification", "IS 5509, CARB Certified"],
  ],
  features: [
    "2X Fire Retardant",
    "2X Waterproof",
    "2X Money Back Warranty",
    "IS 5509 Certified",
    "30 Years Warranty",
    "Zero formaldehyde emission for healthy interiors",
    "CARB Certified",
    "Borer- Fungus proof & Anti-Termite Guarantee (Preservative Treated as per IS 5539)",
    "Virashield - Anti-viral and Anti-bacterial properties",
    "4 Press Technology",
    "Calibrated",
    "Available at a price that mirrors excellence",
  ],
  warranty: "Warranty terms vary by size, thickness, and product application.",
  seo: {
    title: "Greenply Platinum Plywood | Chawla Plywood",
    description:
      "Greenply Platinum Plywood with PEN technology for durable furniture and interior applications.",
    keywords:
      "Greenply Platinum Plywood, plywood, furniture plywood, interior plywood, Chawla Plywood",
    image: "/assets/images/products/1.jpeg",
  },
};

const productsBySlug = {
  [greenplyPlatinumProduct.slug]: greenplyPlatinumProduct,
};

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

exports.merino = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Merino | Chawla Plywood",
      description:
        "Explore Merino laminates, panels, solid surfaces, and Fabwood solutions at Chawla Plywood.",
      keywords: "Merino, laminates, panels, solid surfaces, Fabwood, Chawla Plywood",
      path: "/brand/merino",
      image: "/assets/images/banner/meerino-laminate-banner-1.webp",
    }),
    view: "pages/brand/merino/main",
  });
};

exports.merinoLaminates = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Merino Laminates | Chawla Plywood",
      description:
        "Explore Merino laminate surface options for furniture, kitchens, wardrobes, and interior projects at Chawla Plywood.",
      keywords:
        "Merino Laminates, Merino laminate sheets, decorative laminates, Chawla Plywood",
      path: "/brand/merino/laminate",
      image: "/assets/images/banner/meerino-laminate-banner-1.webp",
    }),
    view: "pages/brand/merino/category/laminate/main",
  });
};

exports.merinoPanels = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Merino Panels | Chawla Plywood",
      description: "Explore Merino panel solutions for furniture and interior projects at Chawla Plywood.",
      path: "/brand/merino/panel",
      image: "/assets/images/category/pre-lam-board.jpeg",
    }),
    view: "pages/brand/merino/category/panel/main",
  });
};

exports.merinoSolidSurfaces = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Merino Solid Surfaces | Chawla Plywood",
      description: "Explore Merino Hanex solid-surface solutions at Chawla Plywood.",
      path: "/brand/merino/solid-surface",
      image: "/assets/images/category/acrylic-boards_1.webp",
    }),
    view: "pages/brand/merino/category/solid-surface/main",
  });
};

exports.merinoFabwood = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Fabwood HFSS | Chawla Plywood",
      description: "Explore Fabwood HFSS solutions for furniture and interior applications at Chawla Plywood.",
      path: "/brand/merino/fabwood",
      image: "/assets/images/category/hdf-super.jpeg",
    }),
    view: "pages/brand/merino/category/fabwood/main",
  });
};

exports.actionTesa = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Action Tesa Boards | Chawla Plywood",
      description:
        "Explore Action Tesa HDHMR, particle, MDF, acrylic, UV, and specialty board solutions at Chawla Plywood.",
      keywords: "Action Tesa, HDHMR, MDF, particle board, acrylic boards, UV boards, Chawla Plywood",
      path: "/brand/action-tesa",
      image: "/assets/images/category/hdf-super.jpeg",
    }),
    view: "pages/brand/action-tesa/main",
  });
};

exports.centuryPly = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "CenturyPly | Chawla Plywood",
      description: "Explore CenturyLaminates, CenturyVeneers, and CenturyDoors at Chawla Plywood.",
      keywords: "CenturyPly, CenturyLaminates, CenturyVeneers, CenturyDoors, Chawla Plywood",
      path: "/brand/centuryply",
      image: "/assets/images/category/designer-laminates_1.jpg",
    }),
    view: "pages/brand/centuryply/main",
  });
};

exports.centuryLaminates = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "CenturyLaminates | Chawla Plywood",
      description: "Explore CenturyLaminates Lookbook, Starline, LinerPro, and Magnum Collection.",
      path: "/brand/centuryply/laminates",
      image: "/assets/images/category/designer-laminates_1.jpg",
    }),
    view: "pages/brand/centuryply/category/laminates/main",
  });
};

exports.centuryVeneers = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "CenturyVeneers | Chawla Plywood",
      description: "Explore CenturyVeneers NatzuraWoods and SenzuraStyles collections.",
      path: "/brand/centuryply/veneers",
      image: "/assets/images/category/veneer_1.jpg",
    }),
    view: "pages/brand/centuryply/category/veneers/main",
  });
};

exports.centuryDoors = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "CenturyDoors | Chawla Plywood",
      description: "Explore CenturyDoors flush, panel moulded, and decorative doors.",
      path: "/brand/centuryply/doors",
      image: "/assets/images/products/flush-doors/doors_1.webp",
    }),
    view: "pages/brand/centuryply/category/doors/main",
  });
};

exports.greenlam = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Greenlam | Chawla Plywood",
      description: "Explore Greenlam laminates, veneer laminates, and MFC solutions at Chawla Plywood.",
      keywords: "Greenlam, HPL, veneer laminates, MFC, Chawla Plywood",
      path: "/brand/greenlam",
      image: "/assets/images/category/designer-laminates_1.jpg",
    }),
    view: "pages/brand/greenlam/main",
  });
};

exports.greenlamLaminates = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: "Greenlam Laminates | Chawla Plywood",
      description: "Explore Greenlam HPL, HD Gloss, Unicore, performance, and specialty laminates.",
      path: "/brand/greenlam/laminates",
      image: "/assets/images/category/designer-laminates_1.jpg",
    }),
    view: "pages/brand/greenlam/category/laminates/main",
  });
};

exports.productDetail = (req, res, next) => {
  const product = productsBySlug[req.params.slug];

  if (!product) {
    return next(new AppError("Product not found", 404));
  }

  res.render("public/layouts/main", {
    seo: buildSeo({
      title: product.seo.title,
      description: product.seo.description,
      keywords: product.seo.keywords,
      path: `/product/${product.slug}`,
      image: product.seo.image,
      type: "product",
    }),
    view: "pages/product-detail",
    product,
    relatedProducts: boardProducts.slice(1, 5),
    recentProducts: boardProducts.slice(4, 8),
  });
};
