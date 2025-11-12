import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { chromium } from "playwright-core";
import { type Browser, type Page, BrowserContext } from "playwright";

let browser: Browser;
let context: BrowserContext;
export let page: Page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
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
