import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { type Browser, type Page, type BrowserContext } from "playwright";
import { invokeBrowser } from "../../helpers/browsers/browserManager.ts";
import { getEnv } from "../../helpers/env/env.ts";

let browser: Browser;
let context: BrowserContext;
export let page: Page;

BeforeAll(async function () {

  getEnv();

  browser = await invokeBrowser();
});

Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function () {
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
