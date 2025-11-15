import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

import { page } from "../../hooks/hooks.ts";

Given("User clicks on Dropdown link", async function () {
  await page.locator('a:has-text("Dropdown")').click();
});

When("User selects {string}", async function (option: string) {

  const dropDownList = page.locator('#dropdown');

  await dropDownList.selectOption(option);
});

Then("the selected value should be {string}", async function (value: string) {

  const dropDownList = page.locator('#dropdown');

  const selectedOption = await dropDownList.inputValue();

  expect(selectedOption).toBe(value);
});