import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { type Browser, type Page, type BrowserContext } from "playwright";
import { getEnv } from "../helpers/env/env.ts";
import { invokeBrowser } from "../helpers/browsers/browserManager.ts";

let browser: Browser;
let context: BrowserContext;
export let page: Page;

BeforeAll(async function () {
  getEnv();

  browser = await invokeBrowser();
});

// to run before each scenario with @Auth tag
// Before("@Auth", async function () {
Before(async function ({ pickle }) {
  context = await browser.newContext();

  const scenarioName = pickle.name.replace(/\s+/g, "_") + `_${Date.now()}`;

  await context.tracing.start({
    name: scenarioName,
    title: pickle.name,
    sources: true,
    screenshots: true,
    snapshots: true,
  });

  page = await context.newPage();
});

After(async function ({ pickle, result }) {

    console.log(pickle, result);

  const scenarioName = pickle.name.replace(/\s+/g, "_") + `_${Date.now()}`;

  if (result?.status === "FAILED") {
    console.log(`Scenario '${scenarioName}' failed. Saving trace...`);

    console.log(
      `Trace saved for failed scenario: traces/${scenarioName}_failed_trace.zip`
    );
  } else {
    console.log(`Scenario '${scenarioName}' passed. Tracing stopped.`);
  }

  await context.tracing.stop({
    path: `traces/${scenarioName}_trace.zip`,
  });

  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
