import { Given } from "@cucumber/cucumber";

import { page } from "../hooks/hooks.ts";

Given("User navigates to the application", async function () {

  await page.goto("https://the-internet.herokuapp.com/");
});