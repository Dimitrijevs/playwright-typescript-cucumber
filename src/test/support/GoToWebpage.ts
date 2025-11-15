import { Given, setDefaultTimeout } from "@cucumber/cucumber";

import { page } from "../hooks/hooks.ts";

setDefaultTimeout(10 * 1000);

Given("User navigates to the application", async function () {

  const url = process.env.BASE_URL;

  if (!url) throw new Error('❌ BASE_URL not set');

  await page.goto(url);
});