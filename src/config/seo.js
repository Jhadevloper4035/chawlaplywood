const config = require("./appConfig");

const defaultSeo = {
  title: "Chawla Plywood | Engineered Wood Boards & Interior Solutions",
  description:
    "Chawla Plywood offers MDF, HDHMR, particle board, plywood, wall panels, laminates, veneers, and decorative interior products.",
  keywords:
    "Chawla Plywood, MDF boards, HDHMR boards, particle board, plywood, laminates, veneers, wall panels",
  image: "/assets/images/logo/logo1.png",
  type: "website",
};

const absoluteUrl = (value = "/") => {
  if (/^https?:\/\//i.test(value)) return value;
  return new URL(value, config.siteUrl).toString();
};

const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: config.siteName,
  url: config.siteUrl,
  logo: absoluteUrl(defaultSeo.image),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 9650024478",
    contactType: "customer service",
    areaServed: "IN",
  },
});

const buildSeo = (options = {}) => {
  const seo = {
    ...defaultSeo,
    ...options,
  };

  const canonicalPath = seo.canonical || seo.path || "/";
  const image = absoluteUrl(seo.image);

  return {
    ...seo,
    canonical: absoluteUrl(canonicalPath),
    image,
    siteName: config.siteName,
    schema: seo.schema || buildOrganizationSchema(),
  };
};

module.exports = {
  buildSeo,
  buildOrganizationSchema,
};
