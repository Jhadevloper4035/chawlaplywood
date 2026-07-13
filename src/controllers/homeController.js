const { buildSeo } = require("../config/seo");

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

exports.productDetail = (req, res) => {
  res.render("public/layouts/main", {
    seo: buildSeo({
      title: `${greenplyPlatinumProduct.title} | Chawla Plywood`,
      description: greenplyPlatinumProduct.description,
      path: "/product/greenply-platinum-plywood",
      image: greenplyPlatinumProduct.images[0],
    }),
    view: "pages/product-detail",
    product: greenplyPlatinumProduct,
    relatedProducts: boardProducts.slice(1, 5),
    recentProducts: boardProducts.slice(4, 8),
  });
};
