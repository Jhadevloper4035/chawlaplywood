# Chawla Plywood Deployment Guide

## Deploy on Vercel

This project is an Express and EJS website configured for Vercel through `api/index.js` and `vercel.json`.

## 1. Push Code to GitHub

```bash
git add .
git commit -m "Prepare app for Vercel deployment"
git push
```

## 2. Import Project in Vercel

1. Open `https://vercel.com`.
2. Click `Add New Project`.
3. Import this GitHub repository.

## 3. Configure Build Settings

Use these Vercel settings:

```text
Framework Preset: Other
Build Command: npm run vercel-build
Output Directory: Leave empty
Install Command: npm install
Root Directory: ./
```

## 4. Environment Variables

Add these variables in Vercel if needed:

```text
NODE_ENV=production
SITE_URL=https://your-vercel-domain.vercel.app
```

Do not add `PORT` on Vercel. Vercel manages the runtime port automatically.

## 5. Deploy

Click `Deploy`.

After deployment, Vercel sends requests to:

```text
api/index.js
```

The Express app handles routes through:

```text
src/app.js
```

Static files are served from:

```text
public/
```

EJS views are loaded from:

```text
src/views/
```

## Local Commands

Run locally:

```bash
npm start
```

Run syntax checks:

```bash
npm run check
```

Run the Vercel build check locally:

```bash
npm run vercel-build
```

## Deploy from Command Line

Install or run the Vercel CLI:

```bash
npx vercel --version
```

Login to Vercel:

```bash
npx vercel login
```

Deploy a preview build:

```bash
npx vercel
```

Deploy to production:

```bash
npx vercel --prod
```

During the first CLI deployment, Vercel may ask setup questions. Use:

```text
Set up and deploy: Yes
Which scope: Select your account/team
Link to existing project: No, unless already created
Project name: chawla-plywood
Directory: ./
Override settings: No
```

After deployment, add or update environment variables from the Vercel dashboard:

```text
NODE_ENV=production
SITE_URL=https://your-vercel-domain.vercel.app
```
