import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage.ts";

export class DragAndDropPage extends BasePage {
    readonly dragAndDropLink: Locator;
    readonly draggableA: Locator
    readonly draggableB: Locator

    constructor(page: Page) {
        super(page);
        
        this.dragAndDropLink = this.page.locator('a:has-text("Drag and Drop")');
        this.draggableA = this.page.locator('#column-a');
        this.draggableB = this.page.locator('#column-b');
    }

    async goToDragAndDropPage(): Promise<void> {
        await this.click(this.dragAndDropLink);
    }

    async dragAtoB(): Promise<void> {
        await this.draggableA.dragTo(this.draggableB);
    }

    async dragBtoA(): Promise<void> {
        await this.draggableB.dragTo(this.draggableA);
    }

    async getBoxAText(): Promise<string | null> {
        return await this.draggableA.locator('header').textContent();
    }
    
    async getBoxBText(): Promise<string | null> {
        return await this.draggableB.locator('header').textContent();
    }
}