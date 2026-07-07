# Chawla Plywood Website

Express and EJS website using a simple MVC structure.

## Structure

- `src/server.js` starts the HTTP server.
- `src/app.js` configures Express middleware, static files, routes, and error handlers.
- `src/config/` stores environment and path configuration.
- `src/controllers/` stores route handlers.
- `src/routes/` stores Express routers.
- `src/validators/` stores `express-validator` validation chains.
- `src/middleware/` stores shared middleware.
- `src/views/public/` stores public website EJS layouts, pages, and partials.
- `src/views/dashboard/` stores admin dashboard EJS layouts, pages, and partials.
- `public/` stores static files such as CSS, JS, images, and uploads.

## Commands

```bash
npm start
npm run dev
npm run check
```

Copy `.env.example` to `.env` when local environment values are needed.

## SEO Per Page

Every page should pass a `seo` object when rendering a view:

```js
const { buildSeo } = require("../config/seo");

res.render("public/layouts/main", {
  view: "pages/index",
  seo: buildSeo({
    title: "Page Title",
    description: "Page description for search engines.",
    keywords: "keyword one, keyword two",
    path: "/page-url",
    image: "/assets/images/example.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Page Title",
    },
  }),
});
```

For dynamic pages, build this object from the record:

```js
seo: buildSeo({
  title: product.seoTitle || product.name,
  description: product.seoDescription || product.shortDescription,
  path: `/products/${product.slug}`,
  image: product.image,
  type: "product",
});
```
