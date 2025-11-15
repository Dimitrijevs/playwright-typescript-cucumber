import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

import { page } from "../../hooks/hooks.ts";

Given("User click on the login link", async function () {
  await page.locator('a:has-text("Form Authentication")').click();
});

Given("User enter the username as {string}", async function (username) {
  await page.locator('#username').fill(username);
});

Given("User enter the password as {string}", async function (password) {
  await page.getByLabel('Password').fill(password);
});

When("User click on the login button", async function () {
  await page.locator('i:has-text("Login")').click();
});

Then("Login should be success", async function () {
  await expect(
    page.locator('div.flash.success')
  ).toBeVisible();
});

When("Login should fail", async function () {
  await expect(
    page.locator('div.flash.error')
  ).toBeVisible();
});
