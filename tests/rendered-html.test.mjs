import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete research homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Jeonghwan Kim \| Satellite Edge Intelligence<\/title>/i);
  assert.match(html, /Research Interests/);
  assert.match(html, /BLADE: Battery-Lifespan-Aware/);
  assert.match(html, /Technical Report/);
  assert.match(html, /Mobile Ad Hoc and Smart Systems/);
  assert.match(html, /ghks9876@dgist\.ac\.kr/);
  assert.match(html, /https:\/\/orcid\.org\/0009-0007-1215-2094/);
  assert.doesNotMatch(html, /my-orcid\?/);
  assert.doesNotMatch(html, /href="tel:/i);
});
