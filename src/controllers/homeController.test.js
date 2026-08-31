const assert = require("node:assert/strict");
const test = require("node:test");
const path = require("node:path");
const ejs = require("ejs");

const {
  merino,
  merinoLaminates,
  merinoPanels,
  merinoSolidSurfaces,
  merinoFabwood,
  actionTesa,
  centuryPly,
  centuryLaminates,
  centuryVeneers,
  centuryDoors,
  greenlam,
  greenlamLaminates,
  productDetail,
} = require("./homeController");
const footerData = require("../config/footerData");

test("product slugs render their own SEO and missing products return 404", () => {
  let rendered;

  productDetail(
    { params: { slug: "greenply-platinum-plywood" } },
    { render: (...args) => { rendered = args; } },
    assert.fail,
  );

  const [, { seo }] = rendered;
  assert.equal(seo.title, "Greenply Platinum Plywood | Chawla Plywood");
  assert.equal(seo.canonical, "http://localhost:3000/product/greenply-platinum-plywood");

  let error;
  productDetail(
    { params: { slug: "missing-product" } },
    {},
    (nextError) => { error = nextError; },
  );

  assert.equal(error.statusCode, 404);
});

test("Merino renders its category page and keeps laminates on its own route", async () => {
  let rendered;

  merino({}, { render: (...args) => { rendered = args; } });

  const [layout, { seo, view }] = rendered;
  assert.equal(layout, "public/layouts/main");
  assert.equal(view, "pages/brand/merino/main");
  assert.equal(seo.canonical, "http://localhost:3000/brand/merino");

  const html = await ejs.renderFile(
    path.join(__dirname, "../views/public/layouts/main.ejs"),
    { seo, view, footerData },
  );
  assert.match(html, /<h1[^>]*>Merino<\/h1>/);
  assert.match(html, /Fabwood HFSS/);
  assert.match(html, /href="\/brand\/merino\/laminate"/);
  assert.match(html, /href="\/brand\/merino\/panel"/);
  assert.match(html, /href="\/brand\/merino\/solid-surface"/);
  assert.match(html, /href="\/brand\/merino\/fabwood"/);

  merinoLaminates({}, { render: (...args) => { rendered = args; } });
  assert.equal(rendered[1].view, "pages/brand/merino/category/laminate/main");
  assert.equal(rendered[1].seo.canonical, "http://localhost:3000/brand/merino/laminate");

  [merinoPanels, merinoSolidSurfaces, merinoFabwood].forEach((controller) => {
    controller({}, { render: (...args) => { rendered = args; } });
    assert.match(rendered[1].view, /^pages\/brand\/merino\/category\/.+\/main$/);
  });

  merinoPanels({}, { render: (...args) => { rendered = args; } });
  const panelHtml = await ejs.renderFile(
    path.join(__dirname, "../views/public/layouts/main.ejs"),
    { ...rendered[1], footerData },
  );
  ["Hi-Gloss PU+ Panels", "Matt Meister", "Ply Meister", "Merinova", "Merino Marine Board", "Merino Senses", "Post Laminated Panels"].forEach((category) => {
    assert.ok(panelHtml.includes(category));
  });

  merinoSolidSurfaces({}, { render: (...args) => { rendered = args; } });
  const solidSurfaceHtml = await ejs.renderFile(
    path.join(__dirname, "../views/public/layouts/main.ejs"),
    { ...rendered[1], footerData },
  );
  assert.ok(solidSurfaceHtml.includes("Merino Hanex"));

  actionTesa({}, { render: (...args) => { rendered = args; } });
  assert.equal(rendered[1].view, "pages/brand/action-tesa/main");
  assert.equal(rendered[1].seo.canonical, "http://localhost:3000/brand/action-tesa");

  [centuryPly, centuryLaminates, centuryVeneers, centuryDoors].forEach((controller) => {
    controller({}, { render: (...args) => { rendered = args; } });
    assert.match(rendered[1].view, /^pages\/brand\/centuryply(?:\/category\/.+)?\/main$/);
  });

  greenlam({}, { render: (...args) => { rendered = args; } });
  assert.equal(rendered[1].view, "pages/brand/greenlam/main");
  assert.equal(rendered[1].seo.canonical, "http://localhost:3000/brand/greenlam");

  greenlamLaminates({}, { render: (...args) => { rendered = args; } });
  assert.equal(rendered[1].view, "pages/brand/greenlam/category/laminates/main");
  assert.equal(rendered[1].seo.canonical, "http://localhost:3000/brand/greenlam/laminates");
});
