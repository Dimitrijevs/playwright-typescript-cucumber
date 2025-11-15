import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

import { page } from "../hooks/hooks.ts";

Given("User clicks on Drag and Drop link", async function () {
  await page.locator('a:has-text("Drag and Drop")').click();
});

When("User selects box A and drags it to box B", async function () {

  await page.locator('#column-a')
    .dragTo(page.locator('#column-b'));
});

Then("Box A should be in the position of Box B", async function () {
  
    const boxAText = await page.locator('#column-a header').textContent();

    expect(boxAText).toBe("B");
});

Then("Box B should be in the position of Box A", async function () {
  
    const boxBText = await page.locator('#column-b header').textContent();

    expect(boxBText).toBe("A");
});