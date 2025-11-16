import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks.ts";

import { CheckboxesPage } from "../../pageObjectModels/CheckboxesPage.ts";

let checkboxesPage: CheckboxesPage;

Given("User clicks on Checkboxes link", async function () {
  
  checkboxesPage = new CheckboxesPage(page);

  await checkboxesPage.goToCheckboxesPage();
});

When("User checks the first checkbox", async function () {

  await checkboxesPage.toggleCheckbox1();
});

Then("The first checkbox should be checked", async function () {
  
    const isChecked = await checkboxesPage.isCheckbox1Checked();

    expect(isChecked).toBe(true);
});

When("User unchecks the second checkbox", async function () {

  await checkboxesPage.toggleCheckbox2();
});

Then("The second checkbox should be unchecked", async function () {
  
    const isChecked = await checkboxesPage.isCheckbox2Checked();

    expect(isChecked).toBe(false);
});