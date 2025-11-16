import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

import { page } from "../../hooks/hooks.ts";
import { LoginPage } from "../../pageObjectModels/LoginPage.ts";

let loginPage: LoginPage;

Given("User click on the login link", async function () {

  loginPage = new LoginPage(page);

  await loginPage.goToLoginPage();
});

When(
  "User enter the username as {string} and User enter the password as {string}, User click on the login button",
  async function (username: string, password: string) {

    await loginPage.login(username, password);
  }
);

Then("Login should be success", async function () {
  await expect(loginPage.successBanner).toBeVisible();
});

Then("Login should fail", async function () {
  await expect(loginPage.errorBanner).toBeVisible();
});
