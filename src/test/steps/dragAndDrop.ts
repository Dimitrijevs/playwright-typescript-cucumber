import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { page } from "../../hooks/hooks.ts";

import { DragAndDropPage } from "../../pageObjectModels/DragAndDrop.ts";

let dragAndDropPage: DragAndDropPage;


Given("User clicks on Drag and Drop link", async function () {
  
  dragAndDropPage = new DragAndDropPage(page);

  await dragAndDropPage.goToDragAndDropPage();
});

When("User selects box A and drags it to box B", async function () {

  await dragAndDropPage.draggableA
    .dragTo(dragAndDropPage.draggableB);
});

Then("Box A should be in the position of Box B", async function () {
  
    const boxAText = await dragAndDropPage.getBoxAText();

    expect(boxAText).toBe("B");
});

Then("Box B should be in the position of Box A", async function () {
  
    const boxBText = await dragAndDropPage.getBoxBText();

    expect(boxBText).toBe("A");
});