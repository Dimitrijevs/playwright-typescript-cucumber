import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

import { page } from "../../hooks/hooks.ts";

import { DropdownPage } from "../../pageObjectModels/DropdownPage.ts";

let dropdownPage: DropdownPage;

Given("User clicks on Dropdown link", async function () {

  dropdownPage = new DropdownPage(page);

  await dropdownPage.dropdownLink.click();
});

When("User selects {string}", async function (option: string) {

  await dropdownPage.selectOption(option);
});

Then("the selected value should be {string}", async function (value: string) {

  const selectedValue = await dropdownPage.getSelectedValue();
  
  expect(selectedValue).toBe(value);
});