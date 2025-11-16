import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage.ts";

export class CheckboxesPage extends BasePage {
  readonly checkboxesLink: Locator;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    super(page);

    this.checkboxesLink = this.page.locator('a:has-text("Checkboxes")');
    this.checkbox1 = this.page.locator('#checkboxes input[type="checkbox"]').nth(0);
    this.checkbox2 = this.page.locator('#checkboxes input[type="checkbox"]').nth(1);
  }

  async goToCheckboxesPage(): Promise<void> {
    await this.click(this.checkboxesLink);
  }

  async toggleCheckbox1(): Promise<void> {
    await this.checkbox1.click();
  }

  async toggleCheckbox2(): Promise<void> {
    await this.checkbox2.click();
  }

  async isCheckbox1Checked(): Promise<boolean> {
    return await this.checkbox1.isChecked();
  }

  async isCheckbox2Checked(): Promise<boolean> {
    return await this.checkbox2.isChecked();
  }
}
