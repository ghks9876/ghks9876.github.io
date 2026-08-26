import { spawnSync } from "node:child_process";
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const exportFile = join(projectRoot, "dist", "client", "index.html");
const buildStartedAt = Date.now();
const build = spawnSync(
  process.execPath,
  [join(projectRoot, "node_modules", "vinext", "dist", "cli.js"), "build"],
  {
    cwd: projectRoot,
    env: { ...process.env, GITHUB_PAGES: "true" },
    stdio: "inherit",
  },
);

const exportIsFresh =
  existsSync(exportFile) && statSync(exportFile).mtimeMs >= buildStartedAt - 1000;
const windowsUvShutdownStatus =
  process.platform === "win32" &&
  (build.status === 3221226505 || build.status === -1073740791);

if (build.status !== 0 && !(windowsUvShutdownStatus && exportIsFresh)) {
  process.exit(build.status ?? 1);
}

if (!exportIsFresh) {
  throw new Error("Static export did not produce a fresh index.html file.");
}

let html = readFileSync(exportFile, "utf8");
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*href="\/_next\/[^>]*>/gi, "")
  .replace(/<!-- -->/g, "")
  .replace(
    "<!DOCTYPE html>",
    "<!DOCTYPE html>\n<!-- Generated from app/page.tsx by scripts/build-pages.mjs. -->",
  )
  .replace(
    "</head>",
    '<link rel="canonical" href="https://ghks9876.github.io/"/></head>',
  );

writeFileSync(join(projectRoot, "index.html"), html, "utf8");

mkdirSync(join(projectRoot, "assets"), { recursive: true });
mkdirSync(join(projectRoot, "images"), { recursive: true });
cpSync(join(projectRoot, "public", "assets"), join(projectRoot, "assets"), {
  recursive: true,
  force: true,
});

for (const stylesheet of ["main.css", "custom.css"]) {
  const stylesheetPath = join(projectRoot, "assets", "css", stylesheet);
  const normalizedCss = readFileSync(stylesheetPath, "utf8")
    .replace(/[ \t]+$/gm, "")
    .replace(/^ +\t/gm, "\t");
  writeFileSync(stylesheetPath, normalizedCss, "utf8");
}

cpSync(join(projectRoot, "public", "images"), join(projectRoot, "images"), {
  recursive: true,
  force: true,
});
copyFileSync(
  join(projectRoot, "public", "favicon.svg"),
  join(projectRoot, "favicon.svg"),
);
copyFileSync(
  join(projectRoot, "public", ".nojekyll"),
  join(projectRoot, ".nojekyll"),
);

console.log("GitHub Pages files generated at the repository root.");
