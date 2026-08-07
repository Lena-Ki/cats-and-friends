import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const outputDirectory = new URL("../docs/", import.meta.url);
const clientDirectory = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
const basePath = process.env.PAGES_BASE_PATH ?? "/";
const customDomain = process.env.PAGES_CUSTOM_DOMAIN ?? "catsandfriends.org";

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const { default: worker } = await import(
  `${pathToFileURL(workerUrl.pathname).href}?build=${Date.now()}`
);
const render = async (route, directory, language) => {
  const response = await worker.fetch(
    new Request(`https://example.com${route}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) throw new Error(`Could not render ${route}: ${response.status}`);

  const html = (await response.text())
    .replace('<html lang="en"', `<html lang="${language}"`)
    .replaceAll('href="/', `href="${basePath}`)
    .replaceAll('src="/', `src="${basePath}`)
    .replace("<head>", `<head><base href="${basePath}">`);

  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
};

await Promise.all([
  render("/", outputDirectory, "en"),
  render("/ru", new URL("ru/", outputDirectory), "ru"),
  render("/sr", new URL("sr/", outputDirectory), "sr"),
  writeFile(new URL(".nojekyll", outputDirectory), ""),
  writeFile(new URL("CNAME", outputDirectory), `${customDomain}\n`),
]);

console.log(`GitHub Pages files are ready in ${outputDirectory.pathname}`);
