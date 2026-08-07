# Cats & Friends

A one-page site for a charity evening in Novi Sad supporting cats with special health needs.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The current site is a static event landing page. It has no sign-in, database, forms, or stored visitor data.

## GitHub Pages

Create the static version for GitHub Pages:

```bash
npm run build:pages
```

The command creates the publishable site in `docs/`. This is a temporary build folder and is ignored by Git.

It includes English at the main address and Russian at `/ru/`.

Push only the source code:

```bash
git add .
git commit -m "Build site for GitHub Pages"
git push
```

On GitHub, open **Settings → Pages** for this repository. Under **Build and deployment**, choose **GitHub Actions**. After every push to `main`, GitHub will build and publish the site automatically. It will be available at:

`https://lena-ki.github.io/cats-and-friends/`

When a custom domain is connected later, change the **Build static site** command in `.github/workflows/deploy-pages.yml` to:

```yaml
run: PAGES_BASE_PATH=/ npm run build:pages
```
